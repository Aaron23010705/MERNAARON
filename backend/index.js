//Importar el archivo app.js
import app from "./app.js";
import "./database.js";
//Creo una función que se encarga de 
//Ejecutar el servidor

async function main(){
    //crear una constante del puerto paso 1
    const port = 4000;
    const newLocal = app.listen(port);
    console.log("Server is running"); }

    main();