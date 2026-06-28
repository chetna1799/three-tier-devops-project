const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employeeController");

// GET
router.get("/", employeeController.getEmployees);

// POST
router.post("/", employeeController.createEmployee);

//GET
router.get("/:id", employeeController.getEmployeeById);

router.put("/:id", employeeController.updateEmployee);

router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;