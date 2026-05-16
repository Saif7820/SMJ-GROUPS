import React from "react";
import fourinone from "../../assets/images/fourinone.png";

const OurMission = () => {
  return (
    <section className="w-full bg-[#fcfcfc] pt-20 pb-8 lg:pt-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Section Heading with Line */}
          <div className="flex items-center gap-6 mb-8">
            <div className="h-[1px] w-10 lg:w-12 bg-[#B99630]"></div>
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-normal font-serif text-[#1A1A1A]">
              Our Mission
            </h2>
          </div>

          {/* Main Description */}
          <p className="font-serif text-[26px] lg:text-[32px] text-[#1A1A1A] leading-[1.5] mb-12 max-w-[550px] font-normal">
            Design, develop, and deliver premium residential and commercial
            projects with unmatched quality, integrity, and customer care.
          </p>

          {/* Points with Bullet Dots */}
          <ul className="space-y-6">
            {[
              "Building thoughtfully planned sustainable spaces",
              "Timely delivery with transparency and trust",
              "Creating long-term value for investors"
            ].map((text, idx) => (
              <li key={idx} className="flex items-center gap-5 group">
                {/* Image style bullet: Circle with a dot inside */}
                <div className="relative flex items-center justify-center w-[18px] h-[18px] border border-[#B99630] rounded-full">
                  <div className="w-1.5 h-1.5 bg-[#B99630] rounded-full"></div>
                </div>
                <span className="text-gray-500 text-[16px] font-normal font-sans">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 mb-8 lg:mb-0">
          <div className="bg-white p-3 lg:p-4 border border-gray-100 shadow-sm rounded-md relative">
            <img
              src={fourinone}
              alt="Our Mission Grid"
              className="w-full h-auto object-cover rounded-sm grayscale-[10%] hover:grayscale-0 transition-all duration-700"
            />
            
            {/* OUR MISSION Overlay Box */}
            <div className="absolute -bottom-4 left-6 lg:-bottom-5 lg:left-8 bg-white px-6 lg:px-8 py-2 lg:py-[10px] shadow-sm border border-gray-100 flex items-center justify-center z-10">
              <span className="text-[#B99630] text-[11px] font-bold tracking-[0.2em] uppercase font-sans">
                OUR MISSION
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurMission;
