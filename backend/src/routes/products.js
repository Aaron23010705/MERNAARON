/*En este archivo dentro de la carpeta routes, 
vamos a colocar, que metodos tiene la ruta 
"/api/products"*/

import express from "express";
import productsController from "../Controllers/productsController.js";

const router = express.Router();

//Solo con la pleca el programa asume que se esta conectando a api/products, para evitar tener que volve a escribir toda la ruta
router.route("/")
.get(productsController.getProducts)
.post(productsController.insertProducts)

//Con este /:id  se pone arriba de los metodos que utilizan el id es decir el update y el delete
router.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProducts)

export default router

//Definimos que métodos va a tener 



