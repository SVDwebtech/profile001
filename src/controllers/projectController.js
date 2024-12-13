import * as projectModel from '../models/projectModel.js'; // Import project model functions
import { validationResult } from 'express-validator'; // Input validation

// Fetch all projects for the admin (including unpublished ones)
const getAllProjects = async (req, res) => {
    try {
        const projects = await projectModel.getAllProjects();
        return res.status(200).json({ projects });
    } catch (error) {
        console.error('Error fetching all projects:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Fetch all published projects (public access)
const getPublishedProjects = async (req, res) => {
    try {
        const projects = await projectModel.getPublishedProjects();
        return res.status(200).json({ projects });
    } catch (error) {
        console.error('Error fetching published projects:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Fetch projects for a specific client (in-progress)
const getClientProjects = async (req, res) => {
    const clientId = req.user.id; // Get the authenticated client's ID
    try {
        const projects = await projectModel.getClientProjects(clientId);
        return res.status(200).json({ projects });
    } catch (error) {
        console.error('Error fetching client projects:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Create a new project
const createProject = async (req, res) => {
    const { name, description, status, category_id } = req.body;
    const clientId = req.user.id; // Get the authenticated client's ID

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const projectData = { name, description, client_id: clientId, status, category_id };
        const projectId = await projectModel.createProject(projectData);
        return res.status(201).json({ message: 'Project created successfully', projectId });
    } catch (error) {
        console.error('Error creating project:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Update an existing project
const updateProject = async (req, res) => {
    const projectId = req.params.projectId;
    const { name, description, status, category_id } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const projectData = { name, description, status, category_id };
        await projectModel.updateProject(projectId, projectData);
        return res.status(200).json({ message: 'Project updated successfully' });
    } catch (error) {
        console.error('Error updating project:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Delete a project
const deleteProject = async (req, res) => {
    const projectId = req.params.projectId;

    try {
        await projectModel.deleteProject(projectId);
        return res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Error deleting project:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Add a comment to a project
const commentOnProject = async (req, res) => {
    const { projectId, comment } = req.body;
    const clientId = req.user.id;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await projectModel.addCommentToProject(projectId, clientId, comment);
        return res.status(201).json({ message: 'Comment added successfully' });
    } catch (error) {
        console.error('Error adding comment:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Add a review to a project
const reviewProject = async (req, res) => {
    const { projectId, rating, reviewText } = req.body;
    const clientId = req.user.id;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await projectModel.addReviewToProject(projectId, clientId, rating, reviewText);
        return res.status(201).json({ message: 'Review submitted successfully' });
    } catch (error) {
        console.error('Error submitting review:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Like a project
const likeProject = async (req, res) => {
    const projectId = req.params.projectId;
    const userId = req.user.id;

    try {
        await projectModel.likeProject(projectId, userId);
        return res.status(201).json({ message: 'Project liked successfully' });
    } catch (error) {
        console.error('Error liking project:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Filter projects by category
const filterProjectsByCategory = async (req, res) => {
    const { categoryId } = req.params;

    try {
        const projects = await projectModel.filterProjectsByCategory(categoryId);
        return res.status(200).json({ projects });
    } catch (error) {
        console.error('Error filtering projects by category:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export {
    getAllProjects,
    getPublishedProjects,
    getClientProjects,
    createProject,
    updateProject,
    deleteProject,
    commentOnProject,
    reviewProject,
    likeProject,
    filterProjectsByCategory
};
