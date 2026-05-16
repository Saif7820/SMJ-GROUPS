import React from "react";
import { FiMapPin, FiNavigation, FiZap } from "react-icons/fi";

const LocationAdvantages = () => {
  const sections = [
    {
      title: "Connectivity",
      icon: <FiNavigation />,
      points: [
        "Easily accessible from the big cities",
        "Well-connected network of roads",
        "Ease of reach to business hubs",
      ],
    },
    {
      title: "Nearby Essentials",
      icon: <FiMapPin />,
      points: [
        "Educational institutions with a good reputation",
        "Hospitals and health-care centers",
        "Marts for daily requirements",
      ],
    },
    {
      title: "Future Growth",
      icon: <FiZap />,
      points: [
        "Future projects for development",
        "Increased demand for properties",
        "Good prospects for appreciation",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Heading - Black & Serif */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black font-normal leading-tight uppercase tracking-tight flex flex-col items-center">
            Location Advantages
            <span className="text-[#C5A267] text-4xl md:text-5xl mt-2">Raibareli Road</span>
            <div className="w-16 h-[1.5px] bg-[#C5A267] mt-4"></div>
          </h2>
          <p className="mt-8 text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            One of the top choices for acquiring a villa in Lucknow is Suraksha Enclave, as it is perfectly located on Raibareli Road.
          </p>
        </div>

        {/* 3-Column Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-[30px] border border-gray-100 bg-[#FDFCF9] hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-white text-[#C5A267] flex items-center justify-center text-xl mb-6 shadow-sm border border-gray-50 group-hover:bg-[#C5A267] group-hover:text-white transition-colors">
                {section.icon}
              </div>
              
              <h3 className="text-xl font-serif text-black mb-6 uppercase tracking-wider border-b border-gray-100 pb-4">
                {section.title}
              </h3>
              
              <ul className="space-y-4">
                {section.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <span className="text-[#C5A267] mt-1.5 text-xs">◆</span>
                    <p className="text-gray-600 text-base leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Text & CTA */}
        <div className="mt-20 text-center space-y-6">
          <p className="text-gray-800 font-medium text-lg">
            This project is a great choice if you are looking for property on Raibareli Road in Lucknow.
          </p>
          
          <button className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-4 py-2.5 md:px-12 md:py-4 rounded-md font-bold tracking-[2px] uppercase text-[8px] md:text-xs hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3 mx-auto group">
             Explore Location Benefits Today
          </button>
        </div>

      </div>
    </section>
  );
};

export default LocationAdvantages;
