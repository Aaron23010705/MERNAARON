import jsonwebtoken from "jsonwebtoken";//Token
import bcrypt from "bcryptjs"; //encriptar
import nodemailer from "nodemailer"; //enviar correo
import crypto from "crypto"; // código aleatorio

import clientsModel from "../models/Clients.js"
import { config } from "../config.js"; //config se pone en llave por que hay dos formas de exportar, cuando la exportamos por default que se puede exportar de cualquier manera y
// por constante, que en el caso de config es por constante y se tiene que mandar a llamar tal contaste

//Creamos un array de funciones

const registerClientsController = {};

registerClientsController.regiser = async (req,res) => {

    //1- Solicitas las cosas que vamos a guardar
    const {name, lastname, birthday, email, password, telephone, dui, isVerified} = req.body;

    try {
        //Verificamos si el cliente ya existe
        const doesClientExist = await clientsModel.findOne({email}); //Se busca el empleado por el email

        if (doesClientExist) {

            return res.json({message : "Client already exists"})
        
    }
    //Encriptamos la contraseña


    const passwordHash = await bycryptjs.hash(password, 10);

    //Guardo al cliente en la base de datos
    const newClient = new clientsModel({name, lastname, birthday, email, password: passwordHash /*el campo sigue llamandose password, entonces con : decimos que valor se va a guardar*/ , telephone, dui, isVerified})

} 
catch (error) {
        
    }

}
