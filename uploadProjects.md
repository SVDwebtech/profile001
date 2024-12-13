# **Portfolio Workflow & Automation System**

## Project Description
An innovative system streamlining project workflows and automating portfolio updates. This platform enables real-time progress tracking, client interaction, and feedback integration. Features include a dynamic project portfolio with category sorting, like counts, and case study downloads. Clients can securely log in to view ongoing projects, leave comments, and submit reviews. Upon project completion, the system seamlessly publishes finalized projects to a public portfolio section, ensuring a professional showcase of work while enhancing client engagement and portfolio management efficiency.

## Current Workflow Overview
* I design and develop websites locally on my laptop.
* I use Git for version control and push updates to a GitHub repository.
* When a project is finalized, I manually publish it on my website's Portfolio section. This involves adding a card with: project name, a short description, two links: a **Live View Button** and a **Learn More Button**.

## Current Challenges
  * **Dynamic Websites**: GitHub Pages does not support dynamic websites, which limits how I can host and showcase certain projects.
  * **Manual Updates**: Adding projects to the portfolio section is a manual and time-consuming process.


## Proposed Workflow and Features
1. **Automated Portfolio Updates**  
    * Develop a system where new projects are automatically added to the Portfolio section upon creation or completion.
    * Cards in the Portfolio section should include a project name, short description, a **Live View Button**, and optionally, a **Learn More Button** leading to a detailed project page hosted on my website.
    * Projects can initially appear as "In Progress," with restricted client-only access.
2. **Client Interaction for In-Progress Projects**
    * **Client Login System**:
      * Clients can log in to view project progress.
      * Each project should have a private dashboard with:
        * Status updates
        * Visual previews (screenshots or live staging links).
        * A comment section for clients to leave feedback or ask questions.
    * **Social Media Integration**:
      * Prompt clients to follow me on social media or like my business pages.
    * **Review System**:
      * Clients should be able to provide reviews during the project or upon completion.
      * Reviews could be showcased on the Portfolio card or a testimonials section on my website.  

3. **Finalization and Publishing**
    * Upon project completion:
      * The project should transition from "In Progress" to "Published" in the Portfolio section.
      * The project becomes publicly viewable to all visitors.
    * Visitors can interact with portfolio cards:
      * Sort by category.
      * Like individual projects (like count should display on the card).
      * Optional: Add a “View All Projects” filter button to show all categories.  

4. **Portfolio Organization**
    * Add categories based on the services I offer. Example categories:
      * **Logos and Branding**: Logo designs, brand identity kits.
      * **Website Elements**: UI/UX components, landing pages.
      * **Websites**: Subcategories such as:
        * **Retail**
        * **Professional Services**
        * **E-commerce**
        * **Entertainment**
        * **Portfolios**
      * **Marketing**: Case studies, analytics reports, and campaigns.
    * Allow visitors to sort and filter projects by category.  

5. **Enhanced Visitor Experience**
    * Include search functionality to quickly locate specific projects.
    * Provide an option to share projects on social media platforms.
    * Consider a “Contact Me” button on each project card for visitors interested in similar projects.  

6. **Like System**
    * Implement a like button on each Portfolio card.
    * Show the total number of likes per project to showcase popularity.  

7. **Optional Enhancements**
    * Add analytics to track project views and interactions.
    * Include a "Featured Projects" section on the Portfolio homepage.
    * Introduce a "Download Case Study" option for selected projects.


## Why These Changes Are Beneficial
  1. **Efficiency**: Automating portfolio updates saves time and reduces manual effort.
  2. **Dynamic Hosting**: Transitioning to hosting dynamic sites resolves the limitations of GitHub Pages.
  3. **Engagement**: Client dashboards and social media integration foster better client relationships.
  4. **Showcasing Versatility**: Categories and filters allow potential clients to see the breadth of services offered.
  5. **Attracting Leads**: Features like likes, reviews, and contact buttons can drive more inquiries.  
---   

## **Plan to Build the Portfolio Workflow & Automation System**
1. **Define the Requirements**   
    * Core Features:    
      * Real-time project progress tracking for clients.
      * Client login and interaction (comments, reviews, and feedback).
      * Automated publishing of projects to a portfolio section upon completion.
      * Portfolio filtering and categorization.
      * Like counts and case study downloads for public visitors.
    * Additional Features:  
      * Admin dashboard for project management and updates.
      * Analytics tracking (views, likes, and downloads).
      * Responsive design for mobile and desktop.
2. **Design the Database**   
    * Create tables for **Projects**, **Project Details**, **Clients**, **Categories**, **Comments**, **Reviews**, **Likes**, and **Analytics** (as outlined in the database structure above).
    * Establish relationships between tables:  
      * Clients ↔ Projects (one-to-many).  
      * Projects ↔ Categories (many-to-one).  
      * Projects ↔ Comments, Reviews, and Likes (one-to-many).  
3. **Build the Backend**  
    * **Framework**:  
        Use a robust backend framework like Node.js with Express.js or Django for handling APIs and server-side logic.
    * **Authentication**:  
        Implement a secure client authentication system with hashed passwords and session management (e.g., JWT).
    * **Project Management**:  
        Develop APIs for creating, updating, and deleting projects. Build functionality to update project status ("In Progress," "Published").
    * **Client Interaction**:  
        APIs for comments, feedback, and reviews tied to specific projects.
    * **Analytics**:  
        APIs to increment views, likes, and download counts.

4. **Develop the Frontend**   
    * **Framework**:  
      Use React.js or Vue.js for a dynamic and responsive user interface.
    * **Client Dashboard**:  
      Display project details, updates, and feedback forms.Include social media follow prompts.
    * **Portfolio Section**:
      Showcase projects with filters for categories and sorting by popularity.
      Include live view, case study download links, and like buttons.
    * **Admin Dashboard**:
      Allow easy management of projects, categories, and client interactions.

5. **Integrate Real-Time Functionality**  
    Use WebSockets or a library like Socket.IO for live updates:  Notify clients of progress changes and comments in real-time.  

6. **Implement File Management**  
    Store project assets, screenshots, and downloadable case studies:  Use a cloud service like AWS S3 or Google Cloud Storage for scalable and secure storage.

