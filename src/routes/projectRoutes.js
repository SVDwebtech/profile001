import express from 'express'; // Express framework for routing
import { authenticateUser, authorizeRole, checkProjectData } from '../middleware/auth.js'; // Authentication and authorization middleware
import * as projectController from '../controllers/projectController.js'; // Project controller containing the logic
// import { checkProjectData } from '../middleware/validate.js'; // Middleware to validate project data

const projectRoutes = express.Router();

/**
 * Admin Routes
 */

// Create a new project (Admin only)
projectRoutes.post('/', authenticateUser, authorizeRole('admin'), checkProjectData, projectController.createProject);

// Update an existing project (Admin only)
projectRoutes.put('/:projectId', authenticateUser, authorizeRole('admin'), checkProjectData, projectController.updateProject);

// Delete a project (Admin only)
projectRoutes.delete('/:projectId', authenticateUser, authorizeRole('admin'), projectController.deleteProject);

// Fetch all projects (Admin can see all, including unpublished)
projectRoutes.get('/admin', authenticateUser, authorizeRole('admin'), projectController.getAllProjects);

/**
 * Client Routes
 */

// View client's own projects (if they are in progress)
projectRoutes.get('/client', authenticateUser, authorizeRole('client'), projectController.getClientProjects);

// Comment on a client's own project (while in progress)
projectRoutes.post('/:projectId/comments', authenticateUser, authorizeRole('client'), projectController.commentOnProject);

// Review a completed project (client's own projects only)
projectRoutes.post('/:projectId/reviews', authenticateUser, authorizeRole('client'), projectController.reviewProject);

/**
 * Public Routes
 */

// Fetch all published projects (Public access)
projectRoutes.get('/', projectController.getPublishedProjects);

// Like a project (Public users and authenticated users can like)
projectRoutes.post('/:projectId/likes', authenticateUser, projectController.likeProject);

// Filter published projects by category (Public access)
projectRoutes.get('/categories/:categoryId', projectController.filterProjectsByCategory);

export default projectRoutes;