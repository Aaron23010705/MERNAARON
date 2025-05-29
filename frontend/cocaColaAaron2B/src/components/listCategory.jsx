import CategoryCard from "./CategoryCard";
import React from "react";

const ListCategories = ({ categories, loading, updateCategory, deleteCategory }) => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando categorías...</div>}

        {categories?.map((category) => (
          <CategoryCard 
            key={category._id}
            category={category}
            onEdit={updateCategory}
            onDelete={deleteCategory}
          />
        ))}

        {!loading && categories?.length === 0 && (
          <div className="text-center text-gray-500">No hay categorías registradas</div>
        )}
      </div>
    </div>
  );
};

export default ListCategories;