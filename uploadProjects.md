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
 
   












# **Upload Pojects:** Design & Development Notes

## Approach: Server-Side Solution (Using a CMS or Backend Framework)

### Overview: 
This method uses a Content Management System (CMS) like WordPress or a backend framework like Node.js with a database (e.g., MongoDB or MySQL). It offers flexibility, automation, and easier access control but requires backend hosting.

### Advantages:
* Fully automated and customizable.  
* Easier to implement secure login for client-only views.  
* Allows conditional access, automated updates, and categorization with database queries.  

### Step-by-Step Process: Overview

1. **Database Design:**  
Create a database table to store projects. Fields might include:  
* id: Project ID.  
* name: Project name.  
* description: Brief project description.  
* status: Tracks whether the project is in progress or completed.  
* live_url: URL of the live project (only shown when status is "completed").  
* github_url: Link to the README file.  
* client_login_required: Boolean to enable login for in-progress projects.  
* industry and technologies: Fields for categorization.  

2. **Backend Logic:**  
Develop backend routes to manage portfolio data. For instance:  
* GET /projects: Retrieves all projects.  
* POST /projects: Adds a new project.  
* PUT /projects/:id: Updates project details.  
      
  Implement logic to change a project’s visibility based on its status field.      


3. **Client-Only Access (if needed):**  
Use an authentication system (e.g., JWT-based login) to restrict access to the “View” button for in-progress projects.
Store client credentials for login access and protect live project URLs accordingly.

4. **Frontend Display:**  
Use JavaScript and AJAX to fetch and render project data dynamically.  Create cards for each project, displaying project status and controlling access based on client logins.
Add sorting and filtering options using JavaScript based on industry and technologies used.

5. **Automate Updates:**  
Use a CMS API or admin panel to update the portfolio when you push new projects to GitHub.
Set triggers (e.g., GitHub Webhooks) to update the database whenever a new project is added.

## Step 1:  Project Setup

1. **Initialize the Node.js Project:**

      Start by creating a new directory for the project and initializing Node.js:

```bash
mkdir portfolio-website
cd portfolio-website
npm init -y
```

2. **Install the necessary packages:**

```bash
npm install express mysql2 dotenv bcrypt jsonwebtoken body-parser cors
```

* express: For handling HTTP requests and setting up routes.  
* mysql2: For connecting to and interacting with the MySQL database.
* dotenv: To manage environment variables securely.
* bcrypt: For hashing passwords for client authentication.
* jsonwebtoken: For creating and verifying tokens for client login.
* body-parser: To parse incoming request bodies.
* cors: To handle cross-origin requests.

3. **Project Structure:**

      Set up the project structure for separation of concerns:
```bash
portfolio-website/
├── config/
│   └── db.js            # Database connection
├── controllers/
│   └── projectController.js
├── models/
│   └── Project.js       # Data model for projects
├── routes/
│   └── projectRoutes.js
├── auth/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── .env                  # Environment variables
├── server.js             # Entry point
└── README.md
```
4. **Configure Environment Variables:**

      Create a .env file to securely store database credentials and JWT secrets:
```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=portfolio
JWT_SECRET=your_jwt_secret
```

## Step 2: Set Up MySQL Database

1. **Create a Database and Table:**

      Start by creating a portfolio database and a projects table in MySQL to store project details:
```sql
CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  status ENUM('in-progress', 'completed') DEFAULT 'in-progress',
  live_url VARCHAR(255),
  github_url VARCHAR(255),
  client_login_required BOOLEAN DEFAULT TRUE,
  industry VARCHAR(100),
  technologies JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
* technologies: Stores an array of technologies in JSON format.
* status: Tracks the project’s progress.
* client_login_required: Restricts access to in-progress projects.

2. **Database Connection (config/db.js):**

      Create a connection file for the MySQL database:
```javascript
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

module.exports = db;
```

## Step 3: Build the Backend API with Authentication

1. **Project Model (models/Project.js):**

      Define methods for interacting with the projects table:
```javascript
const db = require('../config/db');

const Project = {
  getAll: (callback) => {
    db.query("SELECT * FROM projects", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM projects WHERE id = ?", [id], callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO projects SET ?", data, callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE projects SET ? WHERE id = ?", [data, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM projects WHERE id = ?", [id], callback);
  }
};

module.exports = Project;
```

2. **Project Controller (controllers/projectController.js):**

      Define controller functions for handling requests:

```javascript
const Project = require('../models/Project');

exports.getProjects = (req, res) => {
  Project.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.getProjectById = (req, res) => {
  const { id } = req.params;
  Project.getById(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
};

exports.createProject = (req, res) => {
  const newProject = req.body;
  Project.create(newProject, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ id: results.insertId, ...newProject });
  });
};

