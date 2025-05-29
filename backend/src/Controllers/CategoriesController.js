import categoriesModel from "../models/Categories.js";
import { v2 as cloudinary } from 'cloudinary';
import { config } from "../config.js";

cloudinary.config({
  cloud_name: config.cloudinary.cloudinary_name,
  api_key: config.cloudinary.cloudinary_api_key,
  api_secret: config.cloudinary.cloudinary_api_secret,
});

const categoriesController = {
  // GET ALL CATEGORIES
  getAllCategories: async (req, res) => {
    try {
      const categories = await categoriesModel.find();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener categorías", error });
    }
  },

  // CREATE CATEGORY
  createCategory: async (req, res) => {
    try {
      const { name, description, status } = req.body;
      let imageUrl = "";

      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: "categories",
          allowed_formats: ["jpg", "png", "jpeg"],
        });
        imageUrl = result.secure_url;
      }

      const newCategory = new categoriesModel({ 
        name, 
        description, 
        status: status === 'true' || status === true,
        img: imageUrl 
      });
      
      await newCategory.save();
      res.json({ message: "Categoría guardada exitosamente", category: newCategory });
    } catch (error) {
      console.log("Error al insertar categoría: " + error);
      res.status(500).json({ message: "Error al guardar categoría", error });
    }
  },

  // UPDATE CATEGORY
  updateCategory: async (req, res) => {
    try {
      const { name, description, status } = req.body;
      let updateData = { name, description, status: status === 'true' || status === true };

      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: "categories",
          allowed_formats: ["jpg", "png", "jpeg"],
        });
        updateData.img = result.secure_url;
      }

      const updatedCategory = await categoriesModel.findByIdAndUpdate(
        req.params.id, 
        updateData, 
        { new: true }
      );
      
      if (!updatedCategory) {
        return res.status(404).json({ message: "Categoría no encontrada" });
      }

      res.json({ message: "Categoría actualizada exitosamente", category: updatedCategory });
    } catch (error) {
      console.log("Error al actualizar categoría: " + error);
      res.status(500).json({ message: "Error al actualizar categoría", error });
    }
  },

  // DELETE CATEGORY
  deleteCategory: async (req, res) => {
    try {
      const deletedCategory = await categoriesModel.findByIdAndDelete(req.params.id);
      
      if (!deletedCategory) {
        return res.status(404).json({ message: "Categoría no encontrada" });
      }

      res.json({ message: "Categoría eliminada exitosamente" });
    } catch (error) {
      console.log("Error al eliminar categoría: " + error);
      res.status(500).json({ message: "Error al eliminar categoría", error });
    }
  }
};

export default categoriesController;