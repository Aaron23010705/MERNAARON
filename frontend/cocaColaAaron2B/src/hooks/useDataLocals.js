import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
 
const useDataLocals = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:4000/api/locals"; // Ajusta esta URL según tu backend
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [schedule, setSchedule] = useState("");
  const [locals, setLocals] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const fetchLocals = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Hubo un error al obtener los locales");
      }
      const data = await response.json();
      setLocals(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching locals:", error);
      toast.error("Error al cargar los locales");
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchLocals();
  }, []);
 
  const saveLocal = async (e) => {
    e.preventDefault();
    try {
      const newLocal = {
        name,
        adress,
        telephone,
        schedule,
      };
 
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLocal),
      });
 
      if (!response.ok) {
        throw new Error("Hubo un error al registrar el local");
      }
 
      toast.success('Local registrado');
      fetchLocals();
      setName("");
      setAdress("");
      setTelephone("");
      setSchedule("");
    } catch (error) {
      console.error("Error saving local:", error);
      toast.error("Error al guardar el local");
    }
  };
 
  const deleteLocal = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
 
      if (!response.ok) {
        throw new Error("Hubo un error al eliminar el local");
      }
 
      toast.success('Local eliminado');
      fetchLocals();
    } catch (error) {
      console.error("Error deleting local:", error);
      toast.error("Error al eliminar el local");
    }
  };
 
  const updateLocals = async (dataLocal) => {
    setId(dataLocal._id);
    setName(dataLocal.name);
    setAdress(dataLocal.adress);
    setTelephone(dataLocal.telephone);
    setSchedule(dataLocal.schedule);
    setActiveTab("form");
  };
 
  const handleEdit = async (e) => {
    e.preventDefault();
 
    try {
      const editLocals = {
        name,
        adress,
        telephone,
        schedule,
      };
     
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editLocals),
      });
 
      if (!response.ok) {
        throw new Error("Error al actualizar el local");
      }
 
      toast.success('Local actualizado');
      setId("");
      setName("");
      setAdress("");
      setTelephone("");
      setSchedule("");
      setActiveTab("list");
      fetchLocals();
    } catch (error) {
      console.error("Error al editar el Local:", error);
      toast.error("Error al actualizar el local");
    }
  };
 
  return {
    activeTab,
    setActiveTab,
    id,
    name,
    setName,
    adress,
    setAdress,
    telephone,
    setTelephone,
    schedule,
    setSchedule,
    locals,
    loading,
    saveLocal,
    deleteLocal,
    updateLocals,
    handleEdit,
  };
};
 
export default useDataLocals;
 