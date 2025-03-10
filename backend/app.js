//Importo toda la libreria de express
import express from "express";
import productRoutes from "./src/routes/products.js"

//creo una constante que es igual
//a la libreria que importe y se ejecuta
const app = express();

//Uso un mmiddleware para que acepte datos jason
app.use (express.json());
//Definir la ruta
app.use("/api/products", productRoutes)

//Exporto la constante para poder usar express en otros lados
export default app;    
