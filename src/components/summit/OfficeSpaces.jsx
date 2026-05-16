import React from 'react';
import chairImage from '../../assets/images/chair.png'; 

const OfficeSpaces = () => {
  return (
    <section className="bg-[#F9F7F3] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Side: Image Section */}
          <div className="relative w-full lg:w-[48%] group cursor-pointer">
            
            {/* Concept Tag */}
            <div className="absolute -top-5 -left-3 z-30 bg-white shadow-lg rounded-xl p-4 flex items-center gap-3">
              <span className="text-[#D4A056] text-2xl font-serif">01</span>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] uppercase tracking-[2px] text-gray-400 font-bold">Concept</span>
                <span className="text-[13px] uppercase tracking-[1px] text-[#1c2b39] font-bold">Office</span>
              </div>
            </div>

            {/* Image Container */}
            <div className="bg-white rounded-[35px] relative w-full h-[280px] md:h-[330px] shadow-lg">
              <div className="absolute inset-1.5 md:inset-2 group-hover:inset-0 rounded-[30px] group-hover:rounded-[35px] overflow-hidden transition-all duration-500">
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#D4A056]/0 group-hover:bg-[#D4A056]/10 transition-all duration-500 z-10"></div>

                <img 
                  src={chairImage} 
                  alt="Office Space" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-[48%]">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-[#F3EEE3] rounded-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A056" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
              </div>
              <span className="text-[#D4A056] text-[12px] md:text-[13px] font-bold tracking-[3px] uppercase">
                Where Vision Meets Productivity
              </span>
            </div>

            <h2 className="text-4xl md:text-[56px] font-serif text-[#1c2b39] font-light mb-5 leading-tight">
              Office Spaces
            </h2>

            <div className="h-[2px] w-16 bg-[#D4A056] mb-8"></div>

            <p className="text-[#444] leading-[1.8] text-[16.5px] mb-10 font-normal">
              Summit Twin Tower redefines the concept of workspaces with its premium-grade 
              office environments designed for modern professionals and visionary 
              businesses.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-[#1c2b39] text-[11px] font-bold uppercase tracking-[2px] mb-4 opacity-70">
                Key Highlights
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
                {[
                  "Flexible layouts for startups & corporates",
                  "High-speed connectivity & intelligent infrastructure",
                  "Panoramic city views with abundant natural light",
                  "Advanced security & ergonomic design elements",
                  "Every square foot optimized for efficiency & comfort"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group/item">
                    
                    <div className="relative flex-shrink-0 mt-1.5 w-5 h-5 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-transparent group-hover/item:bg-[#D4A056] transition-all duration-300"></div>
                      <div className="relative w-1.5 h-1.5 rounded-full bg-[#D4A056] group-hover/item:bg-white transition-colors duration-300 z-10"></div>
                    </div>

                    <p className="text-[#666] text-[14px] leading-snug group-hover/item:text-[#1c2b39] transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfficeSpaces;