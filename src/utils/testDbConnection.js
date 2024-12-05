import pool from '../../config/db.js'; // Import the database pool

const testDbConnection = async () => {
    try {
        // Attempt to get a connection from the pool
        const connection = await pool.getConnection();
        
        // Execute a simple query to test the connection
        const [rows] = await connection.query('SELECT 1 + 1 AS solution');

        // Log the result of the query
        console.log('Database connection successful. Test query result:', rows[0].solution);

        // Release the connection back to the pool
        connection.release();
    } catch (error) {
        // Log any errors that occur
        console.error('Error connecting to the database:', error.message);
    } finally {
        // Optional: Close the pool to end the test
        await pool.end();
    }
};

testDbConnection();