import React from 'react';
// अपनी इमेज का सही पाथ यहाँ डालें
import resImage from '../../assets/images/res.png'; 

const Restaurant = () => {
  return (
    // Background remains consistent
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-32">
        {/* flex-col-reverse and lg:flex-row-reverse used to swap sides */}
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">

          {/* Right Side: Image with Border-Cover Hover (Now on the right) */}
          <div className="relative w-full lg:w-[48%] group cursor-pointer">
            {/* Concept Tag - Moved to match image position (top rightish) */}
            <div className="absolute -top-5 -right-3 z-20 bg-white shadow-lg rounded-xl p-4 flex items-center gap-3 border border-gray-50">
               <span className="text-[#D4A056] text-2xl font-serif">02</span>
               <div className="flex flex-col leading-none">
                  <span className="text-[9px] uppercase tracking-[2px] text-gray-400 font-bold">Concept</span>
                  <span className="text-[13px] uppercase tracking-[1px] text-[#1c2b39] font-bold">Fine</span>
               </div>
            </div>

            {/* Image Border Box */}
            <div className="bg-white rounded-[35px] relative w-full h-[280px] md:h-[330px] shadow-lg">
              <div className="absolute inset-1.5 md:inset-2 group-hover:inset-0 rounded-[30px] group-hover:rounded-[35px] overflow-hidden transition-all duration-500">
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#D4A056]/0 group-hover:bg-[#D4A056]/10 transition-all duration-500 z-10"></div>

                <img 
                  src={resImage} 
                  alt="Fine Dining" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Left Side: Content */}
          <div className="w-full lg:w-[48%]">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-[#F3EEE3] rounded-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A056" strokeWidth="2">
                   <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                   <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                   <line x1="6" y1="1" x2="6" y2="4"></line>
                   <line x1="10" y1="1" x2="10" y2="4"></line>
                   <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <span className="text-[#D4A056] text-[12px] md:text-[13px] font-bold tracking-[3px] uppercase">
                A Culinary Experience Like No Other
              </span>
            </div>

            <h2 className="text-4xl md:text-[56px] font-serif text-[#1c2b39] font-light mb-5 leading-tight">
              Fine Dining <br /> Restaurants
            </h2>

            <div className="h-[2px] w-16 bg-[#D4A056] mb-8"></div>

            <p className="text-[#444] leading-[1.8] text-[16.5px] mb-10 font-normal">
              At Summit Twin Tower, dining transcends the ordinary. Curated to delight 
              connoisseurs of taste, our fine dining restaurants present an exquisite 
              blend of global cuisines and local flavors in refined, architecturally 
              stunning spaces.
            </p>

            {/* Key Highlights with Dot Hover BG */}
            <div className="space-y-3">
              <h4 className="text-[#1c2b39] text-[11px] font-bold uppercase tracking-[2px] mb-4 opacity-70">Key Highlights</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
                {[
                  "Global cuisines & local flavors in refined spaces",
                  "Chef-led culinary experiences & gourmet meals",
                  "Ambient interiors with impeccable service",
                  "Panoramic views of the city skyline",
                  "Ideal for business lunches & elegant dinners"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group/item cursor-default">
                    {/* Bullet with BG hover effect */}
                    <div className="relative flex-shrink-0 mt-1.5 w-5 h-5 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-transparent group-hover/item:bg-[#D4A056] transition-all duration-300"></div>
                      <div className="relative w-1.5 h-1.5 rounded-full bg-[#D4A056] group-hover/item:bg-white transition-colors duration-300 z-10"></div>
                    </div>
                    <p className="text-[#666] text-[13.5px] leading-snug group-hover/item:text-[#1c2b39] transition-colors">
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

export default Restaurant;
