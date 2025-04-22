import jsonwebToken from "jsonwebtoken" // token 
import bcrypt from "bcryptjs" //Encriptar contraseña

import clientsModel from "../models/Clients.js";
import employeeModel from "../models/Employees.js";
import { sendEmail, HTMLRecoveryEmail } from "../utils/mailPasswordRecovery.js";
import { config } from "../config.js";


//1- Crear un array de funciones
const passwordRecoveryController= {};

passwordRecoveryController.requestCode = async (req,res) => {

    const {email} = req.body;

    try {
        let userFound;
        let userType;

        userFound = await clientsModel.findOne({email})
if(userFound) {
    userType = "client"
} else {
    userFound = await employeeModel.findOne({email});
    userType = "Employee"
}
if(!userFound){
    return res.json ({message: "User not found}"})
}
    
//Generar un código de 6 digitos

const code = Math.floor(10000 + Math.random() * 60000).toString

//generar un token
const token = jsonwebToken.sign(
    //1- ¿Qué voy a guardar?
    {
        email,
        code,
        userType,
        verified:false         
    },
    //2- secret key
    config.JWT.secret,
    //3 ¿Cuándo expira?
    {expiresIn: "25m"}
)





    } catch (error) {}
} 