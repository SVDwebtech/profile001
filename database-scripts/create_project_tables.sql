-- Create the Clients table to store client information
CREATE TABLE Clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the Projects table to store project information
CREATE TABLE Projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    short_description TEXT NOT NULL,
    status ENUM('In Progress', 'Published') DEFAULT 'In Progress',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create the Categories table to categorize projects
CREATE TABLE Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

-- Create a relation between Projects and Categories
CREATE TABLE ProjectCategories (
    project_id INT,
    category_id INT,
    PRIMARY KEY (project_id, category_id),
    FOREIGN KEY (project_id) REFERENCES Projects(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES Categories(id) ON DELETE CASCADE
);

-- Create the Comments table for client feedback and interaction
CREATE TABLE Comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    client_id INT,
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id) ON DELETE CASCADE,
    FOREIGN KEY (client_id) REFERENCES Clients(id) ON DELETE CASCADE
);

-- Create the Reviews table for client reviews
CREATE TABLE Reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    client_id INT,
    review TEXT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5), -- Rating from 1 to 5
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id) ON DELETE CASCADE,
    FOREIGN KEY (client_id) REFERENCES Clients(id) ON DELETE CASCADE
);

-- Create the Likes table to track likes on projects
CREATE TABLE Likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    client_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id) ON DELETE CASCADE,
    FOREIGN KEY (client_id) REFERENCES Clients(id) ON DELETE CASCADE
);

-- Create the Analytics table to track views and downloads
CREATE TABLE Analytics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    views INT DEFAULT 0,
    likes INT DEFAULT 0,
    downloads INT DEFAULT 0,
    FOREIGN KEY (project_id) REFERENCES Projects(id) ON DELETE CASCADE
);

-- Create the case studies for downloadable project materials
CREATE TABLE CaseStudies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    file_url VARCHAR(255) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id) ON DELETE CASCADE
);