7. **Add Analytics and Reporting**  
    Track views, likes, and case study downloads in the database.  Display analytics in both the admin dashboard and portfolio cards (e.g., "Downloaded 20 times").
8. **Test and Debug**  
    Conduct unit tests for APIs, UI components, and database queries.
    Perform integration tests to ensure seamless interaction between the frontend, backend, and database.
    Test for responsiveness across devices and browsers.

9. **Deploy the System**  
    **Backend**: Host the server using Heroku, AWS, or DigitalOcean.  
    **Frontend**: Deploy the client application using Netlify or Vercel.  
    **Database**: Use a cloud database service like AWS RDS or MongoDB Atlas.

10. **Continuous Improvement**  
    Collect client and visitor feedback to refine features. Monitor system performance and scale as needed. This plan provides a structured roadmap to build the system effectively while ensuring scalability and user satisfaction.

## **Dependencies**
Here’s a breakdown of all the dependencies (both normal and dev-dependencies) and their uses in your project:

### **Normal Dependencies**  

* express  
  * **Purpose**: A web framework for Node.js to handle server-side routing and middleware.  
  * **Usage**: Build and manage the backend API, handle requests to serve static files, and create routes for the portfolio and other functionalities.  

* mysql2
  * **Purpose**: A MySQL database connector for Node.js.
  * **Usage**: Connect to the MySQL database, run queries to store and retrieve data for the portfolio automation (e.g., project information, client details, and stats).  

* axios
  * **Purpose**: A promise-based HTTP client for making API requests.
  * **Usage**: Fetch data from the backend (such as project information) on the frontend or send requests to external APIs if needed.  

* dotenv
  * **Purpose**: Manage environment variables.
  * **Usage**: Store sensitive data such as database credentials, API keys, and server ports securely in a .env file.

* bcryptjs
  * **Purpose**: Hash passwords securely.
  * **Usage**: Encrypt client passwords during registration and verify them during login.

* jsonwebtoken (JWT)
  * **Purpose**: Create and verify JSON Web Tokens for authentication.
  * **Usage**: Securely handle user authentication, ensuring only logged-in users can access restricted features (e.g., private portfolio items).  

* cors
  * **Purpose**: Enable cross-origin resource sharing.  
  * **Usage**: Allow the frontend (e.g., running on localhost:3000) to make API requests to the backend (e.g., running on localhost:5000).

* body-parser
  * **Purpose**: Parse incoming request bodies.
  * **Usage**: Extract data (e.g., JSON or URL-encoded forms) sent from the frontend to the backend in requests.  

* ejs
  * **Purpose**: A templating engine for creating HTML views.
  * **Usage**: Render dynamic HTML pages for the portfolio (if you’re using server-side rendering instead of a fully client-side app).  

### **Dev Dependencies**  

* sass
  * **Purpose**: A CSS preprocessor for writing cleaner, modular, and reusable styles.
  * **Usage**: Compile .scss files into CSS for the project.

* autoprefixer
  * **Purpose**: Automatically add vendor prefixes to CSS rules for better browser compatibility.
  * **Usage**: Process compiled CSS files to ensure compatibility across various browsers.
  
* postcss-cli
  * **Purpose**: A CLI tool for running PostCSS
  plugins (e.g., autoprefixer).
  * **Usage**: Automate tasks like adding prefixes and optimizing CSS.

* npm-run-all
  * **Purpose**: A tool to run multiple npm scripts in sequence or parallel.
  * **Usage**: Simplify workflows like combining sass compilation, CSS prefixing, and compression into a single build:css command.

* concat
  * **Purpose**: A utility for concatenating multiple files.
  * **Usage**: Combine multiple CSS or JS files into a single file to reduce HTTP requests and improve performance.

### **How These Will Be Used**

#### **Frontend**:
* Use sass, autoprefixer, and postcss-cli to create optimized, production-ready styles.
* Use axios to fetch and display portfolio data dynamically.
* If EJS is used, templates will provide server-side rendered views.

#### **Backend**:
* Use express to set up routes (e.g., /api/projects or /portfolio).
* Use mysql2 to interact with a MySQL database for CRUD operations on projects and client data.
* Use bcryptjs and jsonwebtoken to manage authentication for secure client or admin logins.
* Use dotenv for environment variables like database credentials or JWT secrets.
* Use cors to handle cross-origin requests.

#### **Development Workflow**:
* Use npm-run-all to combine build tasks.
* Use sass to compile modular SCSS into CSS.
* Use autoprefixer and postcss-cli to ensure browser compatibility.
---
## **Database Connection**
In database applications, the choice between using createConnection and createPool depends on how you want to handle database connections and the specific needs of your application. 

### **createPool Connection** 
createPool creates a pool of connections that can be reused across multiple requests. This is the preferred method for production applications where the database needs to handle high traffic and concurrent requests. Connection pooling helps in optimizing resource usage and improving performance by reusing database connections instead of creating a new one for each request.

* **Use case**: Applications with high traffic or multiple concurrent users.
* **Behavior**: A pool of connections is created, and each request gets a connection from the pool. Once the request is complete, the connection is returned to the pool for reuse.
* **Advantages**: 
  * **Improved performance**: Connections are reused, so no time is spent repeatedly creating and destroying connections.
  * **Concurrency**: Multiple requests can be handled concurrently without waiting for a connection to be available.
  * **Better resource management**: You can configure the pool to limit the number of concurrent connections, avoiding overloading the database server.
```js
// Create a pool of connections
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,  // Wait for a connection if none are available
  connectionLimit: 10,       // Max 10 connections at once
  queueLimit: 0              // Unlimited queue size for waiting requests
});

// Using the pool to query the database
pool.query('SELECT * FROM projects', (err, results) => {
  if (err) {
    console.error('Error executing query:', err.stack);
  } else {
    console.log(results);
  }
});
```
### **choice between config/db.js and src/models/db.js**
It depends on your project structure and how you conceptualize the role of the database connection:

* Use **config/db.js** if you want a centralized configuration utility accessible anywhere in the app.
* Use **src/models/db.js** if the connection logic is tightly coupled to the models and is unlikely to be used elsewhere.
Either approach is valid, as long as the module remains clean, reusable, and aligned with your app's architecture.   

