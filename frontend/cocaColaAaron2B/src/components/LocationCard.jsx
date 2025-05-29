 import React from 'react';
import '../styles/LocationCard.css';

const LocationCard = ({ local, updateLocal, deleteLocal }) => {
  return (
    <div className="location-card">
      <div className="location-header">
        <h3 className="location-name">{local.name}</h3>
        <p className="location-address">{local.adress}</p>
      </div>
      
      <div className="location-details">
        <p className="location-phone">{local.telephone}</p>
        <p className="location-hours">{local.schedule}</p>
      </div>
      
      <div className="location-actions">
        <button 
          className="btn-edit"
          onClick={() => updateLocal(local)}
        >
          Editar
        </button>
        <button 
          className="btn-delete"
          onClick={() => deleteLocal(local._id)} 
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default LocationCard;