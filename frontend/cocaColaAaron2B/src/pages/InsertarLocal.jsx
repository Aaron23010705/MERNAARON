import React from 'react';
import LocationCard from '../components/LocationCard';
import LocationList from '../components/listLocations';
import '../styles/InsertarLocation.css';
import ImgLocals from '../img/locals.jpeg';
import useDataLocals from '../hooks/useDataLocals';

const Locales = () => {
  const {
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
    saveLocal,
    loading,
    deleteLocal,
    updateLocals,
    handleEdit,
  } = useDataLocals();

  return (
    <div className="locations-page">
      <div className="locations-container">
        <div className="form-section">
          {/* Formulario de agregar o editar local */}
          <div className="form-container">
            <h2 className="form-title">{id ? "Editar local" : "Agregar nuevo local"}</h2>
            
            <form onSubmit={id ? handleEdit : saveLocal} className="location-form">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
              <input
                type="text"
                name="address"
                placeholder="Ubicación"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                className="form-input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="form-input"
              />
              <input
                type="text"
                name="hours"
                placeholder="Horario"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                className="form-input"
              />
              <button type="submit" className="btn-submit">
                {id ? "Actualizar Local" : "Agregar Local"}
              </button>
            </form>
          </div>

          <div className="image-section">
            <img 
              src={ImgLocals} 
              alt="Coca Cola Store" 
              className="coca-image" 
            />
          </div>
        </div>

        {/* Lista de locales */}
        <div className="locations-section">
          <h2 className="locations-title">Locales Registrados</h2>
          <div className="locations-grid">
            {activeTab === "list" && (
              <LocationList
                local={locals}
                loading={loading}
                deleteLocal={deleteLocal}
                updateLocal={updateLocals} // Asegúrate de que esto esté pasando correctamente
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locales;
