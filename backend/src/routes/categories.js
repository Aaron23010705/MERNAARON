import express from "express";
import CategoriesController from "../Controllers/CategoriesController.js"

const router = express.Router();


router.route("/")
.get(CategoriesController.getCategory)
.post(CategoriesController.insertCategory)

router.route("/:id")
.put(CategoriesController.updateCategory)
.delete(CategoriesController.deleteCategory)

export default router