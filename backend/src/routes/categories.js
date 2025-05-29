import express from "express";
import multer from "multer";
import categoriesController from "../controllers/CategoriesController.js";

const router = express.Router();

// Configurar una carpeta en local que guarde las imagenes
const upload = multer({ dest: "public/" });

router
  .route("/")
  .get(categoriesController.getAllCategories)
  .post(upload.single("image"), categoriesController.createCategory);

router
  .route("/:id")
  .put(upload.single("image"), categoriesController.updateCategory)
  .delete(categoriesController.deleteCategory);

export default router;