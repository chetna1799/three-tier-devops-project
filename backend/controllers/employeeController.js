const employeeModel = require("../models/employeeModel");

// GET
const getEmployees = (req, res) => {

    employeeModel.getAllEmployees((err, results) => {

        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        res.json(results);

    });

};

// POST
const createEmployee = (req, res) => {

    const employee = req.body;

    employeeModel.createEmployee(employee, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        res.status(201).json({
            message: "Employee Added Successfully",
            id: result.insertId
        });

    });

};

// GET Employee By ID
const getEmployeeById = (req, res) => {

    const id = req.params.id;

    employeeModel.getEmployeeById(id, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json(results[0]);

    });

};

// UPDATE Employee
const updateEmployee = (req, res) => {

    const id = req.params.id;

    const employee = req.body;

    employeeModel.updateEmployee(id, employee, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json({
            message: "Employee Updated Successfully"
        });

    });

};

// DELETE Employee
const deleteEmployee = (req, res) => {

    const id = req.params.id;

    employeeModel.deleteEmployee(id, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json({
            message: "Employee Deleted Successfully"
        });

    });

};

module.exports = {
    getEmployees,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};