The connection logic **will be placed in config/db.js to centralize configuration**, making it accessible across the entire application while keeping the code modular and organized. This approach aligns with best practices for maintainability and reusability in larger projects.

## **Complete SQL schema for all the database tables**
```sql 
-- 1. Clients Table
CREATE TABLE Clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Categories Table
CREATE TABLE Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT
);

-- 3. Projects Table (With Case Study Flag)
CREATE TABLE Projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('In Progress', 'Under Review', 'Published') DEFAULT 'In Progress',
    client_id INT,
    category_id INT,
    is_case_study BOOLEAN DEFAULT FALSE,  -- Mark this project as a case study (true/false)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES Clients(id),
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);

-- 4. Project Details Table
CREATE TABLE Project_Details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    timeline TEXT,
    technologies TEXT,
    case_study_url VARCHAR(255),
    FOREIGN KEY (project_id) REFERENCES Projects(id)
);

-- 5. Comments Table
CREATE TABLE Comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    client_id INT,  -- If the comment is by a client, otherwise NULL for public comments
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id),
    FOREIGN KEY (client_id) REFERENCES Clients(id)
);

-- 6. Reviews Table
CREATE TABLE Reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    client_id INT,  -- Assuming reviews are only for clients
    rating INT CHECK (rating BETWEEN 1 AND 5),
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id),
    FOREIGN KEY (client_id) REFERENCES Clients(id)
);

-- 7. Likes Table
CREATE TABLE Likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    ip_address VARCHAR(255) NOT NULL,  -- To avoid multiple likes from the same user
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id)
);

-- 8. Analytics Table
CREATE TABLE Analytics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    views INT DEFAULT 0,
    downloads INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id)
);

```
### **Explanation of the Structure**:   

* **Admins Table**: This table is for storing information about administrators who have the highest level of access in the system. Admins can create, update, delete, and fetch projects. They oversee the entire workflow, including assigning projects to clients and ensuring the accuracy of project data. This separation ensures only authorized personnel can manage critical project data and maintain system integrity.

* **Clients Table**: The clients table is for storing information about clients who have access to their specific projects. This table allows each client to log in securely and view or comment on their in-progress projects. By associating clients with projects, it enables a streamlined communication process and ensures data privacy by restricting clients’ access to only their projects.

* **Categories Table**: This table organizes projects into categories for better filtering and navigation. Categories help group similar projects based on industry, technology, or purpose (e.g., education, technology, or healthcare), enabling admins and users to sort and filter projects easily. This is especially useful for website visitors exploring published projects by specific fields of interest."

* **Projects Table**: This is the core table that stores all project data, including title, description, status, and relationships to clients and categories. It also indicates whether a project is in progress, under review, or published. By linking projects to clients, this table ensures each project is associated with its owner, while admins manage the lifecycle. The published projects are visible to all website visitors, with functionality for likes and filtering.

* **Project Details Table**: tores additional details about a project that are not part of its main attributes, such as the timeline, technologies used, and an optional case study URL. This table ensures that these extended details are stored in a structured manner, making it easier to retrieve and present this data on project pages.

* **Comments Table**: This table manages all comments made on projects, focusing primarily on client feedback during the in-progress or under-review phases of the project lifecycle. By linking comments to projects and clients, it facilitates streamlined communication between clients and admins, enhancing collaboration and project refinement. Visitors cannot comment, ensuring comment sections are relevant and secure.

* **Reviews Table**: This table enables clients to leave reviews for completed projects. Reviews are an essential feature for gathering client feedback and building trust with future clients. Each review includes a numeric rating (1-5) and optional text for detailed opinions, helping admins understand client satisfaction and areas for improvement.

* **Likes Table**: Tracks the number of likes for each published project. Both logged-in clients and public visitors can like projects. The table uses the ip_address field to prevent duplicate likes from the same user or visitor, ensuring accurate analytics.

* **Analytics Table**: Tracks performance metrics for each project, including views, downloads, and total likes. This table provides valuable insights into how well projects resonate with the audience. Admins can use this data to identify popular projects or areas requiring attention.

## **Set Up Middleware for Authentication (middleware/auth.js)**
### **JWT**:
We will use JWT to authenticate users. Here's the middleware to verify tokens:
```js
// Import required libraries
import jwt from 'jsonwebtoken'; // Used to generate and verify JSON Web Tokens (JWT)
import dotenv from 'dotenv'; // Loads environment variables from a .env file

dotenv.config(); // Initialize environment variables

/**
 * Middleware to authenticate and authorize users
 * @param {string|string[]} roles - Role(s) allowed to access the route (e.g., 'admin', ['admin', 'client'])
 * @returns {Function} Middleware function
 */
const authenticate = (roles = []) => {
    // If roles is a single string, convert it to an array for consistency
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return (req, res, next) => {
        try {
            // Extract the token from the Authorization header
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Access token missing or invalid' });
            }

            // Verify the token using the secret key
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Check if the user's role matches one of the allowed roles
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Access forbidden: insufficient privileges' });
            }

            // Attach user data to the request object for further use
            req.user = decoded;

            // Proceed to the next middleware or route handler
            next();
        } catch (error) {
            // Handle invalid or expired tokens
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
    };
};

// Export the middleware function as a named export
export { authenticate };
```
### **Explanation of the Code**:
#### **Imports**:  
```js 
import jwt from 'jsonwebtoken';
```
  * Imports the jsonwebtoken library to work with JWTs.   

```js
import dotenv from 'dotenv';
```
* Imports the dotenv library to manage environment variables.

```js
dotenv.config();
```
* Initializes the .env file, making environment variables (like JWT_SECRET) available via process.env.

#### **Middleware Function**:

```js
const authenticate = (roles = []) => { ... }
```
* Defines the authenticate middleware function.
* Accepts roles as a parameter to specify which user roles are allowed to access a route.

```js
if (typeof roles === 'string') { roles = [roles]; }
```
* Ensures that if a single role is provided as a string, it is converted into an array for consistent processing.

```js
return (req, res, next) => { ... }
```
* Returns a middleware function to handle the request and enforce authentication/authorization.

#### **Token Handling**:

```js
const token = req.headers.authorization?.split(' ')[1];
```
* Extracts the JWT from the Authorization header (e.g., Bearer <token>).
* Uses optional chaining (?.) to avoid errors if the header is missing.

