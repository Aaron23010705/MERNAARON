/*Aquí es donde se define que hará cada función del crud, es decir aquí se hace
la definición de cada método como el create o el update */

//El array es de las funciones del crud y se define con "{}"
const productsController = {};
//Siempre agregar .js al final de la ruta
import productsModel from "../models/Products.js";
//S E L E C T

productsController.getProducts =async(req, res) => {
 const products = await productsModel.find()
 res.json(products)

}

// I N S E R T 
//Asinctona significa que va línea por línea osea va pedazo por pedazo, es asincrona cuadndo se espera que pase algo antes de que se devuelva algo
productsController.insertProducts = async(req,res) => {    
//cada vez ue se vea un req es todo lo que se solicita
  const {name, description, price, stock } = req.body;
  const newProduct = new productsModel({name,  description,  price,  stock })
  await newProduct,save()
  res.json ({message: "product saved"});
}

//U P D A T E
productsController.updateProducts = async(req,res) => {
    const {name, description, price, stock} = req.body;
    const updatedProduct = await productsModel.findByIdAndUpdate(req.params.id,{name,  description,  price,  stock },{new:true})
    res.json ({message: "Product updated"})

}

//D E L E T E 
productsController.deleteProducts = async (req, res) => {
    await productsModel.findByIdAndDelete(req.params.id)
    res.json({message: "product deleted"})
}

export default productsController;
