import React from 'react';

const GolfTower = () => {
  return (
    <section className="bg-white py-20 lg:py-32 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="w-full lg:w-[45%]">
            {/* Top Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#B99630]/70"></div>
              <p className="text-[#B99630] text-[12px] md:text-[13px] tracking-[0.25em] uppercase font-bold">
                VISIONARY DEVELOPMENT
              </p>
            </div>

            {/* Main Title */}
            <h1 className="text-[52px] lg:text-[72px] font-serif text-[#1A1A1A] leading-[1.1] mb-6 font-normal">
              Golf Ridge<br />Tower
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-[18px] lg:text-[22px] font-serif italic tracking-wide font-light">
              'Luxury Apartments'
            </p>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[50%] lg:pt-10">
            <p className="text-gray-500 leading-[1.7] text-[19px] lg:text-[20px] font-sans font-normal text-justify max-w-[550px] lg:ml-12">
              Golf Ridge Tower is a luxury residential project located in 
              Sushant Golf City, Lucknow. Sushant Golf City is a 
              premium neighbourhood known for its well-developed 
              infrastructure. Golf Ridge Tower offers spacious ultra-
              luxury 3 BHK + Servent Apartment Flats in Sushant Golf 
              City. The apartments come with premium finishes and 
              modern amenities. Security and safety of residents is the 
              top priority at Golf Ridge Tower. The project has multi-tier 
              security with trained guards and CCTV cameras. It has 
              High End Entrance Double Height Lobby.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GolfTower;
