import jwt from 'jsonwebtoken'; // For verifying JWT tokens
import pool from '../../config/db.js'; // Database connection
import dotenv from 'dotenv'; // Load environment variables from .env file

// Load environment variables from the .env file
dotenv.config();

// Retrieve JWT secret and expiration from environment variables
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h'; // Default to '1h' if not set in the environment variables

/**
 * Middleware to authenticate a user using a JWT token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract the token from the Authorization header

    if (!token) {
        return res.status(401).json({ message: 'Authentication token is required' });
    }

    try {
        // Verify the token and decode its payload
        const decoded = jwt.verify(token, JWT_SECRET);

        // Fetch user details from the database using the ID from the token
        const [userResults] = await pool.query(`SELECT id, email, role FROM users WHERE id = ?`, [decoded.id]);
        if (userResults.length === 0) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Attach the user object to the request for access in subsequent handlers
        req.user = userResults[0];
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

/**
 * Middleware to authorize users based on their role
 * @param {Array} allowedRoles - List of roles allowed to access the route
 * @returns {Function} Middleware function
 */
const authorizeRole = (allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.user?.role; // Get the user's role from the authenticated request

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ message: 'Access denied. Insufficient permissions' });
        }

        next(); // Proceed if the user's role is allowed
    };
};

/**
 * Middleware to validate project data in POST and PUT requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const checkProjectData = (req, res, next) => {
    const { title, description, category_id } = req.body;

    const errors = [];
    if (!title || typeof title !== 'string' || title.trim().length < 3) {
        errors.push('Title must be a string with at least 3 characters');
    }
    if (!description || typeof description !== 'string' || description.trim().length < 10) {
        errors.push('Description must be a string with at least 10 characters');
    }
    if (!category_id || isNaN(category_id)) {
        errors.push('Category ID must be a valid number');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: 'Invalid project data', errors });
    }

    next(); // Proceed to the next middleware or route handler if validation passes
};

export { authenticateUser, authorizeRole, checkProjectData };