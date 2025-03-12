const categoriesController = {};
//Siempre agregar .js al final de la ruta
import categoriesModel from "../models/Categories.js";
//S E L E C T

categoriesController.getCategory =async(req, res) => {
 const Categories = await categoriesModel.find()
 res.json(Categories)

}

// I N S E R T 
//Asinctona significa que va línea por línea osea va pedazo por pedazo, es asincrona cuadndo se espera que pase algo antes de que se devuelva algo
categoriesController.insertCategory = async(req,res) => {    
//cada vez ue se vea un req es todo lo que se solicita
  const {name, description, status, image } = req.body;
  const newCategory = new categoriesModel({name, description, status, image })
  await newCategory.save()
  res.json ({message: "Category saved"});
}

//U P D A T E
categoriesController.updateCategory = async(req,res) => {
    const {name, description, status, image} = req.body;
    const updateCategory = await categoriesModel.findByIdAndUpdate(req.params.id,{name, description, status, image},{new:true})
    res.json ({message: "Category updated"})

}

//D E L E T E 
categoriesController.deleteCategory = async (req, res) => {
    await categoriesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Category deleted"})
}

export default categoriesController;
