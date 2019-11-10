CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    password VARCHAR(100),
    major VARCHAR(100) NOT NULL,
    interests TEXT NOT NULL,
    privacy INT,
    role INT
);

CREATE TABLE IF NOT EXISTS friendship (
    from_id INT REFERENCES users(id),
    to_id INT REFERENCES users(id),
    status ENUM('pending', 'approved') NOT NULL,
    PRIMARY KEY (from_id, to_id)
);