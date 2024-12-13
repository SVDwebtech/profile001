import express from 'express';
import { 
    getClientProjectsController, commentOnProjectController, reviewCompletedProjectController, updateClientDetailsController 
} from '../controllers/clientController.js';
import { authenticateUser } from '../middleware/auth.js';
import { body } from 'express-validator';

const clientRoutes = express.Router();

// Route to fetch client's in-progress projects
clientRoutes.get('/projects', authenticateUser, getClientProjectsController);

// Route to add a comment to a project
clientRoutes.post(
    '/projects/comment',
    authenticateUser,
    [
        body('projectId').notEmpty().withMessage('Project ID is required'),
        body('comment').notEmpty().withMessage('Comment text is required')
    ],
    commentOnProjectController
);

// Route to review a completed project
clientRoutes.post(
    '/projects/review',
    authenticateUser,
    [
        body('projectId').notEmpty().withMessage('Project ID is required'),
        body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
        body('reviewText').notEmpty().withMessage('Review text is required')
    ],
    reviewCompletedProjectController
);

// Route to update client details
clientRoutes.put(
    '/profile',
    authenticateUser,
    [
        body('name').optional().isString().withMessage('Name must be a string'),
        body('email').optional().isEmail().withMessage('Invalid email format'),
        body('password')
            .optional()
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long')
    ],
    updateClientDetailsController
);

export default clientRoutes;