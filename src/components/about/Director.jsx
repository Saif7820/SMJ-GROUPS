import React from 'react';
import about3 from '../../assets/images/about3.png';

const Director = () => {
  return (
    <section className="bg-white py-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-32">
        
        <div className="flex flex-col md:flex-row items-center md:items-start">
          
          {/* LEFT SECTION: TEXT */}
          <div className="w-full md:w-[52%] md:mr-auto md:-ml-5 pt-8 order-2 md:order-1">
            
            {/* Executive Line & Tag */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-24 bg-[#C19B4F]"></div>
              <span className="text-[#C19B4F] text-[11px] tracking-[0.4em] uppercase font-bold">Executive</span>
            </div>

            {/* Name */}
            <h3 className="text-[30px] md:text-[40px] lg:text-[46px] font-serif text-[#C19B4F] mb-3 uppercase tracking-tight font-normal leading-[1.1] whitespace-nowrap">
              Mr. Sparsh Agarwal
            </h3>
            
            {/* Title */}
            <p className="text-gray-500 text-[11px] md:text-[13px] tracking-[0.3em] uppercase font-bold mb-8">
              Managing Director
            </p>
            
            {/* GOLDEN UNDERLINE */}
            <div className="w-16 h-[1px] bg-[#C19B4F] mb-8"></div>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-500 text-[15px] lg:text-[16px] leading-[1.8] font-normal text-left max-w-[850px] lg:pr-10">
              <p>
                I joined our family business in 2019 with a clear vision—to honour our 
                legacy. After completing my Master's in Business Studies from MIT School 
                of Business. My Vision was to transform Lucknow's real estate by 
                delivering thoughtfully planned, future-ready developments and to set new 
                standards of quality, sustainability, and end-user satisfaction.
              </p>
              
              <p>
                We delivered landmark Project that raised Lucknow's real estate standards 
                to metro-level expectations by bringing integrated townships, self-sustaining 
                ecosystems, and thoughtfully designed commercial and residential projects.
              </p>

              <p>
                Being rooted in Lucknow while building for its future. Every project is 
                executed with a focus on timely delivery, long-term value, and customer 
                satisfaction. As the city grows, I continue to deliver Projects And 
                Developments that contribute meaningfully to the city of Lucknow.
              </p>
            </div>
          </div>

          {/* RIGHT SECTION: Image */}
          <div className="w-full md:w-[34%] relative flex justify-center md:justify-end md:mt-32 md:-mr-5 order-1 md:order-2">
            
            {/* IMAGE BOX */}
            <div className="relative w-full max-w-[378px] aspect-[5/6.7]">
              
              {/* GOLD BORDER */}
              <div className="absolute top-4 left-4 w-[102%] h-[102%] border-[1px] border-[#C19B4F]/40 rounded-[16px] z-0"></div>
              
              {/* IMAGE */}
              <div className="relative z-10 w-full h-full rounded-[16px] overflow-hidden group">
                <img
                  src={about3}
                  alt="Mr. Sparsh Agarwal"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-[0.8] group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Director;
