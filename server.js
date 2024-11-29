// server.js: main entry point for the backend
import express from 'express';
import dotenv from 'dotenv';
// load environment variables from .env file
dotenv.config();
// create an instance of an Express application. `express()` initializes the main application object, which is used to define routes, middleware, and other server-related functionality.
const app = express();
// define the port: Use the environment variable PORT or default to 3000
const port = process.env.PORT || 3000;
// home page route
app.get('/', (req, res) => {
      res.send('Welcome to my server!');
    });
// start the server
app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
