
import express from "express";
import clientsController from "../Controllers/ClientsController.js";

const router = express.Router();


router.route("/")
.get(clientsController.getClients)
.post(clientsController.insertClients)

router.route("/:id")
.put(clientsController.updateClients)
.delete(clientsController.deleteClients)

export default router