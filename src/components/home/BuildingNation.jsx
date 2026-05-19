import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuildingNation = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <p className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.4] tracking-wide">
              Crafting exceptional living spaces through superior engineering and an unwavering commitment to excellence—rooted in the core principles of customer-centricity, sustainability, and holistic well-being.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            
            {/* TITLE */}
            <h3 className="text-[#C19B4F] text-3xl font-serif uppercase tracking-widest">
              Building Nation
            </h3>

            {/* PARAGRAPH */}
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              With a legacy spanning nearly two decades, this innovation-driven and future-focused real estate group has been a transformative force in redefining Lucknow's skyline. It has established a strong footprint across residential, commercial, and retail segments. Anchored in cutting-edge technology and forward-thinking design, the group has earned distinction by setting industry benchmarks in construction quality, engineering excellence, and in-house research capabilities.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => navigate('/about')}
              className="relative group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#B99630] to-[#d4af8a] text-white text-sm tracking-widest font-semibold uppercase rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#B99630]/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Read More Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af8a] to-[#B99630] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BuildingNation;