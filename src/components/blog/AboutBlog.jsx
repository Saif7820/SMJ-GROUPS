import React from "react";

const AboutBlog = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section - Centered and Enlarged */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-[#C5A267] font-normal leading-tight">
            About Suraksha Enclave
          </h2>
          <div className="w-24 h-[2px] bg-[#C5A267] mt-6"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Description + Bottom Shifted Conclusion */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Top Text Content */}
            <div className="space-y-7">
              <p className="text-gray-600 text-base md:text-lg leading-[1.8]">
                The SMJ Group, known for producing high-quality, RERA approved properties, 
                created the upscale residential villa project <span className="font-semibold text-gray-800">Suraksha Enclave</span>.
              </p>

              <p className="text-gray-600 text-base md:text-lg leading-[1.8]">
                This project will bring about a change in lifestyle by providing comfortable 
                living environments in a secure, enclosed environment, which is the bungalow 
                concept in a gated community. This huge and luxurious villa project will provide 
                a lifestyle and privacy not seen earlier in Lucknow, unlike an apartment.
              </p>
            </div>

            {/* Conclusion - Shifted to Bottom */}
            <div className="mt-auto pt-12">
              <p className="text-gray-600 text-base md:text-lg border-l-4 border-[#C5A267] pl-6 py-2 bg-gray-50/50">
                Developers position the project as a premium, safe, and family-friendly residential location, 
                which makes it perfect for investors and end users alike.
              </p>
            </div>
          </div>

          {/* Right Side: Key Aspects Box */}
          <div className="lg:col-span-5 bg-[#FBF9F4] p-8 md:p-10 rounded-[40px] border border-[#C5A267]/10 shadow-sm h-full">
            <h3 className="text-sm font-bold text-gray-800 tracking-[3px] uppercase mb-8 border-b border-[#C5A267]/20 pb-4">
              Key Aspects
            </h3>
            
            <ul className="space-y-5">
              {[
                "Premium villa in Lucknow within a gated community",
                "Prioritize modern living, comfort, and safety",
                "Suitable for families seeking independent homes",
                "High-quality construction",
                "Peaceful yet connected area"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <span className="w-2 h-2 rounded-full bg-[#C5A267] mt-2 group-hover:scale-125 transition-transform shrink-0"></span>
                  <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutBlog;
