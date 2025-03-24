const employeeController = {};

import Employee from "../models/Employees.js";

employeeController.getEmployee = async (req,res) => {

    const employee = await Employee.find();
    res.json(employee)
   
}

employeeController.updateEmployee = async (req,res) => {
    const {name, lastname, birthday, email, adress, hireDate, password, telephone, dui, issNumber, isVerified} = req.body;
     const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id,{name, lastname, birthday, email, adress, hireDate, password, telephone, dui, issNumber,isVerified},{new:true})
     res.json ({message: "Employee updated"});

}

employeeController.deleteEmployee = async (req,res) => {

    await Employee.findByIdAndDelete(req.params.id);
    res.json ({message: "Employee deleted"});

}

export default employeeController;