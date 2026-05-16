import React from 'react';

// Import the site plan map image
import sitePlanImg from '../../assets/images/map.png';

const SitePlan = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1700px] mx-auto px-6 md:px-28">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl tracking-[8px] uppercase font-serif text-[#C5A267]">
            SITE PLAN
          </h2>
        </div>

        {/* Site Plan Container */}
        {/* bg-[#faf9f1] gives the light cream/beige background seen in the screenshot */}
        <div className="max-w-[900px] mx-auto bg-[#fdfcf5] p-6 md:p-10 rounded-sm border border-[#f0eee4] shadow-sm">
          <div className="overflow-hidden flex justify-center items-center">
            <img
              src={sitePlanImg}
              alt="Site Plan"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SitePlan;
