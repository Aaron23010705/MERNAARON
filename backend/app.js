//Importo toda la libreria de express
import express from "express";

//creo una constante que es igual
//a la libreria que importe y se ejecuta
const app = express();

//Definir la ruta
app.use("/api/products")

//Exporto la constante para poder usar express en otros lados
export default app;    