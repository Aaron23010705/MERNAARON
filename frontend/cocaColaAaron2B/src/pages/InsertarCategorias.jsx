import React from 'react';
import ListCategories from '../components/listCategory';
import '../styles/InsertarCategory.css';
import ImgCategory from '../img/categorias.jpg';
import useDataCategories from '../hooks/useDataCategories';

const Categorias = () => {
  const {
    activeTab,
    id,
    name,
    setName,
    description,
    setDescription,
    status,
    setStatus,
    image,
    categories,
    loading,
    saveCategory,
    deleteCategory,
    updateCategory,
    handleEdit,
    handleImageChange
  } = useDataCategories();

  return (
    <div className="categories-page">
      <div className="categories-container">
        <div className="form-section">
          {/* Formulario de agregar o editar categoría */}
          <div className="form-container">
            <h2 className="form-title">{id ? "Editar categoría" : "Agregar nueva categoría"}</h2>

            <form onSubmit={id ? handleEdit : saveCategory} className="category-form">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                required
              />
              <input
                type="text"
                name="description"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-input"
              />
              <select
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value === 'true')}
                className="form-select"
              >
                <option value={true}>Activo</option>
                <option value={false}>Inactivo</option>
              </select>

              <div className="image-upload">
                <input
                  type="file"
                  id="categoryImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input"
                />
                <label htmlFor="categoryImage" className="file-label">
                  <span className="upload-icon">+</span>
                  <span className="upload-text">Subir Imagen</span>
                </label>
                {image && (
                  <div className="image-preview">
                    <span className="text-sm text-green-600">Imagen seleccionada: {image.name}</span>
                  </div>
                )}
              </div>

              <button type="submit" className="btn-submit">
                {id ? "Actualizar Categoría" : "Agregar Categoría"}
              </button>
            </form>
          </div>

          <div className="image-section">
            <img 
              src={ImgCategory} 
              alt="Coca Cola Products" 
              className="coca-image" 
            />
          </div>
        </div>

        {/* Lista de Categorías */}
        <div className="categories-section">
          <h2 className="categories-title">Categorías Registradas</h2>
          <div className="categories-grid">
            {activeTab === "list" && (
              <ListCategories
                categories={categories}
                loading={loading}
                deleteCategory={deleteCategory}
                updateCategory={updateCategory}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorias;