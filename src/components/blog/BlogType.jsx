import React from "react";

const VillaTypes = () => {
  const villa3BHK = [
    "Spacious dining and lounge areas",
    "Three AC rooms",
    "Modern kitchen plans",
    "Individual garage area",
    "Ideal for medium-sized families",
  ];

  const villa4BHK = [
    "Greater built-up space",
    "4 luxurious bedrooms with connected bathrooms",
    "Luxurious layouts and interiors",
    "Ideal for large families",
    "Increased value and appreciation of investments",
  ];

  const comparisonData = [
    { feature: "Ideal For", v3: "Medium Families", v4: "Large Families" },
    { feature: "Space", v3: "Spacious", v4: "Extra Spacious" },
    { feature: "Investment Value", v3: "High", v4: "Very High" },
    { feature: "Budget", v3: "Affordable Luxury", v4: "Premium Luxury" },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#C5A267] font-normal leading-tight">
            Villa Configurations
          </h2>
          <div className="w-24 h-[2px] bg-[#C5A267] mt-6 mx-auto"></div>
        </div>

        {/* 1. Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* 3 BHK Card */}
          <div className="bg-[#FBF9F4] p-8 md:p-10 rounded-[40px] border border-[#C5A267]/10">
            <h3 className="text-2xl font-serif text-gray-800 mb-6 border-b border-[#C5A267]/20 pb-4">
              3 BHK <span className="text-gray-800">Villa</span>
            </h3>
            <ul className="space-y-4">
              {villa3BHK.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A267] mt-2 shrink-0"></span>
                  <p className="text-gray-600 text-[15px]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 BHK Card */}
          <div className="bg-[#FBF9F4] p-8 md:p-10 rounded-[40px] border border-[#C5A267]/10">
            <h3 className="text-2xl font-serif text-gray-800 mb-6 border-b border-[#C5A267]/20 pb-4">
              4 BHK <span className="text-gray-800">Villa</span>
            </h3>
            <ul className="space-y-4">
              {villa4BHK.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A267] mt-2 shrink-0"></span>
                  <p className="text-gray-600 text-[15px]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 2. Comparison Table Section */}
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl shadow-gray-50 overflow-hidden">
          <div className="bg-[#F8F5EF] py-6 px-8 border-b border-[#C5A267]/10">
            <h3 className="text-xl font-serif text-gray-800 text-center uppercase tracking-widest">
              Comparison Table
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white">
                  <th className="py-6 px-8 text-sm font-bold text-gray-400 uppercase tracking-widest">Feature</th>
                  <th className="py-6 px-8 text-sm font-bold text-[#C5A267] uppercase tracking-widest">3 BHK Villa</th>
                  <th className="py-6 px-8 text-sm font-bold text-gray-800 uppercase tracking-widest">4 BHK Villa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-5 px-8 font-medium text-gray-800">{row.feature}</td>
                    <td className="py-5 px-8 text-gray-600">{row.v3}</td>
                    <td className="py-5 px-8 text-gray-600 font-medium">{row.v4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Check Availability CTA */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-4 py-2.5 md:px-16 md:py-4 rounded-md font-bold tracking-[2px] uppercase text-[8px] md:text-xs hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3 mx-auto group">
            Check Availability Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default VillaTypes;
