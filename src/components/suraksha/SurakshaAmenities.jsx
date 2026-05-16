import React from "react";

// Image imports
import img51 from "../../assets/images/51.png";
import img52 from "../../assets/images/52.png";
import img53 from "../../assets/images/53.png";
import img54 from "../../assets/images/54.png";
import img55 from "../../assets/images/55.png";
import img56 from "../../assets/images/56.png";
import img57 from "../../assets/images/57.png";

import img59 from "../../assets/images/59.png";
import img60 from "../../assets/images/60.png";
import img61 from "../../assets/images/61.png";
import img62 from "../../assets/images/62.png";
import img63 from "../../assets/images/63.png";
import img64 from "../../assets/images/64.png";
import img65 from "../../assets/images/65.png";
import img66 from "../../assets/images/66.png";
import img67 from "../../assets/images/67.png";
import img68 from "../../assets/images/68.png";
import img69 from "../../assets/images/69.png";

const amenities = [
  { title: "MULTIPURPOSE HALL", img: img51 },
  { title: "INDOOR GAMES", img: img52 },
  { title: "SENIOR CITIZENS' BOARD", img: img53 },
  { title: "DESIGNER STREET FURNITURE", img: img54 },
  { title: "ILLUMINATED SIGNAGES", img: img55 },
  { title: "DEDICATED SPACE", img: img57 },
  { title: "OPEN SPACES", img: img68 },
  { title: "EFFICIENT SEWAGE TREATMENT", img: img59 },
  { title: "HIGH-QUALITY PAVER BLOCKS", img: img60 },
  { title: "EARTHQUAKE-RESISTANT RCC", img: img61 },
  { title: "SUPERIOR PLUMBING", img: img62 },
  { title: "ENERGY-EFFICIENT LED STREET", img: img63 },
  { title: "DEDICATED GREEN ZONES", img: img64 },
  { title: "HERBAL & MEDICINAL GARDEN", img: img65 },
  { title: "RAINWATER HARVESTING SYSTEM", img: img66 },
  { title: "SMART WASTE MANAGEMENT SYSTEM", img: img67 },
  { title: "ADDITIONAL AMENITY", img: img69 },
];

const SurakshaAmenities = () => {
  return (
    // हल्का और प्रीमियम बैकग्राउंड
    <section className="w-full bg-[#fdfcf9] py-24">
      <div className="max-w-[1700px] mx-auto px-6 md:px-36">
      
      {/* Top Small Heading */}
      <p className="text-center text-[15px] md:text-[12px] tracking-[6px] text-[#C8A96A] mb-1 uppercase font-medium">
        WORLD-CLASS FACILITIES
      </p>

      {/* Main Heading */}
      <h2 className="text-center text-4xl md:text-[3.2rem] font-serif font-light text-[#333] uppercase tracking-[2px] mb-4">
        OUR AMENITIES
      </h2>
      
      {/* Hollow Diamond Divider */}
      <div className="flex items-center justify-center gap-2 mt-0 mb-8">

        {/* Left Line */}
        <div className="w-[45px] md:w-[65px] h-[0.5px] bg-[#D4A056]"></div>

        {/* Hollow Diamond */}
        <div className="w-[7px] h-[7px] border border-[#D4A056] rotate-45 bg-transparent"></div>

        {/* Right Line */}
        <div className="w-[45px] md:w-[65px] h-[0.5px] bg-[#D4A056]"></div>

      </div>

      {/* Grid - aspect-[5/4.3] se width pehli jaisi rahegi aur height minor badh jayegi */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6 max-w-[1350px] mx-auto">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center text-center 
            aspect-[5/4.3] bg-white border border-[#f0ece4] 
            rounded-xl transition-all duration-500 
            hover:bg-[#fdfcf9] hover:shadow-xl hover:-translate-y-1 overflow-hidden"
          >
            {/* Icon Container */}
            <div className="h-14 flex items-center justify-center mb-4">
               <img
                src={item.img}
                alt={item.title}
                className="w-11 h-11 md:w-13 md:h-13 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <p className="text-[12px] md:text-[14px] tracking-[1.5px] text-gray-600 font-medium leading-tight px-4 uppercase transition-colors duration-300 group-hover:text-[#C8A96A]">
              {item.title}
            </p>

            {/* Bottom Hover Underline */}
            {/* Bottom Underline */}
<div
  className="absolute bottom-0 left-1/2 -translate-x-1/2 
  w-0 h-[2px] 
  bg-gradient-to-r from-transparent via-[#D8B15A] to-transparent
  opacity-0 transition-all duration-500
  group-hover:w-[65%] group-hover:opacity-100"
></div>         
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default SurakshaAmenities;
