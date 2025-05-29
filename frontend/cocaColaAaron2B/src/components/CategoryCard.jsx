import React from 'react';
import '../styles/CategoryCard.css';

const CategoryCard = ({ category, onEdit, onDelete }) => {
  return (
    <div className="category-card">
      <div className="category-info">
        <h3 className="category-name">{category.name}</h3>
        <p className="category-description">{category.description}</p>
        <p className="category-status">
          <span className={`status-badge ${category.status ? 'active' : 'inactive'}`}>
            {category.status ? 'Activo' : 'Inactivo'}
          </span>
        </p>
      </div>

      <div className="category-image">
        {category.img ? (
          <img 
            src={category.img} 
            alt={category.name}
            className="category-img"
          />
        ) : (
          <div className="category-placeholder">
            <span>📷</span>
          </div>
        )}
      </div>

      <div className="category-actions">
        <button 
          className="btn-edit"
          onClick={() => onEdit(category)}
        >
          Editar
        </button>
        <button 
          className="btn-delete"
          onClick={() => onDelete(category._id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;