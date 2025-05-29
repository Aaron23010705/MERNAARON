 import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
 
const useDataProducts = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:4000/api/products"; // Ajusta esta URL según tu backend
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const fetchProdcuts = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Hubo un error al obtener los productos");
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error al cargar los productos");
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchProdcuts();
  }, []);
 
  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      const newLocal = {
        name,
        description,
        price,
        stock,
      };
 
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLocal),
      });
 
      if (!response.ok) {
        throw new Error("Hubo un error al registrar el producto");
      }
 
      toast.success('Local registrado');
      fetchProdcuts();
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("Error al guardar el producto");
    }
  };
 
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
 
      if (!response.ok) {
        throw new Error("Hubo un error al eliminar el producto");
      }
 
      toast.success('producto eliminado');
      fetchProdcuts();
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error al eliminar el producto");
    }
  };
 
  const updateProduct = async (dateProduct) => {
    setId(dateProduct._id);
    setName(dateProduct.name);
    setDescription(dateProduct.description);
    setPrice(dateProduct.price);
    setStock(dateProduct.stock);
    setActiveTab("form");
  };
 
  const handleEdit = async (e) => {
    e.preventDefault();
 
    try {
      const editProducts = {
        name,
        description,
        price,
        stock,
      };
     
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editProducts),
      });
 
      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }
 
      toast.success('Prdocuto actualizado');
      setId("");
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setActiveTab("list");
      fetchProdcuts();
    } catch (error) {
      console.error("Error al editar el producto:", error);
      toast.error("Error al actualizar el producto");
    }
  };
 
  return {
    activeTab,
    setActiveTab,
    id,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    stock,
    setStock,
    products ,
    loading,
    saveProduct,
    deleteProduct,
    updateProduct,
    handleEdit,
  };
};
 
export default useDataProducts;
 