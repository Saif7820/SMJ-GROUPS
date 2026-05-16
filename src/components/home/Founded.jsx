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
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Section: Cards Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6 order-2 lg:order-1">
          {features.map((item, index) => (
            <div
              key={index}
              className="exp-card group flex flex-col items-center justify-center text-center p-6 lg:p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-200 cursor-default"
            >
              {/* Icon Wrapper with Shadow and Animation */}
              <div className="w-16 h-16 lg:w-20 lg:h-20 mb-4 lg:mb-5 p-4 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[11px] lg:text-sm font-bold tracking-widest text-gray-900 uppercase leading-tight px-1">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Section: Content */}
        <div className="flex flex-col gap-6 lg:gap-8 py-1 lg:py-2 order-1 lg:order-2">
          
          {/* Top Group: Sub-heading & Main Heading */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* Sub-heading with Gold Line */}
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-10 bg-[#B99630]"></div>
              <span className="text-[#B99630] font-bold text-xs lg:text-sm tracking-widest uppercase">
                FOUNDED IN 2006
              </span>
            </div>

            {/* Main Heading */}
            <h3 className="exp-subtitle text-[#1A1A1A] text-xl md:text-2xl lg:text-[32px] font-serif leading-tight">
              More than 20+ years of experience, our company is among pioneers in creative craftsmanship and luxury living.
            </h3>
          </div>

          {/* Paragraph at the bottom */}
          <p className="exp-desc text-gray-600 text-base lg:text-[17px] leading-relaxed font-sans text-justify">
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
