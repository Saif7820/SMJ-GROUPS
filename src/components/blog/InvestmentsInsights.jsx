import React from "react";
import { FiTrendingUp, FiDollarSign } from "react-icons/fi";

const InvestmentInsights = () => {
  const worthReasons = [
    "Reasonable prices for the villa market",
    "Elevated potential for recognition",
    "Exquisite living at a prime location",
    "Potential ROI (Return on Investment)",
  ];

  const marketTrends = [
    "Growing demand for a villa in Lucknow",
    "Few high-quality gated villas are available",
    "Lucknow's rising land value",
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section - Black Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#C5A267] font-serif font-normal leading-tight uppercase tracking-tight">
            Pricing & Investment Insights
          </h2>
          <div className="w-24 h-[1.5px] bg-[#C5A267] mt-4 mx-auto"></div>
        </div>

        {/* Pricing Highlight - No Blue BG, Premium Bordered Card */}
        <div className="bg-[#FDFCF9] border border-[#C5A267]/20 rounded-[40px] p-8 md:p-12 text-center mb-16 shadow-sm max-w-4xl mx-auto">
          <h3 className="text-gray-400 text-xs tracking-[4px] uppercase font-bold mb-4">Starting Price</h3>
          <p className="text-black text-4xl md:text-6xl font-serif mb-6">₹ 1.20 Cr*</p>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed uppercase tracking-[1px] font-light">
            The Suraksha Enclave Lucknow Villas cost from 1.20 Cr and hence are worth investing in.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Why It's Worth It */}
          <div className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
               <FiDollarSign className="text-[#C5A267] text-xl" />
               <h3 className="text-lg font-serif text-black uppercase tracking-wider">Why It's Worth It</h3>
            </div>
            <ul className="space-y-5">
              {worthReasons.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#C5A267] mt-1.5 text-xs">◆</span>
                  <p className="text-gray-600 text-base">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Market Insight */}
          <div className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
               <FiTrendingUp className="text-[#C5A267] text-xl" />
               <h3 className="text-lg font-serif text-black uppercase tracking-wider">Market Insight (2025-2026)</h3>
            </div>
            <ul className="space-y-5">
              {marketTrends.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#C5A267] mt-1.5 text-xs">◆</span>
                  <p className="text-gray-600 text-base">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Status & Gradient Button */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
             Limited Inventory Available – High Demand Project
          </p>
          
          {/* Gold Button */}
          <div className="flex flex-col items-center group cursor-pointer">
            <button className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-4 py-2.5 md:px-12 md:py-4 rounded-md font-bold tracking-[2px] uppercase text-[8px] md:text-xs hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3">
              Get Latest Price List Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InvestmentInsights;
