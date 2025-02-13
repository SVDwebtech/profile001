// Main entry point for the backend:- server.js
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './src/routes/authRoutes.js';
import clientRoutes from './src/routes/clientRoutes.js';
import projectRoutes from './src/routes/projectRoutes.js';
import { authenticateUser } from './src/middleware/auth.js';
// import browser-sync
import browserSync from 'browser-sync';

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
app.use(helmet()); // Add security headers
app.use(cors()); // Enable cross-origin resource sharing
app.use(morgan('dev')); // Log HTTP requests in the console
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the "public" folder
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to serve the home page
app.get('/', (req, res) => {
      res.render('home');
    });

// Route to serve the portfolio page
app.get('/portfolio', (req, res) => {
      // Render the 'portfolio.ejs' template located in the 'views' folder
      res.render('portfolio');
      // res.send("<h1>Hello World!</h1>");
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

// Test authenticate for /protected-route
app.get('/protected-route', authenticateUser, (req, res) => {
      res.json({ message: `Welcome, ${req.user.name}!` });
    });

// Integrate Auth Routes
app.use('/api/auth', authRoutes);

// Integrate Client Routes
app.use('/api/clients', clientRoutes);

// Integrate Project Routes
app.use('/api/projects', projectRoutes);

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
  console.log(`🚀 Server running at http://localhost:${port}`);

  // <script async src="/browser-sync/browser-sync-client.js"></script> --> insert this inside the <head> of each page
  // 🔹 Initialize BrowserSync after Express starts
  const bs = browserSync.create();
  bs.init({
      proxy: `http://localhost:${port}`, // Proxy Express server
      files: ["views/**/*.ejs", "public/**/*.{css,js,html}"], // Watch changes
      watch: true, // Auto-detect file changes
      notify: false, // Disable pop-up notifications
      open: 'local', // Auto-opening browser
      reloadDelay: 500, // Avoid conflicts
      injectChanges: true, // 🔥 Injects CSS changes instead of full reload
      ui: { port: 3001 } // Set UI port
  });
});