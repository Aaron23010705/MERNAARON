import React from 'react';
import '../styles/ProductCard.css'; 

const ProductCard = ({ product, updateProduct, deleteProduct }) => {
  return (
    <div className="product-card">
      <div className="card-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
        <p className="product-stock">{product.stock}</p>
      </div>
      <div className="card-actions">
        <button className="btn-edit" onClick={() => updateProduct(product) }>
          Editar
        </button>
        <button className="btn-delete" onClick={() => deleteProduct(product._id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;