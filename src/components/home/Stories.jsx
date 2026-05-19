import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import { FaQuoteRight } from 'react-icons/fa';

// CSS Imports
import 'swiper/css';
import 'swiper/css/free-mode';

const Stories = () => {
  const testimonials = [
    {
      id: 1,
      name: "Satisfied Homebuyer",
      role: "RESIDENT",
      initial: "S",
      text: "SMJ Group truly delivers what they promise. From project planning to possession, everything was transparent and well-managed.",
      stars: 5
    },
    {
      id: 2,
      name: "Real Estate Investor",
      role: "INVESTOR",
      initial: "R",
      text: "A reliable name for long-term investment. I invested with SMJ Group looking for appreciation and peace of mind, and they exceeded expectations.",
      stars: 5
    },
    {
      id: 3,
      name: "Happy Client",
      role: "HOMEOWNER",
      initial: "H",
      text: "Professional team with a customer-first approach. The SMJ Group team was supportive at every step. They patiently answered all queries.",
      stars: 5
    },
    {
      id: 4,
      name: "Villa Owner",
      role: "RESIDENT",
      initial: "V",
      text: "Quality construction and thoughtful planning. The project layout, amenities, and overall design reflect quality and long-term vision.",
      stars: 5
    }
  ];

  return (
    <section className="w-full bg-[#111111] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-5 md:px-36">

        {/* Header Section */}
        <div className="flex justify-between items-end mb-10 md:mb-16 border-b border-[#2A2A2A] pb-10">

          <div>
            <p className="text-[#C49B45] text-[10px] md:text-sm tracking-[0.2em] uppercase mb-3 md:mb-4 font-semibold font-sans">
              Testimonials
            </p>

            <h2 className="text-3xl md:text-6xl font-rossanova font-bold text-white leading-tight">
              Stories of <br />
              <span className="font-playfair italic font-light text-[#C49B45]">
                Trust & Excellence
              </span>
            </h2>
          </div>

          <div className="hidden md:flex w-15 h-15 border border-gray-800 rounded-full items-center justify-center text-gray-600">
            <FaQuoteRight className="text-xl" />
          </div>

        </div>

        {/* Swiper Slider */}
        <div className="md:-ml-24 -mx-5 md:mx-0">

          <Swiper
            modules={[FreeMode, Mousewheel]}
            spaceBetween={16}
            slidesPerView={1.1}
            grabCursor={true}
            freeMode={{
              enabled: true,
              sticky: false,
              momentumRatio: 0.5,
              momentumVelocityRatio: 0.5
            }}
            mousewheel={{
              forceToAxis: true,
            }}
            breakpoints={{
              480: { slidesPerView: 1.3, spaceBetween: 16 },
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 2.2, spaceBetween: 25 },
              1280: { slidesPerView: 2.8, spaceBetween: 25 },
            }}
            className="mySwiper !overflow-visible px-5 md:px-0"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="pb-4">

                <div
                  className="bg-[#1A1A1A] p-6 md:p-10 rounded-2xl border-l-[4px] border-[#C49B45] flex flex-col justify-between min-h-[300px] md:h-[370px] hover:bg-[#222222] transition-all duration-500 group select-none shadow-2xl"
                >
                  <div>

                    <div className="flex gap-1 mb-5 md:mb-8">
                      {[...Array(item.stars)].map((_, i) => (
                        <span key={i} className="text-[#C49B45] text-[10px]">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-200 text-[0.85rem] md:text-[1.2rem] leading-[1.65] md:leading-[1.8] italic mb-5 md:mb-8 font-light font-playfair">
                      "{item.text}"
                    </p>

                    <div className="w-full h-[1px] bg-gray-800/50 mb-5 md:mb-8"></div>

                  </div>

                  <div className="flex items-center gap-5 mt-auto">

                    <div className="w-14 h-14 rounded-full bg-[#252525] flex items-center justify-center text-[#C49B45] text-lg font-bold border border-gray-800 group-hover:border-[#C49B45] transition-all duration-500 font-sans shrink-0">
                      {item.initial}
                    </div>

                    <div>
                      <h4 className="text-white font-bold text-sm md:text-base uppercase tracking-[0.1em] font-rossanova">
                        {item.name}
                      </h4>

                      <p className="text-gray-500 text-[10px] tracking-[0.2em] mt-1 font-semibold font-sans">
                        {item.role}
                      </p>
                    </div>

                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default Stories;