import React from "react";

import img21 from "../../assets/images/21.png";
import img22 from "../../assets/images/22.png";
import img23 from "../../assets/images/22.png"; // check pathway if needed
import img24 from "../../assets/images/24.png";
import img25 from "../../assets/images/25.png";
import img26 from "../../assets/images/26.png";
import img27 from "../../assets/images/27.png";
import img28 from "../../assets/images/28.png";
import img29 from "../../assets/images/29.png";
import img30 from "../../assets/images/30.png";

const amenities = [
  { title: "ELEVATORS", img: img21 },
  { title: "MULTITIER SECURITY", img: img22 },
  { title: "HIGH END ENTRANCE LOBBY", img: img23 },
  { title: "JOGGING TRACK", img: img24 },
  { title: "BADMINTON", img: img25 },
  { title: "BASKETBALL", img: img26 },
  { title: "YOGA LAWN", img: img27 },
  { title: "OPEN GYM", img: img28 },
  { title: "AMPHITHEATRE", img: img29 },
  { title: "DOG PARK", img: img30 },
];

const Amenities = () => {
  return (
    <section className="w-full bg-[#fdfcf9] py-24">
      <div className="max-w-[1700px] mx-auto px-6 md:px-36">
        
        {/* Top Small Heading */}
        <p className="text-center text-[15px] md:text-[12px] tracking-[6px] text-[#C8A96A] mb-3 uppercase font-medium">
          WORLD-CLASS FACILITIES
        </p>

        {/* Main Heading Block - mb-16 hatakar items control kiye hain */}
        <div className="text-center mb-0 flex flex-col items-center">
          <h2 className="text-4xl md:text-[3.2rem] font-serif font-light text-[#1e1e1e] uppercase tracking-[2px]">
            OUR AMENITIES
          </h2>
          
          {/* EXACT IMAGE MATCH DIVIDER: Spacing fixed with mt-2 and mb-8 */}
          <div className="mt-2 mb-8 w-36 h-4 flex items-center justify-center">
            <svg 
              viewBox="0 0 160 20" 
              className="w-full h-full text-[#C8A96A]/90" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
            >
              {/* Left Line with Upward Curved Tip (Slim 1px Stroke) */}
              <path d="M 15,10 L 65,10 Q 69,10 71,8" strokeLinecap="round" />
              
              {/* Center Hollow Diamond Shape */}
              <path d="M 80,5 L 86,11 L 80,17 L 74,11 Z" strokeWidth="1.3" />
              
              {/* Right Line with Upward Curved Tip (Slim 1px Stroke) */}
              <path d="M 145,10 L 95,10 Q 91,10 89,8" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Grid - aspect-[5/4.3] kiya hai minor height badhane ke liye */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6 max-w-[1350px] mx-auto">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center text-center 
              aspect-[5/4.3] bg-white border border-[#f0ece4] 
              rounded-xl transition-all duration-500
              hover:bg-[#fdfcf9] hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              {/* Icon */}
              <div className="h-14 flex items-center justify-center mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-11 h-11 md:w-13 md:h-13 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <p className="text-[12px] md:text-[14px] tracking-[1.5px] text-[#222] font-semibold leading-tight px-4 uppercase transition-colors duration-300 group-hover:text-[#C8A96A]">
                {item.title}
              </p>

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

export default Amenities;