```js
if (!token) { return res.status(401).json({ message: 'Access token missing or invalid' }); }
```
* Responds with a 401 Unauthorized status if no token is found.

#### **Token Verification**:

```js
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```
* Verifies the token using the secret key stored in process.env.JWT_SECRET.
* If the token is invalid or expired, an error is thrown.

```js
if (roles.length && !roles.includes(decoded.role)) { ... }
```
* Checks whether the user’s role (from the decoded token) matches any of the allowed roles. If not, responds with a 403 Forbidden status.

#### **Attaching User Data**:

```js
req.user = decoded;
```
* Attaches the decoded token payload (e.g., user ID, email, role) to the req object for further use.

#### **Error Handling**:

```js
catch (error) { return res.status(401).json({ message: 'Invalid or expired token' }); }
```
* Catches token verification errors and sends a 401 Unauthorized response.

#### **Exporting the Middleware**:

```js
export { authenticate };
```
* Exports the authenticate middleware function as a named export for use in other modules.

## **User Authentication Logic (controllers/authController.js)**
Next, we'll handle user registration and login. We'll hash passwords using bcryptjs and issue JWT tokens upon successful login.

```js
import bcrypt from 'bcryptjs'; // For hashing and verifying passwords
import jwt from 'jsonwebtoken'; // For creating and verifying JWT tokens
import dotenv from 'dotenv'; // Load environment variables from .env file
import pool from '../config/database.js'; // Database connection

// Load environment variables
dotenv.config();

// Retrieve JWT secret and expiration from environment variables
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h'; // Default to '1h' if not set in the environment variables

/**
 * Controller to handle user login (for both admins and clients)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Query the database for a user with the given email
        const [userResults] = await pool.query(
            `SELECT id, email, password_hash, role FROM users WHERE email = ?`,
            [email]
        );

        // Check if a user was found
        if (userResults.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = userResults[0]; // Retrieve the user object

        // Verify the provided password matches the stored hash
        const isPasswordCorrect = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Create a JWT token with the user details and expiration time
        const token = jwt.sign(
            { id: user.id, role: user.role },
            JWT_SECRET, // The secret key for signing the token
            { expiresIn: JWT_EXPIRES_IN } // Set the expiration time for the token
        );

        // Send a successful response with the token and user details
        return res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Controller to handle user registration (for clients only)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const registerClient = async (req, res) => {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    try {
        // Hash the password using bcrypt to ensure secure storage
        const salt = await bcrypt.genSalt(10); // Generate salt for password hashing
        const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

        // Insert the new client into the database
        const [result] = await pool.query(
            `INSERT INTO clients (name, email, password_hash) VALUES (?, ?, ?)`,
            [name, email, hashedPassword]
        );

        // Respond with the newly created client ID
        return res.status(201).json({
            message: 'Client registered successfully',
            clientId: result.insertId
        });
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

```

### **Explanation of Each Line**:

#### **Import Statements**:

```js
import bcrypt from 'bcryptjs'; // For hashing and verifying passwords
import jwt from 'jsonwebtoken'; // For creating and verifying JWT tokens
import dotenv from 'dotenv'; // Load environment variables from .env file
import pool from '../config/database.js'; // Database connection
```
* bcryptjs is used for securely hashing and comparing passwords.
* jsonwebtoken is used for generating and verifying JWT tokens.
* dotenv loads environment variables, ensuring sensitive data like JWT secrets and expiration times are not hardcoded.
* pool is the database connection to interact with the SQL database.

#### **Load Environment Variables**:

```js
dotenv.config();
```
* Loads the environment variables from a .env file into process.env.

#### **Environment Variables**:

```js
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';
```
* Retrieves JWT_SECRET and JWT_EXPIRES_IN from the .env file, ensuring secure handling of secrets and token expiration settings. 
* The default fallback for expiration is 1h.

#### **User Login Logic (loginUser)**:

##### **Input Validation**:

```js
if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
}
```
* Checks if the required fields (email, password) are present in the request body.

##### **Database Query**:

```js
const [userResults] = await pool.query(
    `SELECT id, email, password_hash, role FROM users WHERE email = ?`,
    [email]
);
```
* Queries the database for a user matching the provided email.

##### **Password Comparison**:

```js
const isPasswordCorrect = await bcrypt.compare(password, user.password_hash);
```
* Compares the provided password with the stored hashed password using bcrypt.

##### **JWT Token Generation**:

```js
const token = jwt.sign(
    { id: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
);
```
* Creates a JWT token containing the user's id and role, signed with JWT_SECRET and with an expiration time (JWT_EXPIRES_IN).

##### **Response**:

```js
return res.status(200).json({
    message: 'Login successful',
    token,
    user: {
        id: user.id,
        email: user.email,
        role: user.role
    }
});
```
* Responds with a success message, the generated token, and the user's basic details.

#### **User Registration Logic (registerClient)**:

##### **Input Validation**:

```js
if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email, and password are required' });
}
```
* Ensures all required fields (name, email, password) are present.

##### **Password Hashing**:

```js
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);
```
* Generates a salt and hashes the password to store it securely in the database.

##### **Database Insertion**:

```js
const [result] = await pool.query(
    `INSERT INTO clients (name, email, password_hash) VALUES (?, ?, ?)`,
    [name, email, hashedPassword]
);
```
* Inserts the new client data (name, email, hashed password) into the clients table in the database.

##### **Response**:

```js
return res.status(201).json({
    message: 'Client registered successfully',
    clientId: result.insertId
});
```
* Responds with a success message and the ID of the newly registered client.
 
### **Summary**
This implementation provides a secure, well-structured approach to both user login and client registration while following best practices for password security and JWT-based authentication.


## **Project Management API Routes (routes/projectRoutes.js)**
Now let's create the routes to handle project management (creating, updating, fetching, and deleting projects) with roles in mind.

### **Routes with Roles in Mind**

