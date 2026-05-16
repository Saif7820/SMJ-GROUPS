import React from "react";

const SurakshaEnclave = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-28 md:py-36">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#C5A267]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#0E2238]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Section - Centered */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex flex-col items-center group">
            <p className="uppercase tracking-[6px] text-[#C5A267] text-sm md:text-base font-medium">
              Premium Villa Project
            </p>
            <div className="w-16 h-[1px] bg-[#C5A267] mt-2"></div>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl leading-tight font-serif font-normal text-gray-800">
            Suraksha <span className="text-gray-800">Enclave</span>
          </h1>
        </div>

        {/* Content Section - Left Aligned */}
        <div className="max-w-5xl space-y-7 text-left">
          <p className="text-gray-600 text-base md:text-lg leading-[1.8]">
            Choosing a villa in Lucknow has become easy due to improved choices, quality developers, 
            and better infrastructure facilities in the city. Modern buyers can select their property 
            from planned societies, which provide clear pricing policies, connectivity, and quality construction.
          </p>

          <p className="text-gray-800 text-base md:text-lg leading-[1.8] font-semibold">
            This is where SMJ Group's Suraksha Enclave Lucknow is unique.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-[1.8]">
            A premium gated villa project. It has the perfect mix of luxury and privacy along with 
            investment opportunities. It is located on the rapidly developing Raibareli Road and offers 
            you Suraksha Enclave, a chance to meet all your requirements, whether it's the kind of 
            lucrative investment property or your dream house for the family.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-[1.8]">
            The most suitable project for the end users looking for possession of ready-to-move villas 
            or giving maximum value of investment is offering a well-designed 3 BHK villa in Lucknow 
            or a 4 BHK villa in Lucknow with modern amenities and security.
          </p>

        </div>

        {/* CTA Section - Centered */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-4 py-2.5 md:px-10 md:py-4 rounded-md font-bold tracking-[2px] uppercase text-[8px] md:text-xs hover:opacity-90 transition-all shadow-lg flex items-center gap-3 mx-auto group">
            Plan a Site Visit Now to Get a Firsthand Look at Premium Living
          </button>
        </div>

      </div>
    </section>
  );
};

export default SurakshaEnclave;
