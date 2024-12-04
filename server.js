// Main entry point for the backend:- server.js
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
// Load environment variables from .env file
dotenv.config();
// Create an instance of an Express application. `express()` initializes the main application object, which is used to define routes, middleware, and other server-related functionality.
const app = express();
// Define the port: Use the environment variable PORT or default to 3000
const port = process.env.PORT || 5000;

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the views folder
app.use(express.static('public')); // Serve static files from the "public" folder
app.use(express.json()); // Parse JSON requests

// Route to serve the home page
app.get('/', (req, res) => {
      res.send('Welcome to my server!');
    });
// Route to serve the portfolio page
app.get('/portfolio', (req, res) => {
      // Render the 'portfolio.ejs' template located in the 'views' folder
      res.render('portfolio');
    });
// Define a route to intentionally trigger an error for testing
app.get('/test-error', (req, res, next) => {
      console.log('Hello from the test-error page');
      // Create a new Error object with a custom error message
      const error = new Error('This is a test error!');      
      // Optionally set an HTTP status code for the error (default is 500 if not set)
      error.status = 500;
      // Pass the error to the next middleware (the centralized error-handling middleware)
      next(error);
    });
// Middleware to handle 404 errors (Non-existent routes)
app.use((req, res, next) => {
      // Render the custom 404 page
      res.status(404).render('404');
    });
// Centralized error-handling middleware
app.use((err, req, res, next) => {
      console.error(err.stack); // Log error details
      const statusCode = err.status || 500; // Default status code
      if (res.headersSent) {
        // If headers are already sent, delegate to the default Express error handler
        return next(err);
      }
      // Render a friendly error page for users
      res.status(statusCode);
      if (process.env.NODE_ENV === 'development') {
        // Show detailed error info in development mode
        res.render('error', { 
          error: 'Internal Server Error',
          message: err.message,
          statusCode 
        });
      } else {
        // Show a generic error page in production
        res.render('error', { 
          error: 'Something went wrong.',
          message: 'We’re working on it. Please try again later.',
          statusCode
        });
      }
    });
// Start the server
app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
