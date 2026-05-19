import React from "react";
import house from "../../assets/images/house.png";

const CraftingLegacy = () => {
  return (
    <section className="w-full bg-[#f7f5f2] py-24">
      <div className="max-w-[1700px] mx-auto px-6 md:px-36">
        {/* Top Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.1em] text-[#B99630] uppercase font-sans">
            Our Philosophy
          </p>

          <h1 className="text-4xl md:text-[60px] font-medium text-[#1A1A1A] mt-4 leading-none font-rossanova">
            Crafting Legacy
          </h1>

          <h2 className="text-4xl md:text-[60px] font-medium text-[#B99630] mt-2 leading-none font-rossanova">
            Through Excellence
          </h2>

          <p className="text-[#596371] mt-6 text-lg font-normal font-sans">
            Where visionary design meets timeless craftsmanship
          </p>
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Image */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src={house}
              alt="House"
              className="rounded-sm w-full h-[400px] lg:h-[500px] object-cover"
            />
            {/* OUR VISION Overlay Box */}
            <div className="absolute -bottom-5 right-4 lg:-bottom-5 lg:right-6 bg-white px-6 py-2 shadow-sm border border-gray-100 flex items-center justify-center">
              <span className="text-[#B99630] text-[11px] font-bold tracking-[0.2em] uppercase font-sans">
                OUR VISION
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl lg:text-[46px] text-[#1A1A1A] font-normal mb-8 flex items-center gap-6">
              <span className="w-8 lg:w-10 h-[1px] bg-[#B99630] inline-block"></span>
              Our Vision
            </h3>

            <p className="italic text-[#1A1A1A] text-2xl lg:text-[28px] leading-[1.6] border-l-[1px] border-[#B99630] pl-6 lg:pl-8 mb-8 font-serif">
              "To be India's most trusted real estate brand, creating exceptional
              spaces that inspire pride, elevate lifestyles, and shape thriving
              communities."
            </p>

            <p className="text-gray-500 leading-relaxed text-base lg:text-[17px] font-normal font-sans pr-0 lg:pr-6">
              We envision a future where every SMJ Group property reflects innovation, sustainable design, and lasting value — delivering not just homes but environments that stand as testaments to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingLegacy;