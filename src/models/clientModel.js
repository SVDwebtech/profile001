import pool from '../../config/db.js';

/**
 * Fetch all projects belonging to the authenticated client
 * @param {number} clientId - The client ID
 * @returns {Promise<Object[]>} - A promise that resolves to the list of projects
 */
const getClientProjects = async (clientId) => {
    const [projects] = await pool.query(
        `SELECT * FROM projects WHERE client_id = ? AND status = 'in progress'`,
        [clientId]
    );
    return projects;
};

/**
 * Add a comment to a project
 * @param {number} projectId - The project ID
 * @param {number} clientId - The client ID
 * @param {string} comment - The comment text
 * @returns {Promise<void>} - A promise that resolves once the comment is added
 */
const commentOnProject = async (projectId, clientId, comment) => {
    await pool.query(
        `INSERT INTO comments (project_id, client_id, comment) VALUES (?, ?, ?)`,
        [projectId, clientId, comment]
    );
};

/**
 * Review a completed project
 * @param {number} projectId - The project ID
 * @param {number} clientId - The client ID
 * @param {number} rating - The project rating
 * @param {string} reviewText - The review text
 * @returns {Promise<void>} - A promise that resolves once the review is added
 */
const reviewCompletedProject = async (projectId, clientId, rating, reviewText) => {
    await pool.query(
        `INSERT INTO reviews (project_id, client_id, rating, review_text) VALUES (?, ?, ?, ?)`,
        [projectId, clientId, rating, reviewText]
    );
};

/**
 * Update client details
 * @param {number} clientId - The client ID
 * @param {string} name - The client's name
 * @param {string} email - The client's email
 * @param {string} passwordHash - The hashed password
 * @returns {Promise<void>} - A promise that resolves once the client details are updated
 */
const updateClientDetails = async (clientId, name, email, passwordHash) => {
    let updateQuery = `UPDATE clients SET `;
    const params = [];

    if (name) {
        updateQuery += `name = ?, `;
        params.push(name);
    }

    if (email) {
        updateQuery += `email = ?, `;
        params.push(email);
    }

    if (passwordHash) {
        updateQuery += `password_hash = ?, `;
        params.push(passwordHash);
    }

    updateQuery = updateQuery.slice(0, -2); // Remove trailing comma
    updateQuery += ` WHERE id = ?`;
    params.push(clientId);

    await pool.query(updateQuery, params);
};

export { getClientProjects, commentOnProject, reviewCompletedProject, updateClientDetails };
