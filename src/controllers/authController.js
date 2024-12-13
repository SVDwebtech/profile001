import bcrypt from 'bcryptjs'; // For hashing and verifying passwords
import jwt from 'jsonwebtoken'; // For creating and verifying JWT tokens
import dotenv from 'dotenv'; // Load environment variables from .env file
import pool from '../../config/db.js'; // Database connection

// Load environment variables
dotenv.config();

// Retrieve JWT secret and expiration from environment variables
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h'; // Default to '1h' if not set in the environment variables

/**
 * Controller to handle user login (for both admins and clients)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

//Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Query the database for a user with the given email
        const [userResults] = await pool.query(
            `SELECT id, email, password_hash, role FROM users WHERE email = ?`,
            [email]
        );

        // Check if a user was found
        if (userResults.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = userResults[0]; // Retrieve the user object

        // Verify the provided password matches the stored hash
        const isPasswordCorrect = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Create a JWT token with the user details and expiration time
        const token = jwt.sign(
            { id: user.id, role: user.role },
            JWT_SECRET, // The secret key for signing the token
            { expiresIn: JWT_EXPIRES_IN } // Set the expiration time for the token
        );

        // Send a successful response with the token and user details
        return res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Controller to handle user registration (for clients only)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

// Register User
const registerClient = async (req, res) => {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    try {
        // Hash the password using bcrypt to ensure secure storage
        const salt = await bcrypt.genSalt(10); // Generate salt for password hashing
        const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

        // Insert the new client into the database
        const [result] = await pool.query(
            `INSERT INTO clients (name, email, password_hash) VALUES (?, ?, ?)`,
            [name, email, hashedPassword]
        );

        // Respond with the newly created client ID
        return res.status(201).json({
            message: 'Client registered successfully',
            clientId: result.insertId
        });
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

//export
export { registerClient, loginUser };