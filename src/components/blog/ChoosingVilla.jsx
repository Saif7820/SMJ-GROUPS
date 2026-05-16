import React from "react";
import logo from "../../assets/images/logo.png"; // Logo import

const ChoosingVilla = () => {
  const guidePoints = [
    "Builder reputation and experience",
    "Future development prospects of the area",
    "Infrastructure and facilities",
    "Documentation of the project (RERA approved)",
    "Quality of construction",
  ];

  const strengths = [
    "Verified property listings",
    "Professional real estate consultancy",
    "Affordable pricing and processes",
    "Total support from site visit to booking",
    "Excellent history of satisfied customers",
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section 1: How to Choose */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#C5A267] font-normal leading-tight uppercase">
            How to Choose the Right Villa?
          </h2>
          <div className="w-24 h-[1.5px] bg-[#C5A267] mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Considering purchasing a <span className="text-black font-medium">villa in Lucknow</span> is an important decision. Furthermore, the following are some key points to consider:
            </p>
            <ul className="space-y-4">
              {guidePoints.map((item, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A267] shrink-0"></span>
                  <p className="text-gray-700 text-base group-hover:text-black transition-colors">{item}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-gray-800 font-medium border-l-4 border-[#C5A267] pl-6 py-2 italic">
              The Suraksha Enclave checks off all the above and more, making it one of the best villas available in Lucknow.
            </p>
          </div>

          {/* Right Side: Logo Box */}
          <div className="lg:col-span-5 flex items-center justify-center bg-[#FDFCF9] rounded-[40px] border border-gray-100 p-12 min-h-[300px]">
             <img 
               src={logo} 
               alt="SMJ Logo" 
               className="w-48 md:w-56 object-contain opacity-80" 
             />
          </div>
        </div>

        {/* Section 2: Why Choose Us */}
        <div className="border-t border-gray-100 pt-16">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-[#C5A267] font-normal leading-tight uppercase">
              Why Choose Us?
            </h2>
            <div className="w-24 h-[1.5px] bg-[#C5A267] mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 bg-[#FDFCF9] p-8 md:p-10 rounded-[40px] border border-[#C5A267]/10 flex items-center justify-center">
              <p className="text-gray-600 text-lg md:text-xl text-center italic leading-relaxed">
                "We help in determining the best investment for you, not only in finding a property."
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#FDFCF9] p-8 md:p-12 rounded-[40px] border border-[#C5A267]/10">
              <h3 className="text-sm font-bold text-black tracking-[4px] uppercase mb-8 border-b border-[#C5A267]/20 pb-4">Our Strengths:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {strengths.map((item, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <span className="text-[#C5A267] font-bold">✓</span>
                    <p className="text-gray-700 text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <p className="text-gray-800 text-lg mb-10 max-w-2xl mx-auto">
            If you are looking for an investment property or planning to buy your dream house, <span className="font-bold">you are in good hands.</span>
          </p>
          
          <button className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-4 py-2.5 md:px-12 md:py-4 rounded-md font-bold tracking-[2px] uppercase text-[8px] md:text-xs hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3 mx-auto group">
            Call Now to Speak with an Expert
          </button>
        </div>

      </div>
    </section>
  );
};

export default ChoosingVilla;
