import React from 'react';
import teamImg from '../../assets/images/team.png';

const Interested = () => {
  return (
    <section className="relative w-full h-[650px] md:h-[750px] flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${teamImg})`,
        }}
      >
        {/* Dark gradient overlay (Left to Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
      </div>

      <div className="max-w-[1500px] mx-auto w-full px-10 md:px-22 lg:px-34 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block mb-10 border border-[#D4A056] px-8 py-2.5 rounded-full">
            <span className="text-[#D4A056] text-[11px] md:text-[13px] font-light tracking-[4px] uppercase">
              JOIN OUR TEAM
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-white text-[32px] md:text-[52px] font-serif font-light leading-tight uppercase mb-10 tracking-wide">
            INTERESTED <br />
            WORKING WITH US?
          </h2>

          {/* Careers Label with line */}
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-[1px] bg-[#D4A056]"></div>
            <span className="text-[#D4A056] text-[13px] md:text-[15px] font-light tracking-[3px] uppercase">
              CAREERS
            </span>
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-8 mb-16">
            <p className="text-gray-200 text-[16px] md:text-[19px] font-light leading-relaxed max-w-2xl">
              We think that our company's culture makes it a fantastic place to work. We 
              are always searching for talented individuals who have a strong desire to 
              succeed and grow with us.
            </p>
            <p className="text-gray-200 text-[16px] md:text-[19px] font-light leading-relaxed max-w-2xl">
              To view available positions and other career opportunities, click the button 
              below. Join us in building exceptional real estate experiences.
            </p>
          </div>

          {/* Button */}
          <button className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-12 py-4 rounded-md font-medium tracking-[2px] uppercase text-[12px] hover:shadow-2xl transition-all flex items-center gap-3 group">
            VIEW CAREERS 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Interested;
