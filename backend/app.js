//Importo toda la libreria de express
import express from "express";
import productRoutes from "./src/routes/products.js"
import clientRoutes from "./src/routes/clients.js"
import employeeRoutes from "./src/routes/employees.js"
import localsRoutes from "./src/routes/locals.js"
import categoriesRoutes from "./src/routes/categories.js";
import reviewsRoute from "./src/routes/review.js";
import registerEmployessRoutes from "./src/routes/registerEmployees.js";
import evaluationRoutes from "./src/routes/evaluation.js"
import LoginRoutes from "./src/routes/login.js"
import cookieParse from "cookie-parser"
import logoutRoutes from "./src/routes/logout.js"



//creo una constante que es igual
//a la libreria que importe y se ejecuta
const app = express();
app.use(cookieParse())

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
app.use("/api/registerEmployess", registerEmployessRoutes)
app.use ("/api/login", LoginRoutes)
app.use("/api/logout", logoutRoutes )
app.use("/api/registerClient", )
//Exporto la constante para poder usar express en otros lados
export default app;    
