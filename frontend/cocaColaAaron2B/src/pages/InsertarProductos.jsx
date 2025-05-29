import React from 'react';
import ProductList from '../components/listProducts';
import '../styles/InsertarLocation.css';
import ImgLocals from '../img/Products.jpg';
import useDataProducts from '../hooks/useDataProducts';

const Productos = () => {
  const {
      activeTab,
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
  } = useDataProducts();

  return (
    <div className="locations-page">
      <div className="locations-container">
        <div className="form-section">
          {/* Formulario de agregar o editar producto */}
          <div className="form-container">
            <h2 className="form-title">{id ? "Editar producto" : "Agregar nuevo producto"}</h2>
            
            <form onSubmit={id ? handleEdit : saveProduct} className="location-form">
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
                placeholder="descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-input"
              />
              <input
                type="number"
                name="phone"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-input"
              />
              <input
                type="number"
                name="hours"
                placeholder="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="form-input"
              />
              <button type="submit" className="btn-submit">
                {id ? "Actualizar Producto" : "Agregar Producto"}
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

        {/* Lista de Productos */}
        <div className="locations-section">
          <h2 className="locations-title">Productos Registrados</h2>
          <div className="locations-grid">
            {activeTab === "list" && (
              <ProductList
                product={products}
                loading={loading}
                deleteProduct={deleteProduct}
                updateProduct={updateProduct} // Asegúrate de que esto esté pasando correctamente
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
