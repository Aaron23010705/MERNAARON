const LocalsController = {};
//Siempre agregar .js al final de la ruta
import LocalsModel from "../models/Local.js";
//S E L E C T

LocalsController.getLocal =async(req, res) => {
 const Locals = await LocalsModel.find()
 res.json(Locals)

}

// I N S E R T 
//Asinctona significa que va línea por línea osea va pedazo por pedazo, es asincrona cuadndo se espera que pase algo antes de que se devuelva algo
LocalsController.insertLocal = async(req,res) => {    
//cada vez ue se vea un req es todo lo que se solicita
  const {name, adress, telephone, schedule } = req.body;
  const newLocal = new LocalsModel({name, adress, telephone, schedule })
  await newLocal.save()
  res.json ({message: "Local saved"});
}

//U P D A T E
LocalsController.updateLocal = async(req,res) => {
    const {name, adress, telephone, schedule}  = req.body;
    const updatedLocal = await LocalsModel.findByIdAndUpdate(req.params.id,{name, adress, telephone, schedule  },{new:true})
    res.json ({message: "Local updated"})

}

//D E L E T E 
LocalsController.deleteLocal = async (req, res) => {
    await LocalsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Local deleted"})
}

export default LocalsController;
