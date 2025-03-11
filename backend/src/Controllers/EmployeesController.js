const employeeController = {};

import Employee from "../models/Employees.js";

employeeController.getEmployee = async (req,res) => {

    const Employee = await Employee.find();
    res.json(Employee)
   
}

employeeController.insertEmployee = async (req,res) => {

    const {name, lastname, birthday, email, adress, hireDate, password, telephone, dui, issNumber, isVerified} = req.body;
    const newEmployee = new Employee({name, lastname, birthday, email, adress, hireDate, password, telephone, dui, issNumber, isVerified})
    await newEmployee.save();
    res.json ({message: "Employee saved"});
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