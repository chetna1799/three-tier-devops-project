CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    department VARCHAR(100),
    salary DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO employees(name,email,department,salary)
VALUES
('John Doe','john@gmail.com','IT',70000),
('Alice Smith','alice@gmail.com','HR',65000),
('David Lee','david@gmail.com','Finance',80000);