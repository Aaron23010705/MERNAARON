import ProductCard from "./ProductCard";
import React from "react";
 
const ListProducts = ({ product, loading, updateProduct, deleteProduct  }) => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando productos...</div>}

 
        {product?.map((products) => (
          <ProductCard 
            key={products._id}
            product={products}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        ))}
      </div>
    </div>
  );
};
 
export default ListProducts;