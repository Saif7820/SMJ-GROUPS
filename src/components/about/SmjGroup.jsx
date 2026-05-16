import React from 'react';

const SmjGroup = () => {
  return (
    <section className="bg-white py-20 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          {/* WHO WE ARE with lines */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#B99630]/70"></div>
            <p className="text-[#B99630] text-[12px] md:text-[13px] tracking-[0.25em] uppercase font-bold">
              WHO WE ARE
            </p>
            <div className="w-12 h-[1px] bg-[#B99630]/70"></div>
          </div>

          <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-serif font-normal text-[#1A1A1A] mb-6">
            SMJ Group
          </h2>
          <div className="flex justify-center">
            <div className="w-2 h-2 rounded-full bg-[#B99630]/80"></div>
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="max-w-6xl mx-auto space-y-8 text-gray-500 text-[16px] lg:text-[17px] leading-[1.8] text-left font-sans font-normal">
          <p>
            SMJ Group is a diversified real estate group comprising multiple landmark projects, developed 
            with an all-in-one, multidimensional approach to urban growth. Headquartered in Lucknow, 
            the Group operates across residential, commercial, and integrated township developments, 
            creating a comprehensive real estate ecosystem. Driven by an optimistic and future-focused 
            vision, SMJ Group emphasizes self-sustainable development models that integrate smart 
            planning, green infrastructure, and long-term value creation.
          </p>

          <p>
            Beyond development, SMJ Group remains deeply committed to Corporate Social Responsibility, 
            ensuring that growth is inclusive, responsible, and aligned with environmental and social well-being. 
            Sustainability, ethical practices, and community impact form the foundation of every initiative 
            undertaken by the Group. Established in Lucknow with strong regional roots, SMJ Group 
            carries a clear vision for global presence—aiming to scale its philosophy, standards, 
            and development expertise beyond borders. By combining innovation, quality execution, 
            and an end-user centric approach, SMJ Group continues to shape modern urban environments 
            while building trust, credibility, and long-term relationships.
          </p>
        </div>

        {/* Quote Section */}
        <div className="max-w-6xl mx-auto mt-16 p-8 md:py-12 md:px-16 bg-[#FAF9F6] rounded-2xl border border-[#EBE4D5] text-center">
          <p className="text-[16px] md:text-[18px] text-gray-500 font-sans leading-relaxed italic">
            "By combining innovation, quality execution, and an end-user centric approach, we 
            continue to shape modern urban environments while building trust, credibility, 
            and long-term relationships."
          </p>
        </div>

      </div>
    </section>
  );
};

export default SmjGroup;