```js
import express from 'express'; // Express framework for routing
import { authenticateUser, authorizeRole } from '../middleware/auth.js'; // Authentication and authorization middleware
import * as projectController from '../controllers/projectController.js'; // Project controller containing the logic
import { checkProjectData } from '../middleware/validate.js'; // Middleware to validate project data

const router = express.Router();

/**
 * Admin Routes
 */

// Create a new project (Admin only)
router.post(
    '/',
    authenticateUser,
    authorizeRole('admin'),
    checkProjectData,
    projectController.createProject
);

// Update an existing project (Admin only)
router.put(
    '/:projectId',
    authenticateUser,
    authorizeRole('admin'),
    checkProjectData,
    projectController.updateProject
);

// Delete a project (Admin only)
router.delete(
    '/:projectId',
    authenticateUser,
    authorizeRole('admin'),
    projectController.deleteProject
);

// Fetch all projects (Admin can see all, including unpublished)
router.get(
    '/admin',
    authenticateUser,
    authorizeRole('admin'),
    projectController.getAllProjects
);

/**
 * Client Routes
 */

// View client's own projects (if they are in progress)
router.get(
    '/client',
    authenticateUser,
    authorizeRole('client'),
    projectController.getClientProjects
);

// Comment on a client's own project (while in progress)
router.post(
    '/:projectId/comments',
    authenticateUser,
    authorizeRole('client'),
    projectController.commentOnProject
);

// Review a completed project (client's own projects only)
router.post(
    '/:projectId/reviews',
    authenticateUser,
    authorizeRole('client'),
    projectController.reviewProject
);

/**
 * Public Routes
 */

// Fetch all published projects (Public access)
router.get('/', projectController.getPublishedProjects);

// Like a project (Public users and authenticated users can like)
router.post('/:projectId/likes', authenticateUser, projectController.likeProject);

// Filter published projects by category (Public access)
router.get('/categories/:categoryId', projectController.filterProjectsByCategory);

export default router;
```

### **Step-by-Step Explanation of the Routes**

#### **Admin Routes**
1. ##### **Create Project (POST /projects)**

    * **Middleware**: authenticateUser ensures the user is logged in. authorizeRole('admin') ensures only admins can create projects.
    * **Validation**: checkProjectData ensures the incoming request contains valid project data.
    * **Controller**: projectController.createProject handles creating the project.

2. ##### **Update Project (PUT /projects/:projectId)**

    * Similar to the create route but modifies an existing project based on the provided projectId.

3. ##### **Delete Project (DELETE /projects/:projectId)**
    
    * Deletes a project using the projectId.

4. ##### **Fetch All Projects (GET /projects/admin)**

    * Admins can view all projects, including unpublished ones.

#### **Client Routes**

1. **View Own Projects (GET /projects/client)**
    * Allows clients to view their own projects if they are in progress.
    * **Controller**: projectController.getClientProjects fetches only the projects associated with the logged-in client's user ID.

2. **Comment on Own Project (POST /projects/:projectId/comments)**
    * Clients can leave comments on their projects while they are still in progress.
    * **Controller**: projectController.commentOnProject adds the comment to the project.

3. **Review Completed Project (POST /projects/:projectId/reviews)**
    * Clients can review their projects after completion.
    * **Controller**: projectController.reviewProject handles review submission.

#### **Public Routes**

1. **View Published Projects (GET /projects)**
    * Anyone (authenticated or not) can view all published projects.
    * **Controller**: projectController.getPublishedProjects fetches projects marked as "published."

2. **Like a Project (POST /projects/:projectId/likes)**
    * Authenticated users (clients or public users) can like any project.
    * **Controller**: projectController.likeProject records the like in the database.

3. **Filter by Category (GET /projects/categories/:categoryId)**
    * Public users can filter published projects by categories.
    * **Controller**: projectController.filterProjectsByCategory returns filtered results.

### **Middleware in Play**
* #### **authenticateUser**:
  * Validates the user’s JWT token and attaches their user information (req.user) to the request object.
  * Ensures only authenticated users access protected routes.

* #### **authorizeRole**:

  * Checks the user’s role to enforce admin- or client-specific permissions.

* #### **checkProjectData**:

  * Validates project details like name, description, and category in POST and PUT requests.


## **Project Controller (controllers/projectController.js)**
Here we'll define the logic for creating, updating, deleting, and fetching projects.

