
import express from "express";
import employeeController from "../Controllers/EmployeesController.js";

const router = express.Router();


router.route("/")
.get(employeeController.getEmployee)

router.route("/:id")
.put(employeeController.updateEmployee)
.delete(employeeController.deleteEmployee)

export default router