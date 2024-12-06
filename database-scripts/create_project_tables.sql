-- 1. Admins Table
CREATE TABLE Admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Clients Table
CREATE TABLE Clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Categories Table
CREATE TABLE Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT
);

-- 4. Projects Table
CREATE TABLE Projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('In Progress', 'Under Review', 'Published') DEFAULT 'In Progress',
    client_id INT,
    category_id INT,
    is_case_study BOOLEAN DEFAULT FALSE,  -- Flag to mark as a case study
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES Clients(id),
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);

-- 5. Project Details Table
CREATE TABLE Project_Details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    timeline TEXT,
    technologies TEXT,
    case_study_url VARCHAR(255),
    FOREIGN KEY (project_id) REFERENCES Projects(id)
);

-- 6. Comments Table
CREATE TABLE Comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    client_id INT,  -- Comments by clients only
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id),
    FOREIGN KEY (client_id) REFERENCES Clients(id)
);

-- 7. Reviews Table
CREATE TABLE Reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    client_id INT,  -- Reviews by clients only
    rating INT CHECK (rating BETWEEN 1 AND 5),
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id),
    FOREIGN KEY (client_id) REFERENCES Clients(id)
);

-- 8. Likes Table
CREATE TABLE Likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    client_id INT,  -- Client ID (if logged in), or NULL for public visitors
    ip_address VARCHAR(255) NOT NULL,  -- To prevent duplicate likes from the same IP
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id)
);

-- 9. Analytics Table
CREATE TABLE Analytics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    views INT DEFAULT 0,  -- Total number of views
    downloads INT DEFAULT 0,  -- Total number of downloads
    likes INT DEFAULT 0,  -- Total number of likes
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES Projects(id)
);
