const clientsController = {};

import Clients from "../models/Clients.js";

clientsController.getClients = async (req,res) => {

    const clients = await Clients.find();
    res.json(clients)
   
}

clientsController.insertClients = async (req,res) => {

    const {name, lastname, birthday, email, password, telephone, dui, isVerified} = req.body;
    const newClient = new Clients({name, lastname, birthday, email, password, telephone, dui, isVerified})
    await newClient.save();
    res.json ({message: "client saved"});
}

clientsController.updateClients = async (req,res) => {
    const {name, lastname, birthday, email, password, telephone, dui, isVerified} = req.body;
     const updateClient = await Clients.findByIdAndUpdate(req.params.id,{name, lastname, birthday, email, password, telephone, dui, isVerified},{new:true})
     res.json ({message: "client upsdated"});

}

clientsController.deleteClients = async (req,res) => {

    await Clients.findByIdAndDelete(req.params.id);
    res.json ({message: "client deleted"});

}

export default clientsController;