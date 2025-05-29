import LocationCard from "./LocationCard";
import React from "react";
 
const ListDistributors = ({ local, loading, updateLocal, deleteLocal }) => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando Locales...</div>}

 
        {local?.map((locals) => (
          <LocationCard
            key={locals._id}
            local={locals}
            deleteLocal={deleteLocal}
            updateLocal={updateLocal}
          />
        ))}
      </div>
    </div>
  );
};
 
export default ListDistributors;