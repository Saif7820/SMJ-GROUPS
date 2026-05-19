import React from 'react';
import one from '../../assets/images/one.png';
import two from '../../assets/images/two.png';
import three from '../../assets/images/three.png';
import four from '../../assets/images/four.png';

const Founded = () => {
  const features = [
    { img: one, title: 'MODERN ARCHITECTURE' },
    { img: two, title: 'ECO FRIENDLY' },
    { img: three, title: 'BEST VALUE' },
    { img: four, title: 'HAPPY CLIENTS' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT SIDE - CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
          {features.map((item, index) => (
            <div
              key={index}
              className="exp-card flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#C19B4F]/30 hover:shadow-xl transition-all duration-300 group h-full"
            >
              {/* ICON */}
              <div className="w-20 h-20 mb-6 p-4 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TITLE */}
              <p className="text-gray-900 text-sm font-bold uppercase tracking-widest">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="flex flex-col gap-6 lg:gap-8 order-1 lg:order-2">

          {/* HEADING SECTION */}
          <div className="flex flex-col gap-4 lg:gap-5">
            
            {/* SUB HEADING */}
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-[#B99630]"></div>
              <span className="text-[#B99630] font-bold text-xs lg:text-sm tracking-widest uppercase">
                FOUNDED IN 2006
              </span>
            </div>

            {/* MAIN HEADING */}
            <h3 className="text-[#1A1A1A] text-xl md:text-2xl lg:text-[32px] font-serif leading-tight">
              More than 20+ years of experience, our company is among pioneers in creative craftsmanship and luxury living.
            </h3>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-base lg:text-[17px] leading-relaxed font-sans text-justify">
            The SMJ Group, headquartered in Lucknow, has rapidly emerged as one of the most trusted names 
            in North India's real estate market, with notable achievements across both residential and 
            commercial segments. Its strong and consistent performance in recent years reflects a 
            steadfast commitment to construction quality, timely project delivery, and customer-centric values. 
            Renowned for delivering landmark developments that shape the urban landscape, SMJ Group 
            has built a legacy of trust among homebuyers and investors alike.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Founded;