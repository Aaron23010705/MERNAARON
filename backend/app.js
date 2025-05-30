//Importo toda la libreria de express
import express from "express";
import cors from "cors";
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
import RegisterClientRoutes from "./src/routes/registerClient.js"
import PasswordRecoveryRoutes from "./src/routes/passwordRecovery.js"
import blogRoutes from "./src/routes/blog.js"


//creo una constante que es igual
//a la libreria que importe y se ejecuta
const app = express();
app.use(cookieParse())

app.use(
  cors({
    origin: "http://localhost:5173", // Dominio del cliente
    credentials: true, // Permitir envío de cookies y credenciales
  })
);
//Uso un mmiddleware para que acepte datos jason
app.use (express.json());
//Definir la ruta
//Emboids, asi se llaman estas rutas
app.use("/api/products", productRoutes)
app.use("/api/clients", clientRoutes)
//Se tiene que poner entre comillas de la misma manera que aparece en el controlador del login, usertype
app.use("/api/employee", validateAuthToken(["Employee", "Admin"]), employeeRoutes)
app.use("/api/locals", localsRoutes)
app.use("/api/categories", categoriesRoutes)
app.use("/api/reviews", reviewsRoute)
app.use("/api/evaluations", evaluationRoutes)
app.use("/api/registerEmployess", registerEmployessRoutes)
app.use ("/api/login", LoginRoutes)
app.use("/api/logout", logoutRoutes )
app.use("/api/registerClient", RegisterClientRoutes )
app.use("/api/passwordRecovery", PasswordRecoveryRoutes)
app.use("/api/blog", blogRoutes)
import { validateAuthToken } from "./src/middleware/validateAuthToken.js";

//Exporto la constante para poder usar express en otros lados
export default app;    