```js
import pool from '../config/database.js'; // Database connection pool
import { validationResult } from 'express-validator'; // For input validation

/**
 * Create a new project (Admin only)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const createProject = async (req, res) => {
    const { title, description, category_id, client_id, status } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Insert project into the database
        const [result] = await pool.query(
            `INSERT INTO projects (title, description, category_id, client_id, status) 
            VALUES (?, ?, ?, ?, ?)`,
            [title, description, category_id, client_id, status]
        );

        res.status(201).json({
            message: 'Project created successfully',
            projectId: result.insertId,
        });
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Update an existing project (Admin only)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const updateProject = async (req, res) => {
    const { projectId } = req.params;
    const { title, description, category_id, status } = req.body;

    try {
        // Update project in the database
        const [result] = await pool.query(
            `UPDATE projects 
            SET title = ?, description = ?, category_id = ?, status = ? 
            WHERE id = ?`,
            [title, description, category_id, status, projectId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ message: 'Project updated successfully' });
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Delete a project (Admin only)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const deleteProject = async (req, res) => {
    const { projectId } = req.params;

    try {
        const [result] = await pool.query(`DELETE FROM projects WHERE id = ?`, [projectId]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Fetch all projects (Admin view - includes unpublished projects)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getAllProjects = async (req, res) => {
    try {
        const [projects] = await pool.query(`SELECT * FROM projects`);
        res.status(200).json({ projects });
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Fetch a client's projects (In-progress projects only)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getClientProjects = async (req, res) => {
    const clientId = req.user.id;

    try {
        const [projects] = await pool.query(
            `SELECT * FROM projects WHERE client_id = ? AND status = 'in-progress'`,
            [clientId]
        );

        res.status(200).json({ projects });
    } catch (error) {
        console.error('Error fetching client projects:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Fetch all published projects (Public view)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getPublishedProjects = async (req, res) => {
    try {
        const [projects] = await pool.query(`SELECT * FROM projects WHERE status = 'published'`);
        res.status(200).json({ projects });
    } catch (error) {
        console.error('Error fetching published projects:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Add a comment to a project
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const commentOnProject = async (req, res) => {
    const { projectId } = req.params;
    const { comment } = req.body;
    const clientId = req.user.id;

    try {
        const [result] = await pool.query(
            `INSERT INTO comments (project_id, client_id, comment) VALUES (?, ?, ?)`,
            [projectId, clientId, comment]
        );

        res.status(201).json({
            message: 'Comment added successfully',
            commentId: result.insertId,
        });
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Review a completed project
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const reviewProject = async (req, res) => {
    const { projectId } = req.params;
    const { rating, review_text } = req.body;
    const clientId = req.user.id;

    try {
        const [result] = await pool.query(
            `INSERT INTO reviews (project_id, client_id, rating, review_text) VALUES (?, ?, ?, ?)`,
            [projectId, clientId, rating, review_text]
        );

        res.status(201).json({
            message: 'Review submitted successfully',
            reviewId: result.insertId,
        });
    } catch (error) {
        console.error('Error submitting review:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Like a project
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const likeProject = async (req, res) => {
    const { projectId } = req.params;
    const ipAddress = req.ip;

    try {
        // Prevent duplicate likes from the same IP
        const [existingLike] = await pool.query(
            `SELECT id FROM likes WHERE project_id = ? AND ip_address = ?`,
            [projectId, ipAddress]
        );

        if (existingLike.length > 0) {
            return res.status(400).json({ message: 'You have already liked this project' });
        }

        // Add like to the database
        await pool.query(`INSERT INTO likes (project_id, ip_address) VALUES (?, ?)`, [
            projectId,
            ipAddress,
        ]);

        res.status(201).json({ message: 'Project liked successfully' });
    } catch (error) {
        console.error('Error liking project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Filter published projects by category
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const filterProjectsByCategory = async (req, res) => {
    const { categoryId } = req.params;

    try {
        const [projects] = await pool.query(
            `SELECT * FROM projects WHERE category_id = ? AND status = 'published'`,
            [categoryId]
        );

        res.status(200).json({ projects });
    } catch (error) {
        console.error('Error filtering projects:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

```
### **Explanation of each line of code**:
This controller handles all project-related operations, including creating, updating, deleting, viewing projects, and managing interactions like comments, reviews, likes, and filtering projects by category. It uses a MySQL database (accessed via pool) and assumes the use of middleware for role-based authorization.

#### **Imports**

```js
import pool from '../config/database.js'; // Database connection pool
```
* **Purpose**: Establishes a connection to the MySQL database using the pool object from the configuration file. This allows executing SQL queries.

```js
import { validationResult } from 'express-validator'; // For input validation
```
* **Purpose**: Used to validate incoming request data, ensuring that required fields are present and correctly formatted.

1. **Create a New Project**

```js
export const createProject = async (req, res) => {
```
* Defines an asynchronous function named createProject. 
* It handles creating a new project and is called when an admin sends a request to the appropriate route.

```js
    const { title, description, category_id, client_id, status } = req.body;
```
* Extracts the project details (title, description, category_id, etc.) from the request body.

```js
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
```
* **Purpose**: Checks for validation errors set by middleware (like missing fields or invalid formats). 
* If any errors exist, a 400 Bad Request response is returned with a list of errors.

```js
    try {
        const [result] = await pool.query(
            `INSERT INTO projects (title, description, category_id, client_id, status) 
            VALUES (?, ?, ?, ?, ?)`,
            [title, description, category_id, client_id, status]
        );
```
* **SQL Query**: Inserts a new project record into the projects table with the provided data.
* **Parameterization**: Uses placeholders (?) to prevent SQL injection.
* The await keyword ensures the query completes before proceeding.

```js
        res.status(201).json({
            message: 'Project created successfully',
            projectId: result.insertId,
        });
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ message: 'Server error' });
    }
```
* **Success Response**: Returns a 201 Created status with a success message and the new project's ID.
* **Error Handling**: Logs the error and sends a 500 Internal Server Error if something goes wrong.

2. **Update an Existing Project**

```js
export const updateProject = async (req, res) => {
```
* Handles updating a project's details.

```js
    const { projectId } = req.params;
```
* Extracts the projectId from the route parameters (e.g., /projects/:projectId).

```js
    const { title, description, category_id, status } = req.body;
```
* Extracts fields to update from the request body.

```js
    const [result] = await pool.query(
        `UPDATE projects 
        SET title = ?, description = ?, category_id = ?, status = ? 
        WHERE id = ?`,
        [title, description, category_id, status, projectId]
    );
```
* **SQL Query**: Updates the projects table, setting the specified fields for the given project ID.

```js
    if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Project not found' });
    }
```
* **Check**: If no rows were affected, the project ID doesn’t exist, so it returns a 404 Not Found.

```js
    res.status(200).json({ message: 'Project updated successfully' });
```
* **Success**: Sends a 200 OK response with a success message.

3. **Delete a Project**

```js
export const deleteProject = async (req, res) => {
```
* Handles deletion of a project by its ID.

```js
    const { projectId } = req.params;
    const [result] = await pool.query(`DELETE FROM projects WHERE id = ?`, [projectId]);
```
* **SQL Query**: Deletes a project record by its ID.

```js
    if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Project not found' });
    }
```
* **Check**: Returns 404 Not Found if the project doesn't exist.

```js
    res.status(200).json({ message: 'Project deleted successfully' });
```
* **Success**: Sends a 200 OK status.

4. **Fetch All Projects**

```js
export const getAllProjects = async (req, res) => {
    const [projects] = await pool.query(`SELECT * FROM projects`);
    res.status(200).json({ projects });
};
```
* Fetches all projects, regardless of their status, and returns them in the response.

5. **Fetch Projects for a Client**

```js
export const getClientProjects = async (req, res) => {
    const clientId = req.user.id;
```
* Assumes req.user is populated via middleware (e.g., from a JWT).

```js
    const [projects] = await pool.query(
        `SELECT * FROM projects WHERE client_id = ? AND status = 'in-progress'`,
        [clientId]
    );
```
* **SQL Query**: Retrieves all "in-progress" projects for the authenticated client.

6. **Fetch Published Projects**

```js
export const getPublishedProjects = async (req, res) => {
    const [projects] = await pool.query(`SELECT * FROM projects WHERE status = 'published'`);
    res.status(200).json({ projects });
};
```
* Fetches and returns all projects marked as published.

