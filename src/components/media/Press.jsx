import React, { useState, useEffect } from 'react';
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiSearch
} from "react-icons/fi";

// Importing images
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';
import p4 from '../../assets/images/p4.png';
import p5 from '../../assets/images/p5.png';
import p6 from '../../assets/images/p6.png';
import p7 from '../../assets/images/p7.png';

const Press = () => {
  const images = [p1, p2, p3, p4, p5, p6, p7];

  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImg(images[index]);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    document.body.style.overflow = 'auto';
  };

  const nextImg = (e) => {
    if (e) e.stopPropagation();

    const nextIndex = (currentIndex + 1) % images.length;

    setCurrentIndex(nextIndex);
    setSelectedImg(images[nextIndex]);
  };

  const prevImg = (e) => {
    if (e) e.stopPropagation();

    const prevIndex = (currentIndex - 1 + images.length) % images.length;

    setCurrentIndex(prevIndex);
    setSelectedImg(images[prevIndex]);
  };

  // Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImg) {
        if (e.key === 'ArrowRight') {
          nextImg();
        }

        if (e.key === 'ArrowLeft') {
          prevImg();
        }

        if (e.key === 'Escape') {
          closeLightbox();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImg, currentIndex]);

  return (
    <section className="bg-white py-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-20">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#B8860B] text-[10px] md:text-[12px] tracking-[0.5em] uppercase font-bold mb-4">
            Gallery
          </p>

          <h2 className="text-[36px] md:text-[50px] font-serif text-[#1A1A1A] leading-tight font-normal">
            Press Photos
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-[12px] shadow-[0_15px_35px_rgba(0,0,0,0.15)] h-[225px]"
              onClick={() => openLightbox(index)}
            >

              <div className="w-full h-full flex flex-col bg-black">

                {/* Top Black Strip */}
                <div className="w-full h-[34px] bg-black shrink-0"></div>

                {/* Image */}
                <img
                  src={img}
                  alt={`Press ${index + 1}`}
                  className="w-[calc(100%+2px)] -ml-[1px] h-[157px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Bottom Black Strip */}
                <div className="w-full h-[34px] bg-black shrink-0"></div>

              </div>

              {/* Hover Overlay */}
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
  {/* Size reduced from w-10 h-10 to w-8 h-8 for a smaller premium circle */}
  <div className="w-9 h-9 bg-[#B8860B] rounded-full flex items-center justify-center shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
    {/* Icon size reduced to text-[16px] for perfect internal alignment inside the small circle */}
    <FiSearch className="text-white text-[16px]" />
  </div>
</div>

            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          onClick={closeLightbox}
        >

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-[110]"
            onClick={closeLightbox}
          >
            <FiX className="text-[32px]" />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-4 rounded-full z-[110]"
            onClick={prevImg}
          >
            <FiChevronLeft className="text-[32px]" />
          </button>

          <button
            className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-4 rounded-full z-[110]"
            onClick={nextImg}
          >
            <FiChevronRight className="text-[32px]" />
          </button>

          {/* Main Image */}
          <div className="relative max-w-2xl w-full max-h-[60vh] flex items-center justify-center">
            <img
              src={selectedImg}
              alt="Full view"
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Index indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-[110]">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-[#B8860B] scale-150'
                    : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Press;