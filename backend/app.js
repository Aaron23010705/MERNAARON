//Importo toda la libreria de express
import express from "express";
import productRoutes from "./src/routes/products.js"
import clientRoutes from "./src/routes/clients.js"
import employeeRoutes from "./src/routes/employees.js"
import localsRoutes from "./src/routes/locals.js"
import categoriesRoutes from "./src/routes/categories.js";
import reviewsRoute from "./src/routes/review.js";
import evaluationRoutes from "./src/routes/evaluation.js"



//creo una constante que es igual
//a la libreria que importe y se ejecuta
const app = express();

//Uso un mmiddleware para que acepte datos jason
app.use (express.json());
//Definir la ruta
//Emboids, asi se llaman estas rutas
app.use("/api/products", productRoutes)
app.use("/api/clients", clientRoutes)
app.use("/api/employee", employeeRoutes)
app.use("/api/locals", localsRoutes)
app.use("/api/categories", categoriesRoutes)
app.use("/api/reviews", reviewsRoute)
app.use("/api/evaluations", evaluationRoutes)


//Exporto la constante para poder usar express en otros lados
export default app;    