7. **Comment on a Project**

```js
export const commentOnProject = async (req, res) => {
    const { projectId } = req.params;
    const { comment } = req.body;
    const clientId = req.user.id;
```
* Adds a comment to a project for the logged-in client.

```js
    const [result] = await pool.query(
        `INSERT INTO comments (project_id, client_id, comment) VALUES (?, ?, ?)`,
        [projectId, clientId, comment]
    );
```
* SQL Query: Inserts a new comment.

8. **Review a Project**

```js
export const reviewProject = async (req, res) => {
    const { projectId } = req.params;
    const { rating, review_text } = req.body;
    const clientId = req.user.id;
```
* Handles submitting reviews for completed projects.

```js
    const [result] = await pool.query(
        `INSERT INTO reviews (project_id, client_id, rating, review_text) VALUES (?, ?, ?, ?)`,
        [projectId, clientId, rating, review_text]
    );
```
* SQL Query: Adds a review record.

9. **Like a Project**

```js
export const likeProject = async (req, res) => {
    const { projectId } = req.params;
    const ipAddress = req.ip;
```
* Uses the user's IP to prevent duplicate likes.

```js
    const [existingLike] = await pool.query(
        `SELECT id FROM likes WHERE project_id = ? AND ip_address = ?`,
        [projectId, ipAddress]
    );
```
* **Check**: Prevents the same IP from liking a project multiple times.

10. **Filter Projects by Category**

```js
export const filterProjectsByCategory = async (req, res) => {
    const { categoryId } = req.params;
    const [projects] = await pool.query(
        `SELECT * FROM projects WHERE category_id = ? AND status = 'published'`,
        [categoryId]
    );
```
* Retrieves published projects that match the given category ID.

### **Summary**
This controller defines essential CRUD operations for projects and handles interactions like comments, reviews, and likes. It uses clear error handling, parameterized queries, and assumes middleware for validation and authorization. Let me know if you'd like more details on any part!

## **Client Controller (controllers/clientController.js)**
A clientController.js file is essential in your project as it will handle functionality specific to clients. Based on the roles and permissions outlined earlier, the clientController.js should include the following:

### **Functionalities for clientController.js**

* **Get Client's Projects**:
  * Allow clients to view their own projects, particularly when the projects are in progress.

* **Comment on Projects**:
  * Enable clients to add comments to their own projects while the projects are still in progress.

* **Review Completed Projects**:
  * Allow clients to review their own projects after they are completed.

* **Update Client Details**:
  * Allow clients to update their personal details such as name, email, or password.

```js
import pool from '../config/database.js'; // Database connection
import bcrypt from 'bcryptjs'; // For hashing passwords
import { validationResult } from 'express-validator'; // Input validation

/**
 * Fetch all projects belonging to the authenticated client
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getClientProjects = async (req, res) => {
    const clientId = req.user.id; // Retrieve client ID from the authenticated user

    try {
        // Query database for projects belonging to the client
        const [projects] = await pool.query(
            `SELECT * FROM projects WHERE client_id = ? AND status = 'in progress'`,
            [clientId]
        );

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
const commentOnProject = async (req, res) => {
    const clientId = req.user.id;
    const { projectId, comment } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check if the project belongs to the client and is in progress
        const [project] = await pool.query(
            `SELECT id FROM projects WHERE id = ? AND client_id = ? AND status = 'in progress'`,
            [projectId, clientId]
        );

        if (project.length === 0) {
            return res.status(403).json({ message: 'You can only comment on your own in-progress projects.' });
        }

        // Insert the comment into the database
        await pool.query(
            `INSERT INTO comments (project_id, client_id, comment) VALUES (?, ?, ?)`,
            [projectId, clientId, comment]
        );

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
const reviewCompletedProject = async (req, res) => {
    const clientId = req.user.id;
    const { projectId, rating, reviewText } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check if the project belongs to the client and is completed
        const [project] = await pool.query(
            `SELECT id FROM projects WHERE id = ? AND client_id = ? AND status = 'completed'`,
            [projectId, clientId]
        );

        if (project.length === 0) {
            return res.status(403).json({ message: 'You can only review your own completed projects.' });
        }

        // Insert the review into the database
        await pool.query(
            `INSERT INTO reviews (project_id, client_id, rating, review_text) VALUES (?, ?, ?, ?)`,
            [projectId, clientId, rating, reviewText]
        );

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
const updateClientDetails = async (req, res) => {
    const clientId = req.user.id;
    const { name, email, password } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
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

        if (password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            updateQuery += `password_hash = ?, `;
            params.push(hashedPassword);
        }

        updateQuery = updateQuery.slice(0, -2); // Remove trailing comma
        updateQuery += ` WHERE id = ?`;
        params.push(clientId);

        // Update the client's details
        await pool.query(updateQuery, params);

        return res.status(200).json({ message: 'Client details updated successfully' });
    } catch (error) {
        console.error('Error updating client details:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export { getClientProjects, commentOnProject, reviewCompletedProject, updateClientDetails };
```
### **Explanation of clientController.js code**

#### 1. **Imports**
* **pool**: This connects to your database. Think of it as a pipe through which your code talks to the database.

* **bcrypt**: This tool makes passwords secure by turning them into unreadable strings (hashing) that are hard to crack.

* **validationResult**: This checks if user input (like name, email, etc.) meets certain rules, ensuring the data is correct.

#### 2. **Get Client's Projects**

```js
export const getClientProjects = async (req, res) => {
    const clientId = req.user.id; // Retrieve client ID from the authenticated user

    try {
        const [projects] = await pool.query(
            `SELECT * FROM projects WHERE client_id = ? AND status = 'in progress'`,
            [clientId]
        );

        return res.status(200).json({ projects });
    } catch (error) {
        console.error('Error fetching client projects:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};
```
* **req.user.id**: This grabs the ID of the logged-in user, which is stored in req.user.

* **SQL Query**: The database is asked to find all projects where:
  * The client_id matches the logged-in user’s ID.
  * The status of the project is "in progress."

* **Response**:
  * If projects are found, they’re sent back to the user in a JSON format.
  * If something goes wrong, an error message is shown.

#### 2. **Add a Comment on a Project**

