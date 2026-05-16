import React from 'react';

const SummitAbout = () => {
  return (
    <section className="bg-white py-20 md:py-32 font-sans">
      <div className="max-w-[1700px] mx-auto px-6 md:px-36">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-24">

          {/* Left Section: Branding & Titles */}
          <div className="w-full md:w-[40%]">
            {/* Top Label with Gold Line */}
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-[1px] bg-[#D4A056]"></div>
              <p className="text-[#D4A056] text-[11px] tracking-[4px] uppercase font-bold">
                Visionary Development
              </p>
            </div>

            {/* Main Project Name - Serif Style */}
            <h1 className="text-5xl md:text-[4rem] font-serif text-[#1A1A1A] leading-[1.1] mb-8 font-normal">
              Summit Twin <br /> Tower
            </h1>

            {/* Italic Sub-tagline */}
            <p className="text-[#a1a1a1] text-lg md:text-[1.5rem] font-serif italic tracking-[1px] font-light">
              "Office Spaces & Fine Dine Restaurants"
            </p>
          </div>

          {/* Right Section: Detailed Description */}
          <div className="w-full md:w-[50%] pt-4">
            <p className="text-gray-600 leading-[1.8] text-[19px] font-light text-justify max-w-[540px] md:ml-12">
              Summit Twin Tower is an exclusive mixed-use development featuring luxury 
              retail, premium office spaces, and curated fine dining experiences. With 
              its two interconnected wings, it exemplifies architectural finesse and 
              urban sophistication. A landmark for Lucknow's elite, it stands as a 
              symbol of ambition, taste, and legacy—for the selected few who seek 
              the exceptional.
            </p>

            {/* Horizontal Line */}
            <div className="w-full h-[1px] bg-gray-100 my-8 md:ml-12 max-w-[540px]"></div>

            {/* RERA Section */}
            <div className="flex flex-row items-center justify-start gap-12 w-full md:ml-12 max-w-[540px]">
               <div className="flex flex-col">
                  <span className="text-[#B99630] text-[10px] font-bold uppercase tracking-[2px] mb-2">Rera Registered</span>
                  <span className="text-[#1c2b39] text-xl md:text-2xl font-serif tracking-[1px] uppercase">UPRERAPRJ962033</span>
               </div>

               {/* RERA Website Button */}
               <a 
                  href="https://up-rera.in" 
                  target="_blank" 
                  rel="noreferrer"
                  className="border border-gray-200 rounded-full px-8 py-3 flex items-center gap-3 hover:bg-gray-50 transition-all group"
               >
                  <span className="text-[#1c2b39] text-[11px] font-bold tracking-[2px] uppercase">Rera Website</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#B99630]">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SummitAbout;
