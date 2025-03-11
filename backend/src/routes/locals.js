
import express from "express";
import LocalsController from "../Controllers/LocalsController.js"

const router = express.Router();


router.route("/")
.get(LocalsController.getLocal)
.post(LocalsController.insertLocal)

router.route("/:id")
.put(LocalsController.updateLocal)
.delete(LocalsController.deleteLocal)

export default router