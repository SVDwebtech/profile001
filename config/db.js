// config/db.js
import mysql from 'mysql2/promise'; // Use the promise version of mysql2 for async/await support
import dotenv from 'dotenv'; // Load environment variables from .env file

dotenv.config(); // Initialize dotenv to access environment variables

// Create a pool of database connections
const pool = mysql.createPool({
  host: process.env.DB_HOST, // Database host
  user: process.env.DB_USER, // Database username
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME, // Database name
  waitForConnections: true, // If all connections are in use, queue incoming requests
  connectionLimit: 10, // Maximum number of connections allowed at once
  queueLimit: 0 // Unlimited number of queued requests
});

// Export the pool object for reuse in other parts of the application
export default pool;