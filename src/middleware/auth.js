// Import required libraries
import jwt from 'jsonwebtoken'; // Used to generate and verify JSON Web Tokens (JWT)
import dotenv from 'dotenv'; // Loads environment variables from a .env file

dotenv.config(); // Initialize environment variables

/**
 * Middleware to authenticate and authorize users
 * @param {string|string[]} roles - Role(s) allowed to access the route (e.g., 'admin', ['admin', 'client'])
 * @returns {Function} Middleware function
 */
const authenticate = (roles = []) => {
    // If roles is a single string, convert it to an array for consistency
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return (req, res, next) => {
        try {
            // Extract the token from the Authorization header
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Access token missing or invalid' });
            }

            // Verify the token using the secret key
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Check if the user's role matches one of the allowed roles
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Access forbidden: insufficient privileges' });
            }

            // Attach user data to the request object for further use
            req.user = decoded;

            // Proceed to the next middleware or route handler
            next();
        } catch (error) {
            // Handle invalid or expired tokens
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
    };
};

// Export the middleware function as a named export
export { authenticate };
