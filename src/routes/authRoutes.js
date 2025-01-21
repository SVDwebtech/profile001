import express from 'express';
import { registerClient, loginUser } from '../controllers/authController.js';

const authRoutes = express.Router();

// Route for client registration
authRoutes.post('/register', registerClient);

// Route for user login
authRoutes.post('/login', loginUser);

export default authRoutes;