exports.updateProject = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  Project.update(id, updatedData, (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
};

exports.deleteProject = (req, res) => {
  const { id } = req.params;
  Project.delete(id, (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
};
```
3. **Authentication (auth/authController.js):**

      Add authentication for client-only view access:

```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.login = (req, res) => {
  const { username, password } = req.body;
  // Sample client verification logic here; replace with actual database check
  if (username === 'client' && bcrypt.compareSync(password, storedHash)) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send("Unauthorized");
  }
};
```

4. **Routes (routes/projectRoutes.js):**

      Define routes for the API:

```javascript
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authController = require('../auth/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/projects', projectController.getProjects);
router.get('/projects/:id', projectController.getProjectById);
router.post('/projects', authMiddleware, projectController.createProject);
router.put('/projects/:id', authMiddleware, projectController.updateProject);
router.delete('/projects/:id', authMiddleware, projectController.deleteProject);

router.post('/login', authController.login);

module.exports = router;
```

## Step 4: Client-Side Implementation
Use JavaScript on the frontend to fetch projects from the /projects endpoint, dynamically create cards, and apply sorting/filtering based on industry or technology.

## HTML & CSS for project  

Here's the HTML and CSS needed to create a basic portfolio section for your project cards. The HTML will dynamically display project information based on data received from the backend API. For this, JavaScript will fetch the project details and render them as cards.

### **HTML Structure**
Place this code in an HTML file, such as index.html. This HTML template uses placeholders for project data, which JavaScript will replace with actual project information from the API.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="portfolio-container">
        <h1>My Projects</h1>
        
        <!-- Filters and Sorting Options -->
        <div class="filter-container">
            <select id="industryFilter">
                <option value="">Filter by Industry</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <!-- Add other industries as needed -->
            </select>

            <select id="techFilter">
                <option value="">Filter by Technology</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
                <!-- Add other technologies as needed -->
            </select>
        </div>

        <!-- Project Cards Container -->
        <div id="projectCards" class="project-cards"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### **CSS Styling**
Place this code in a CSS file, such as styles.css, to style the portfolio section, project cards, and other elements.

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

body {
    background-color: #f5f5f5;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.portfolio-container {
    max-width: 1000px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.filter-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.project-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.project-card {
    background-color: #e8e8e8;
    width: 300px;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.project-card h3 {
    margin: 10px 0;
}

.project-card p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 15px;
}

.project-card .btn-group {
    display: flex;
    gap: 10px;
    margin-top: auto;
}

.project-card .btn-group a {
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.project-card .btn-group a:hover {
    background-color: #0056b3;
}

.project-card.in-progress {
    background-color: #ffefd5;
}

.project-card.completed {
    background-color: #d3ffd3;
}
```

### **JavaScript to Fetch and Display Projects**
Add this JavaScript in script.js to fetch project data from the backend and populate the cards dynamically.

```javascript
document.addEventListener("DOMContentLoaded", () => {
    const projectCardsContainer = document.getElementById("projectCards");
    const industryFilter = document.getElementById("industryFilter");
    const techFilter = document.getElementById("techFilter");

    // Fetch Projects and Render Cards
    async function fetchProjects() {
        try {
            const response = await fetch('http://localhost:3000/projects');  // Adjust URL as needed
            const projects = await response.json();
            renderProjectCards(projects);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    }

    function renderProjectCards(projects) {
        projectCardsContainer.innerHTML = ""; // Clear existing cards
        projects.forEach(project => {
            const card = document.createElement("div");
            card.classList.add("project-card");
            card.classList.add(project.status);  // Add class based on project status

            // Project content
            card.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="btn-group">
                    <a href="${project.live_url}" ${project.client_login_required && project.status === 'in-progress' ? 'onclick="alert(\'Client access only\'); return false;"' : ''}>View</a>
                    <a href="${project.github_url}">Info</a>
                </div>
            `;

            projectCardsContainer.appendChild(card);
        });
    }

    // Event Listeners for Filtering
    industryFilter.addEventListener("change", filterProjects);
    techFilter.addEventListener("change", filterProjects);

    function filterProjects() {
        const selectedIndustry = industryFilter.value;
        const selectedTech = techFilter.value;
        fetchProjects().then(() => {
            const filteredProjects = projects.filter(project =>
                (selectedIndustry ? project.industry === selectedIndustry : true) &&
                (selectedTech ? project.technologies.includes(selectedTech) : true)
            );
            renderProjectCards(filteredProjects);
        });
    }

    fetchProjects();  // Initial fetch and render
});
```

### **Explanation of Key Components**  

* **HTML Structure:** The container structure, filter dropdowns, and project card placeholder setup. The actual cards are populated dynamically using JavaScript.

* **CSS:** Styles the layout for a clean, professional look, with distinctive colors for in-progress and completed projects.

* **JavaScript:**

  * **fetchProjects:** Calls the API to retrieve all projects and renders them using renderProjectCards.
  * **renderProjectCards:** Dynamically creates project cards and adds them to the projectCardsContainer.
  * **Filtering:** Applies filters based on selected values in dropdowns for industry and technology.  
  
This setup provides a user-friendly, interactive portfolio section that meets your requirements. The fetchProjects function automatically updates the display, and the JavaScript includes basic client-side filtering for easy access. Adjust URLs and filter options as necessary to align with your database and API configuration.