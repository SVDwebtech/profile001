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
