import React from "react";

// Icons import
import { 
  FiShield, FiVideo, FiTruck, FiWind, 
  FiZap, FiMap, FiDroplet, FiSun 
} from "react-icons/fi";
import { MdOutlinePark, MdOutlineChildCare } from "react-icons/md";

const amenitiesData = [
  { title: "Gated community with restricted entry", icon: <FiShield className="w-full h-full" /> },
  { title: "24/7 security and CCTV", icon: <FiVideo className="w-full h-full" /> },
  { title: "Private Parking space", icon: <FiTruck className="w-full h-full" /> },
  { title: "Green landscaped areas", icon: <MdOutlinePark className="w-full h-full" /> },
  { title: "Wide internal roads", icon: <FiMap className="w-full h-full" /> },
  { title: "Electricity backup", icon: <FiZap className="w-full h-full" /> },
  { title: "Children's play areas", icon: <MdOutlineChildCare className="w-full h-full" /> },
  { title: "Peaceful environment", icon: <FiWind className="w-full h-full" /> },
  { title: "Proper drainage system", icon: <FiDroplet className="w-full h-full" /> },
  { title: "Street lights for safety", icon: <FiSun className="w-full h-full" /> },
];

const AmenitiesBlog = () => {
  return (
    <section className="w-full bg-[#fdfcf9] py-24">
      <div className="max-w-[1700px] mx-auto px-6 md:px-36">
        
        {/* Top Small Heading */}
        <p className="text-center text-[15px] md:text-[12px] tracking-[6px] text-[#C8A96A] mb-3 uppercase font-medium">
          WORLD-CLASS FACILITIES
        </p>

        {/* Main Heading */}
        <div className="text-center mb-0 flex flex-col items-center">
          <h2 className="text-4xl md:text-[3.2rem] font-serif font-light text-[#1e1e1e] uppercase tracking-[2px]">
            FEATURES & AMENITIES
          </h2>

          {/* SAME Divider as 1 */}
          <div className="mt-2 mb-8 w-36 h-4 flex items-center justify-center">
            <svg 
              viewBox="0 0 160 20" 
              className="w-full h-full text-[#C8A96A]/90" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
            >
              {/* Left Line */}
              <path d="M 15,10 L 65,10 Q 69,10 71,8" strokeLinecap="round" />
              
              {/* Diamond */}
              <path d="M 80,5 L 86,11 L 80,17 L 74,11 Z" strokeWidth="1.3" />
              
              {/* Right Line */}
              <path d="M 145,10 L 95,10 Q 91,10 89,8" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Sub Paragraph */}
        <p className="text-center text-gray-500 text-[14px] md:text-[16px] max-w-3xl mx-auto leading-relaxed mb-16 uppercase tracking-[1px] font-medium">
          With contemporary conveniences and modern amenities, Suraksha Enclave intends to provide a whole lifestyle experience.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6 max-w-[1350px] mx-auto">
          {amenitiesData.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center text-center 
              aspect-[5/4.3] bg-white border border-[#f0ece4] 
              rounded-xl transition-all duration-500
              hover:bg-[#fdfcf9] hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              
              {/* Icon */}
              <div className="h-10 w-10 flex items-center justify-center mb-4 text-gray-700 transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <p className="text-[12px] md:text-[14px] tracking-[1.5px] text-[#222] font-semibold leading-tight px-4 uppercase transition-colors duration-300 group-hover:text-[#C8A96A]">
                {item.title}
              </p>

              {/* SAME Bottom Underline as 1 */}
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

        {/* Footer Text */}
        <p className="text-center text-gray-600 text-base md:text-lg mt-16 max-w-3xl mx-auto leading-relaxed">
          Residents enjoy the luxury of living in comfort and security because of these features.
        </p>

      </div>
    </section>
  );
};

export default AmenitiesBlog;