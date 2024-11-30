// server.js: main entry point for the backend
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
// load environment variables from .env file
dotenv.config();
// create an instance of an Express application. `express()` initializes the main application object, which is used to define routes, middleware, and other server-related functionality.
const app = express();
// define the port: Use the environment variable PORT or default to 3000
const port = process.env.PORT || 5000;

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.set('view engine', 'ejs'); // set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // set the views folder
app.use(express.static('public')); // serve static files from the "public" folder
app.use(express.json()); // parse JSON requests

// route to serve the home page
app.get('/', (req, res) => {
      res.send('Welcome to my server!');
    });
// route to serve the portfolio page
app.get('/portfolio', (req, res) => {
      // Render the 'portfolio.ejs' template located in the 'views' folder
      res.render('portfolio');
  });
// start the server
app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
