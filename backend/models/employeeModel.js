const db = require("../config/db");

// Get all employees
const getAllEmployees = (callback) => {
    const query = "SELECT * FROM employees";
    db.query(query, callback);
};

// Add new employee
const createEmployee = (employee, callback) => {

    const query = `
        INSERT INTO employees(name, email, department, salary)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        query,
        [
            employee.name,
            employee.email,
            employee.department,
            employee.salary
        ],
        callback
    );
};

// Get employee by ID
const getEmployeeById = (id, callback) => {

    const query = "SELECT * FROM employees WHERE id = ?";

    db.query(query, [id], callback);

};

// Update employee
const updateEmployee = (id, employee, callback) => {

    const query = `
        UPDATE employees
        SET name = ?, email = ?, department = ?, salary = ?
        WHERE id = ?
    `;

    db.query(
        query,
        [
            employee.name,
            employee.email,
            employee.department,
            employee.salary,
            id
        ],
        callback
    );
};

// Delete employee
const deleteEmployee = (id, callback) => {

    const query = "DELETE FROM employees WHERE id = ?";

    db.query(query, [id], callback);

};

module.exports = {
    getAllEmployees,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};