import React from "react";
import floor from "../../assets/images/floor.png";

const Floor = () => {
  return (
    <div className="w-full bg-white py-20 px-4 md:px-10">
      
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-serif text-[#B99630] tracking-[3px] mb-14">
        FLOOR PLAN
      </h2>

      {/* Pale Yellow Frame */}
      <div className="max-w-4xl mx-auto bg-[#FDFCE9] p-5 md:p-8 rounded-sm border border-black/10">
        <img
          src={floor}
          alt="Floor Plan"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Floor;