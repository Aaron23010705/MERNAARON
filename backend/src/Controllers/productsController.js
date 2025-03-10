/*Aquí es donde se define que hará cada función del crud, es decir aquí se hace
la definición de cada método como el create o el update */

//El array es de las funciones del crud y se define con "{}"
const productsController = {};
//Siempre agregar .js al final de la ruta
import Products from "../models/Products.js";
//S E L E C T

productsController.getProducts =async(req, res) => {
 const products = await Products.find()
 res.json(products)

}