import pool from '../../config/db.js'; // Database connection

// Fetch all projects for the admin (including unpublished ones)
const getAllProjects = async () => {
    try {
        const [projects] = await pool.query('SELECT * FROM projects');
        return projects;
    } catch (error) {
        throw new Error('Error fetching all projects');
    }
};

// Fetch all published projects (public access)
const getPublishedProjects = async () => {
    try {
        const [projects] = await pool.query('SELECT * FROM projects WHERE status = "published"');
        return projects;
    } catch (error) {
        throw new Error('Error fetching published projects');
    }
};

// Fetch projects for a specific client (in-progress)
const getClientProjects = async (clientId) => {
    try {
        const [projects] = await pool.query(
            'SELECT * FROM projects WHERE client_id = ? AND status = "in progress"',
            [clientId]
        );
        return projects;
    } catch (error) {
        throw new Error('Error fetching client projects');
    }
};

// Create a new project
const createProject = async (projectData) => {
    const { name, description, client_id, status, category_id } = projectData;
    try {
        const [result] = await pool.query(
            'INSERT INTO projects (name, description, client_id, status, category_id) VALUES (?, ?, ?, ?, ?)',
            [name, description, client_id, status, category_id]
        );
        return result.insertId;
    } catch (error) {
        throw new Error('Error creating project');
    }
};

// Update an existing project
const updateProject = async (projectId, projectData) => {
    const { name, description, status, category_id } = projectData;
    try {
        await pool.query(
            'UPDATE projects SET name = ?, description = ?, status = ?, category_id = ? WHERE id = ?',
            [name, description, status, category_id, projectId]
        );
        return true;
    } catch (error) {
        throw new Error('Error updating project');
    }
};

// Delete a project
const deleteProject = async (projectId) => {
    try {
        await pool.query('DELETE FROM projects WHERE id = ?', [projectId]);
        return true;
    } catch (error) {
        throw new Error('Error deleting project');
    }
};

// Add a comment to a project
const addCommentToProject = async (projectId, clientId, comment) => {
    try {
        await pool.query(
            'INSERT INTO comments (project_id, client_id, comment) VALUES (?, ?, ?)',
            [projectId, clientId, comment]
        );
        return true;
    } catch (error) {
        throw new Error('Error adding comment to project');
    }
};

// Add a review to a project
const addReviewToProject = async (projectId, clientId, rating, reviewText) => {
    try {
        await pool.query(
            'INSERT INTO reviews (project_id, client_id, rating, review_text) VALUES (?, ?, ?, ?)',
            [projectId, clientId, rating, reviewText]
        );
        return true;
    } catch (error) {
        throw new Error('Error adding review to project');
    }
};

// Like a project
const likeProject = async (projectId, userId) => {
    try {
        await pool.query(
            'INSERT INTO likes (project_id, user_id) VALUES (?, ?)',
            [projectId, userId]
        );
        return true;
    } catch (error) {
        throw new Error('Error liking project');
    }
};

// Filter projects by category
const filterProjectsByCategory = async (categoryId) => {
    try {
        const [projects] = await pool.query(
            'SELECT * FROM projects WHERE category_id = ?',
            [categoryId]
        );
        return projects;
    } catch (error) {
        throw new Error('Error filtering projects by category');
    }
};

export {
    getAllProjects,
    getPublishedProjects,
    getClientProjects,
    createProject,
    updateProject,
    deleteProject,
    addCommentToProject,
    addReviewToProject,
    likeProject,
    filterProjectsByCategory
};
