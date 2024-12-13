import pool from '../config/db.js'; // Import the database pool
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
import faker from 'faker'; // Import faker for generating random data

// Define the number of entries to seed
const NUM_ADMINS = 5;
const NUM_CLIENTS = 25;
const NUM_CATEGORIES = 10;
const NUM_PROJECTS = 50;
const NUM_COMMENTS = 100;
const NUM_REVIEWS = 50;
const NUM_LIKES = 150;
const NUM_ANALYTICS = 50;

// Hash password salt rounds
const saltRounds = 10;

// Generate a human-readable name
const generateHumanName = () => `${faker.name.firstName()} ${faker.name.lastName()}`;

// Generate a unique email based on the name
const generateEmail = (name) => `${name.toLowerCase().replace(' ', '.')}@example.com`;

// Seed function
const seedDatabase = async () => {
  try {
    // Seed Admins Table
    const admins = [];
    for (let i = 1; i <= NUM_ADMINS; i++) {
      const name = generateHumanName();
      const email = generateEmail(name);
      const hashedPassword = await bcrypt.hash(`password_${i}`, saltRounds);
      admins.push([name, email, hashedPassword]);
    }
    await pool.query(`INSERT INTO Admins (name, email, password_hash) VALUES ?`, [admins]);
    console.log('Admins seeded successfully!');

    // Seed Clients Table
    const clients = [];
    for (let i = 1; i <= NUM_CLIENTS; i++) {
      const name = generateHumanName();
      const email = generateEmail(name);
      const hashedPassword = await bcrypt.hash(`password_${i}`, saltRounds);
      clients.push([name, email, hashedPassword]);
    }
    await pool.query(`INSERT INTO Clients (name, email, password_hash) VALUES ?`, [clients]);
    console.log('Clients seeded successfully!');

    // Seed Categories Table
    const categories = [];
    for (let i = 1; i <= NUM_CATEGORIES; i++) {
      categories.push([`Category ${i}`, faker.lorem.sentence()]);
    }
    await pool.query(`INSERT INTO Categories (name, description) VALUES ?`, [categories]);
    console.log('Categories seeded successfully!');

    // Seed Projects Table
    const projects = [];
    for (let i = 1; i <= NUM_PROJECTS; i++) {
      const clientId = faker.datatype.number({ min: 1, max: NUM_CLIENTS });
      const categoryId = faker.datatype.number({ min: 1, max: NUM_CATEGORIES });
      projects.push([`Project ${i}`, faker.lorem.paragraph(), 'In Progress', clientId, categoryId, faker.datatype.boolean()]);
    }
    await pool.query(`INSERT INTO Projects (title, description, status, client_id, category_id, is_case_study) VALUES ?`, [projects]);
    console.log('Projects seeded successfully!');

    // Seed Project Details Table
    const projectDetails = [];
    for (let i = 1; i <= NUM_PROJECTS; i++) {
      const projectId = i;
      projectDetails.push([projectId, faker.lorem.paragraph(), faker.lorem.words(), faker.internet.url()]);
    }
    await pool.query(`INSERT INTO Project_Details (project_id, timeline, technologies, case_study_url) VALUES ?`, [projectDetails]);
    console.log('Project Details seeded successfully!');

    // Seed Comments Table
    const comments = [];
    for (let i = 1; i <= NUM_COMMENTS; i++) {
      const projectId = faker.datatype.number({ min: 1, max: NUM_PROJECTS });
      const clientId = faker.datatype.number({ min: 1, max: NUM_CLIENTS });
      comments.push([projectId, clientId, faker.lorem.sentence()]);
    }
    await pool.query(`INSERT INTO Comments (project_id, client_id, content) VALUES ?`, [comments]);
    console.log('Comments seeded successfully!');

    // Seed Reviews Table
    const reviews = [];
    for (let i = 1; i <= NUM_REVIEWS; i++) {
      const projectId = faker.datatype.number({ min: 1, max: NUM_PROJECTS });
      const clientId = faker.datatype.number({ min: 1, max: NUM_CLIENTS });
      const rating = faker.datatype.number({ min: 1, max: 5 });
      reviews.push([projectId, clientId, rating, faker.lorem.sentence()]);
    }
    await pool.query(`INSERT INTO Reviews (project_id, client_id, rating, review_text) VALUES ?`, [reviews]);
    console.log('Reviews seeded successfully!');

    // Seed Likes Table
    const likes = [];
    for (let i = 1; i <= NUM_LIKES; i++) {
      const projectId = faker.datatype.number({ min: 1, max: NUM_PROJECTS });
      const clientId = faker.datatype.number({ min: 1, max: NUM_CLIENTS });
      const ipAddress = faker.internet.ip();
      likes.push([projectId, clientId, ipAddress]);
    }
    await pool.query(`INSERT INTO Likes (project_id, client_id, ip_address) VALUES ?`, [likes]);
    console.log('Likes seeded successfully!');

    // Seed Analytics Table
    const analytics = [];
    for (let i = 1; i <= NUM_ANALYTICS; i++) {
      const projectId = faker.datatype.number({ min: 1, max: NUM_PROJECTS });
      analytics.push([projectId, faker.datatype.number({ min: 1, max: 1000 }), faker.datatype.number({ min: 1, max: 500 }), faker.datatype.number({ min: 1, max: 200 })]);
    }
    await pool.query(`INSERT INTO Analytics (project_id, views, downloads, likes) VALUES ?`, [analytics]);
    console.log('Analytics seeded successfully!');

  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    pool.end(); // Close the connection pool
  }
};

// Run the seed function
seedDatabase();
