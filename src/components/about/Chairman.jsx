import React from 'react';
import about2 from '../../assets/images/about2.png';

const Chairman = () => {
  return (
    <section className="bg-white py-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-32">
        
        {/* TOP HEADINGS */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-10 bg-[#C19B4F]/30"></div>
            <span className="text-[#C19B4F] text-[11px] tracking-[0.5em] uppercase font-bold">Leadership</span>
            <div className="h-[1px] w-10 bg-[#C19B4F]/30"></div>
          </div>
          <h2 className="text-[36px] md:text-[56px] font-serif text-[#1A1A1A] leading-tight font-normal">
            Visionary Leadership
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="w-2 h-2 rounded-full bg-[#C19B4F]"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          
          {/* LEFT SECTION: Image */}
          <div className="w-full md:w-[34%] relative flex justify-center md:justify-start md:mt-32 md:-ml-5">
            
            {/* IMAGE BOX */}
            <div className="relative w-full max-w-[378px] aspect-[5/6.7]">
              
              {/* GOLD BORDER */}
              <div className="absolute top-4 left-4 w-[102%] h-[102%] border-[1px] border-[#C19B4F]/40 rounded-[16px] z-0"></div>
              
              {/* IMAGE */}
              <div className="relative z-10 w-full h-full rounded-[16px] overflow-hidden group">
                <img
                  src={about2}
                  alt="Mr. Janardan Agarwal"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-[0.8] group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SECTION: Text Content */}
          <div className="w-full md:w-[52%] md:ml-auto md:-mr-16 pt-8">
            
            {/* Executive Line & Tag */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-24 bg-[#C19B4F]"></div>
              <span className="text-[#C19B4F] text-[11px] tracking-[0.4em] uppercase font-bold">Executive</span>
            </div>

            {/* Name - Big & Golden */}
            <h3 className="text-[30px] md:text-[40px] lg:text-[46px] font-serif text-[#C19B4F] mb-3 uppercase tracking-tight font-normal leading-[1.1] whitespace-nowrap">
              Mr. Janardan Agarwal
            </h3>
            
            {/* Title */}
            <p className="text-gray-500 text-[11px] md:text-[13px] tracking-[0.3em] uppercase font-bold mb-8">
              Chairman & Managing Director
            </p>
            
            {/* GOLDEN UNDERLINE */}
            <div className="w-16 h-[1px] bg-[#C19B4F] mb-8"></div>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-500 text-[15px] lg:text-[16px] leading-[1.8] font-normal text-left max-w-[850px] lg:pr-10">
              <p>
                My journey has been shaped by Entrepreneurship, Vision, and an 
                Uncompromising pursuit of excellence. I began my Journey as a 
                Businessman in the Pharmaceutical and diversified Family business. In 2005, 
                driven by a desire to create a lasting impact, I entered the real estate 
                sector with a clear ambition to redefine how Lucknow builds, lives, and grows. 
                Driven by a deeper purpose, to bring to Lucknow the quality, planning, and 
                lifestyle standards that were once limited to Tier-1 cities.
              </p>
              
              <p>
                I have focused on creating value-driven commercial and residential 
                developments that combine thoughtful design, execution excellence, and 
                timely delivery. Every project has been guided by the belief that real 
                estate must go beyond construction—it must enhance quality of living.
              </p>

              <p>
                Today, I take pride in seeing this vision come to life through landmark 
                projects that have nurtured the city's real estate landscape. Under my 
                leadership, the company stands as a symbol of trust, credibility, and 
                excellence. More than building structures, my commitment has been to 
                shape progress, bringing world-class real estate experiences to Lucknow 
                and contributing meaningfully to the city's evolving aspirations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Chairman;
