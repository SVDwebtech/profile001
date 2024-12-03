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
// Middleware to handle 404 errors (Non-existent routes)
app.use((req, res, next) => {
  // Render the custom 404 page
  res.status(404).render('404');
});
// Centralized error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error details
  const statusCode = err.status || 500; // Default status code
  res.status(statusCode).send({
      error: 'Internal Server Error',
      message: process.env.NODE_ENV === 'development' ? err.message : 'An unexpected error occurred.',
  });
});
// Start the server
app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
