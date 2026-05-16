import React from 'react';

const BuildingNation = () => {
  return (
    <section className="w-full bg-white py-24 lg:py-36 flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">

        {/* Left Side: Tagline */}
        <div className="w-full lg:w-[52%]">
          <h2 className="font-serif text-[30px] md:text-[36px] lg:text-[42px] font-light text-[#333333] leading-[1.25]">
            Crafting exceptional living spaces through superior engineering and an unwavering commitment to excellence—rooted in the core principles of customer-centricity, sustainability, and holistic well-being.
          </h2>
        </div>

        {/* Right Side: Description and Button */}
        <div className="w-full lg:w-[48%] lg:pl-6">
          {/* Building Nation Title */}
          <h3 className="text-[#B99630] font-serif text-[26px] lg:text-[30px] tracking-wide uppercase mb-6 font-normal">
            Building Nation
          </h3>

          {/* Right Paragraph */}
          <p className="text-gray-500 text-[16px] lg:text-[17px] leading-[1.8] mb-10 font-normal font-sans">
            With a legacy spanning nearly two decades, this innovation-driven
            and future-focused real estate group has been a transformative
            force in redefining Lucknow's skyline. It has established a strong
            footprint across residential, commercial, and retail segments.
            Anchored in cutting-edge technology and forward-thinking design,
            the group has earned distinction by setting industry benchmarks in
            construction quality, engineering excellence, and in-house research
            capabilities.
          </p>

          {/* Button */}
          <button className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-8 py-2.5 rounded-sm flex items-center justify-center gap-4 uppercase text-[12px] lg:text-[13px] font-bold tracking-[0.15em] transition-all duration-500 shadow-sm hover:opacity-90 font-sans w-max">
            Read More Details <span className="text-xl">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default BuildingNation;
