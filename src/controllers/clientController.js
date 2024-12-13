import bcrypt from 'bcryptjs'; // For hashing passwords
import { validationResult } from 'express-validator'; // Input validation
import { getClientProjects, commentOnProject, reviewCompletedProject, updateClientDetails } from '../../src/models/clientModel.js';

/**
 * Fetch all projects belonging to the authenticated client
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getClientProjectsController = async (req, res) => {
    const clientId = req.user.id; // Retrieve client ID from the authenticated user

    try {
        const projects = await getClientProjects(clientId);
        return res.status(200).json({ projects });
    } catch (error) {
        console.error('Error fetching client projects:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Add a comment to a project
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const commentOnProjectController = async (req, res) => {
    const clientId = req.user.id;
    const { projectId, comment } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await commentOnProject(projectId, clientId, comment);
        return res.status(201).json({ message: 'Comment added successfully' });
    } catch (error) {
        console.error('Error adding comment:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Review a completed project
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const reviewCompletedProjectController = async (req, res) => {
    const clientId = req.user.id;
    const { projectId, rating, reviewText } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await reviewCompletedProject(projectId, clientId, rating, reviewText);
        return res.status(201).json({ message: 'Review submitted successfully' });
    } catch (error) {
        console.error('Error submitting review:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Update client details
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const updateClientDetailsController = async (req, res) => {
    const clientId = req.user.id;
    const { name, email, password } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let passwordHash = null;

        if (password) {
            const salt = await bcrypt.genSalt(10);
            passwordHash = await bcrypt.hash(password, salt);
        }

        await updateClientDetails(clientId, name, email, passwordHash);
        return res.status(200).json({ message: 'Client details updated successfully' });
    } catch (error) {
        console.error('Error updating client details:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export { getClientProjectsController, commentOnProjectController, reviewCompletedProjectController, updateClientDetailsController };
