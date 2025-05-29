import { useState, useEffect } from 'react';

const useDataCategories = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(true);
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // URL base de tu API - ajusta según tu configuración
  const API_URL = "http://localhost:4000/api"; // Cambia por tu URL

  // Función para obtener todas las categorías
  const getCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    } finally {
      setLoading(false);
    }
  };

  // Función para guardar una nueva categoría
  const saveCategory = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('status', status);
      if (image) {
        formData.append('image', image);
      }

      const response = await fetch(`${API_URL}/categories`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Limpiar formulario
        setName("");
        setDescription("");
        setStatus(true);
        setImage(null);
        // Recargar lista
        getCategories();
        alert("Categoría guardada exitosamente");
      }
    } catch (error) {
      console.error("Error al guardar categoría:", error);
      alert("Error al guardar la categoría" + error);
    }
  };

  // Función para actualizar una categoría
  const updateCategory = (category) => {
    setId(category._id);
    setName(category.name);
    setDescription(category.description);
    setStatus(category.status);
    // No podemos precargar la imagen desde la base de datos en un input file
  };

  // Función para manejar la edición
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('status', status);
      if (image) {
        formData.append('image', image);
      }

      const response = await fetch(`${API_URL}/categories/${id}`, {
        method: 'PUT',
        body: formData
      });

      if (response.ok) {
        // Limpiar formulario
        setId("");
        setName("");
        setDescription("");
        setStatus(true);
        setImage(null);
        // Recargar lista
        getCategories();
        alert("Categoría actualizada exitosamente");
      }
    } catch (error) {
      console.error("Error al actualizar categoría:", error);
      alert("Error al actualizar la categoría");
    }
  };

  // Función para eliminar una categoría
  const deleteCategory = async (categoryId) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar esta categoría?")) {
      try {
        const response = await fetch(`${API_URL}/categories/${categoryId}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          getCategories();
          alert("Categoría eliminada exitosamente");
        }
      } catch (error) {
        console.error("Error al eliminar categoría:", error);
        alert("Error al eliminar la categoría");
      }
    }
  };

  // Función para manejar el cambio de imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Cargar categorías al montar el componente
  useEffect(() => {
    getCategories();
  }, []);

  return {
    activeTab,
    setActiveTab,
    id,
    name,
    setName,
    description,
    setDescription,
    status,
    setStatus,
    image,
    setImage,
    categories,
    loading,
    saveCategory,
    deleteCategory,
    updateCategory,
    handleEdit,
    handleImageChange
  };
};

export default useDataCategories;