import React from "react";

// इमेजेस इम्पोर्ट (91.png से 100.png)
import img91 from "../../assets/images/91.png";
import img92 from "../../assets/images/92.png";
import img93 from "../../assets/images/93.png";
import img94 from "../../assets/images/94.png";
import img95 from "../../assets/images/95.png";
import img96 from "../../assets/images/96.png";
import img97 from "../../assets/images/97.png";
import img98 from "../../assets/images/98.png";
import img99 from "../../assets/images/99.png";
import img100 from "../../assets/images/100.png";

const amenities = [
  { title: "ELEVATORS", img: img91 },
  { title: "MULTITIER SECURITY", img: img92 },
  { title: "HIGH END ENTRANCE LOBBY", img: img93 },
  { title: "JOGGING TRACK", img: img94 },
  { title: "BADMINTON", img: img95 },
  { title: "BASKETBALL", img: img96 },
  { title: "YOGA LAWN", img: img97 },
  { title: "OPEN GYM", img: img98 },
  { title: "AMPHITHEATRE", img: img99 },
  { title: "DOG PARK", img: img100 },
];

const Amenities = () => {
  return (
    <section className="w-full bg-[#fdfcf9] py-24">
      <div className="max-w-[1700px] mx-auto px-6 md:px-36">
      
        {/* Top Small Heading */}
        <p className="text-center text-[15px] md:text-[12px] tracking-[6px] text-[#C8A96A] mb-3 uppercase font-medium">
          WORLD-CLASS FACILITIES
        </p>

        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-[3.2rem] font-serif text-[#1e1e1e] uppercase tracking-[2px] mb-16">
          OUR AMENITIES
        </h2>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6 max-w-[1350px] mx-auto">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center text-center 
              aspect-[5/4] bg-white border border-[#f0ece4] 
              rounded-xl transition-all duration-500 cursor-pointer
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
              <p className="text-[12px] md:text-[14px] tracking-[1.5px] text-[#222] font-semibold leading-tight px-4 uppercase transition-colors duration-300 group-hover:text-[#C8A96A]">
                {item.title}
              </p>

              {/* Bottom Underline Hover Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-[#C8A96A] transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
