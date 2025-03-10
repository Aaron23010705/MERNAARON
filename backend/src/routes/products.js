/*En este archivo dentro de la carpeta routes, 
vamos a colocar, que metodos tiene la ruta 
"/api/products"*/

import express from "express";

const router = express.Router();

//Solo con la pleca el programa asume que se esta conectando a api/products, para evitar tener que volve a escribir toda la ruta
router.route("/").get()
.post()
.put()
.delete()

export default router

//Definimos que métodos va a tener 