```js
export const commentOnProject = async (req, res) => {
    const clientId = req.user.id; // Get logged-in client's ID
    const { projectId, comment } = req.body; // Get project ID and comment text from the request

    const errors = validationResult(req); // Check if input is valid
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); // Return errors if input is invalid
    }

    try {
        const [project] = await pool.query(
            `SELECT id FROM projects WHERE id = ? AND client_id = ? AND status = 'in progress'`,
            [projectId, clientId]
        );

        if (project.length === 0) {
            return res.status(403).json({ message: 'You can only comment on your own in-progress projects.' });
        }

        await pool.query(
            `INSERT INTO comments (project_id, client_id, comment) VALUES (?, ?, ?)`,
            [projectId, clientId, comment]
        );

        return res.status(201).json({ message: 'Comment added successfully' });
    } catch (error) {
        console.error('Error adding comment:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};
```
* **Input Validation**:
  * It ensures projectId and comment are provided. If not, an error message is sent.
* **Check Project Ownership**:
  * The code ensures the project belongs to the logged-in client and is still "in progress."
  * If the project doesn’t belong to the client or is not in progress, the request is denied.
* **Add Comment**:
  * If everything checks out, the comment is added to the database.
* **Response**:
  * A success message is sent if the comment is added, or an error message if something fails.

#### 3. **Review a Completed Project**

```js
export const reviewCompletedProject = async (req, res) => {
    const clientId = req.user.id;
    const { projectId, rating, reviewText } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const [project] = await pool.query(
            `SELECT id FROM projects WHERE id = ? AND client_id = ? AND status = 'completed'`,
            [projectId, clientId]
        );

        if (project.length === 0) {
            return res.status(403).json({ message: 'You can only review your own completed projects.' });
        }

        await pool.query(
            `INSERT INTO reviews (project_id, client_id, rating, review_text) VALUES (?, ?, ?, ?)`,
            [projectId, clientId, rating, reviewText]
        );

        return res.status(201).json({ message: 'Review submitted successfully' });
    } catch (error) {
        console.error('Error submitting review:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};
```

* **Input Validation**:
  * Makes sure projectId, rating, and reviewText are provided.
* **Check Project Status**:
  * Ensures the project belongs to the logged-in client and is "completed."
  * If not, the request is rejected.
* **Add Review**:
  * If the project is completed and valid, the review is saved in the database.
* **Response**:
  * A success message is sent on successful review creation, or an error if something fails.

#### 4. **Update Client Details**

```js
export const updateClientDetails = async (req, res) => {
    const clientId = req.user.id;
    const { name, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
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

        if (password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            updateQuery += `password_hash = ?, `;
            params.push(hashedPassword);
        }

        updateQuery = updateQuery.slice(0, -2); // Remove trailing comma
        updateQuery += ` WHERE id = ?`;
        params.push(clientId);

        await pool.query(updateQuery, params);

        return res.status(200).json({ message: 'Client details updated successfully' });
    } catch (error) {
        console.error('Error updating client details:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};
```

* **Input Validation**:
  * Ensures the user provides at least one valid detail to update (name, email, or password).
* **Build Dynamic Query**:
  * Adds only the provided fields (e.g., name, email, or password) to the SQL query.
  * Hashes the password securely before saving it.
* **Update Database**:
  * The query updates the client's details in the database.
* **Response**:
  * A success message confirms the update, or an error message is sent if something fails.

### **Summary**

**Each function**:

* Checks that the client has permission to perform the action.
* Validates inputs.
* Interacts with the database securely.
* Sends a clear response based on the outcome.

## **Client Routes (routes/clientRoutes.js)**

* The corresponding routes for the client-related functionality in routes/clientRoutes.js is the next logical step. 
* These routes will define the endpoints and link them to the functions in clientController.js.

```js
import express from 'express';
import { 
    getClientProjects, 
    commentOnProject, 
    reviewCompletedProject, 
    updateClientDetails 
} from '../controllers/clientController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';
import { body } from 'express-validator';

const router = express.Router();

// Route to fetch client's in-progress projects
router.get('/projects', authenticateUser, getClientProjects);

// Route to add a comment to a project
router.post(
    '/projects/comment',
    authenticateUser,
    [
        body('projectId').notEmpty().withMessage('Project ID is required'),
        body('comment').notEmpty().withMessage('Comment text is required')
    ],
    commentOnProject
);

// Route to review a completed project
router.post(
    '/projects/review',
    authenticateUser,
    [
        body('projectId').notEmpty().withMessage('Project ID is required'),
        body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
        body('reviewText').notEmpty().withMessage('Review text is required')
    ],
    reviewCompletedProject
);

// Route to update client details
router.put(
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
    updateClientDetails
);

export default router;
```
### **Code Explanation**
* **import Statements**:
    * Brings in required modules like express for setting up routes.
    * Imports the client controller functions (getClientProjects, etc.).
    * Uses authenticateUser middleware to ensure only logged-in users can access these routes.
    * Uses express-validator's body method to validate input data.

* **router.get('/projects', ...)**:

    * **Endpoint**: /projects.
    * **Purpose**: Fetches the logged-in client's "in progress" projects.
    * **Middleware**: Uses authenticateUser to ensure only authenticated clients can access.

* **router.post('/projects/comment', ...)**:

    * **Endpoint**: /projects/comment.
    * **Purpose**: Allows a client to comment on their own in-progress projects.
    * **Middleware**: 
        * authenticateUser ensures the client is logged in.
        * body() validators ensure projectId and comment are provided and valid.

* **router.post('/projects/review', ...)**:

    * **Endpoint**: /projects/review.
    * **Purpose**: Enables a client to review their completed projects.
    * **Middleware**:
        * authenticateUser ensures only logged-in clients can review projects.
        * body() validators ensure:
                
            * projectId is provided.
            * rating is a number between 1 and 5.
            * reviewText is provided.

* **router.put('/profile', ...)**:

    * **Endpoint**: /profile.
    * **Purpose**: Allows a client to update their profile details.
    * **Middleware**:
        * authenticateUser ensures only logged-in clients can update their details.
        * body() validators ensure:
            * Optional fields (name, email, password) are valid.

* **export default router**:
    * Makes the router available for import in other files (e.g., your main app file).
