const employeeController = {};

import Employee from "../models/Employees.js";

employeeController.getEmployee = async (req,res) => {

    const clients = await Employee.find();
    res.json(clients)
   
}

employeeController.insertEmployee = async (req,res) => {

    const {name, lastname, birthday, email, adress, hireDate, password, telephone, dui, issNumber, isVerified} = req.body;
    const newClient = new Employee({name, lastname, birthday, email, adress, hireDate, password, telephone, dui, issNumber, isVerified})
    await newClient.save();
    res.json ({message: "Employee saved"});
}

employeeController.updateEmployee = async (req,res) => {
    const {name, lastname, birthday, email, adress, hireDate, password, telephone, dui, issNumber, isVerified} = req.body;
     const updateClient = await Employee.findByIdAndUpdate(req.params.id,{name, lastname, birthday, email, adress, hireDate, password, telephone, dui, issNumber,isVerified},{new:true})
     res.json ({message: "Employee updated"});

}

employeeController.deleteEmployee = async (req,res) => {

    await Employee.findByIdAndDelete(req.params.id);
    res.json ({message: "Employee deleted"});

}

export default employeeController;