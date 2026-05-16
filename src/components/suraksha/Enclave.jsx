import React from 'react';

const Enclave = () => {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 font-sans overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-5 sm:px-6 md:px-12 lg:px-24 xl:px-36">
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-14 lg:gap-24">

          {/* Left Section */}
          <div className="w-full lg:w-[40%]">

            {/* Top Label */}
            <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
              <div className="w-12 md:w-16 h-[1px] bg-[#D4A056]"></div>

              <p className="text-[#D4A056] text-[10px] sm:text-[11px] tracking-[3px] md:tracking-[4px] uppercase font-bold">
                Visionary Development
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-[2.7rem] sm:text-5xl md:text-[4rem] font-serif text-[#1c2b39] leading-[1.08] mb-6 md:mb-8 font-normal">
              Suraksha <br /> Enclave
            </h1>

            {/* Tagline */}
            <p className="text-[#a1a1a1] text-lg md:text-[1.5rem] font-serif italic tracking-[1px] font-light">
              "Integrated Plotted Township"
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[50%] pt-0 lg:pt-4">

            <p className="text-gray-600 leading-[1.9] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[19px] font-light text-justify max-w-full lg:max-w-[540px] lg:ml-12">
              SMJ Group presents a comprehensive land-and-build offering,
              thoughtfully crafted to deliver a seamless and elevated path to
              home ownership—anchored within Suraksha Enclave, an integrated
              plotted township duly approved by LDA & RERA. Strategically
              located on Raebareli Road, Lucknow, the development spans 25+
              acres and features world-class amenities, along with a turnkey
              proposal for European-style ultra-luxury villas. This curated
              solution brings together the assurance of plot allotment and
              professionally managed construction, supported by robust
              infrastructure—delivering a holistic and hassle-free ownership
              experience.
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-100 my-8 lg:ml-12 max-w-full lg:max-w-[540px]"></div>

            {/* RERA Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-6 sm:gap-10 w-full lg:ml-12 max-w-full lg:max-w-[540px]">

              {/* RERA Info */}
              <div className="flex flex-col">
                <span className="text-[#B99630] text-[10px] font-bold uppercase tracking-[2px] mb-2">
                  Rera Registered
                </span>

                <span className="text-[#1c2b39] text-lg sm:text-xl md:text-2xl font-serif tracking-[1px] uppercase break-all sm:break-normal">
                  UPRERAPRJ869089
                </span>
              </div>

              {/* Button */}
              <a
                href="https://up-rera.in"
                target="_blank"
                rel="noreferrer"
                className="w-fit border border-gray-200 rounded-full px-6 md:px-8 py-3 flex items-center gap-3 hover:bg-gray-50 transition-all group"
              >
                <span className="text-[#1c2b39] text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase whitespace-nowrap">
                  Rera Website
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#B99630]"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Enclave;