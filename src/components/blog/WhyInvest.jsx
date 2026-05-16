import React from "react";
import { FiTrendingUp, FiMapPin, FiShield } from "react-icons/fi";

const WhyInvest = () => {
  const mainBenefits = [
    "Good connectivity to major city hubs",
    "Fast development of infrastructures and urbanization",
    "Ready-to-move villas are in high demand",
    "Increasing interest in independent villas",
    "A good investment property choice",
  ];

  const villaAdvantages = [
    "Increased resale value",
    "Higher returns from renting",
    "Ownership of land",
  ];

  return (
    <section className="bg-[#FDFCF9] py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 font-normal leading-tight">
            Why Invest in Villas on <br className="hidden md:block" />
            <span className="text-[#C5A267]">Raibareli Road?</span>
          </h2>
          <div className="w-24 h-[2px] bg-[#C5A267] mt-6 mx-auto"></div>
        </div>

        {/* Introduction Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Raibareli Road is turning into the go-to spot for buying a <span className="text-gray-800 font-medium text-lg">villa in Lucknow.</span> Furthermore, the city's infrastructure is growing fast, and people want homes here more than ever.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Left: Main Benefits */}
          <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100 h-full">
            <div className="flex items-center gap-3 mb-8">
               <FiTrendingUp className="text-[#C5A267] text-2xl" />
               <h3 className="text-xl font-serif text-gray-800">Main Benefits Include</h3>
            </div>
            <ul className="space-y-5">
              {mainBenefits.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A267] mt-2 shrink-0"></span>
                  <p className="text-gray-600 text-base">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Future Trend & Land Ownership */}
          <div className="space-y-8 h-full flex flex-col">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
              <p className="text-gray-600 leading-relaxed text-lg italic ">
                "Villas may be a smarter long-term investment in 2025-2026 because there is a definite trend toward independent living spaces, with buyers looking for privacy, large homes, and gated security."
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100 flex-grow">
              <h3 className="text-lg font-bold text-gray-800 tracking-[2px] uppercase mb-6">
                Villas, unlike apartments, will offer:
              </h3>
              <ul className="space-y-4">
                {villaAdvantages.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#C5A267] font-medium">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <button className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-4 py-2.5 md:px-12 md:py-4 rounded-md font-bold tracking-[2px] uppercase text-[8px] md:text-xs hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3 mx-auto group">
            Get Your Free Investment Consultation Today!
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyInvest;
