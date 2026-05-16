import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Images 31 to 48 import
import img31 from '../../assets/images/31.png';
import img32 from '../../assets/images/32.png';
import img33 from '../../assets/images/33.png';
import img34 from '../../assets/images/34.png';
import img35 from '../../assets/images/35.png';
import img36 from '../../assets/images/36.png';
import img37 from '../../assets/images/37.png';
import img38 from '../../assets/images/38.png';
import img39 from '../../assets/images/39.png';
import img40 from '../../assets/images/40.png';
import img41 from '../../assets/images/41.png';
import img42 from '../../assets/images/42.png';
import img43 from '../../assets/images/43.png';
import img44 from '../../assets/images/44.png';
import img45 from '../../assets/images/45.png';
import img46 from '../../assets/images/46.png';
import img47 from '../../assets/images/47.png';
import img48 from '../../assets/images/48.png';

const galleryImages = [
  img31, img32, img33, img34, img35, img36,
  img37, img38, img39, img40, img41, img42,
  img43, img44, img45, img46, img47, img48,
];

const SurakshaGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setPhotoIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setPhotoIndex((prev) => (prev + galleryImages.length - 1) % galleryImages.length);
  };

  // Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === 'ArrowRight') {
          nextImage();
        }

        if (e.key === 'ArrowLeft') {
          prevImage();
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
  }, [lightboxOpen]);

  return (
    <>
      <section className="bg-white py-12 md:py-24 overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-28">

          {/* Heading Section */}
          <div className="text-center mb-10 md:mb-12 flex flex-col items-center">

            <h2 className="relative inline-block text-2xl md:text-4xl tracking-[6px] md:tracking-[8px] uppercase font-serif text-[#C5A267] pb-4">
              Gallery

              {/* Golden Underline */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[30%] h-[0.5px] bg-[#C5A267]"></span>
            </h2>

          </div>

          {/* Slider Container */}
          <div className="relative group/suraksha-gallery px-1 md:px-0">

            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              speed={1200}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: '.gallery-next',
                prevEl: '.gallery-prev',
              }}
              breakpoints={{
                540: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 25 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="mySwiper w-full"
            >
              {galleryImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="overflow-hidden cursor-pointer rounded-sm"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 31}`}
                      className="w-full h-[220px] sm:h-[240px] md:h-[265px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Prev Button */}
            <button className="gallery-prev absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center bg-white shadow-md rounded-full border border-gray-100 transition-all duration-300 cursor-pointer opacity-0 pointer-events-none group-hover/suraksha-gallery:opacity-100 group-hover/suraksha-gallery:pointer-events-auto max-sm:hidden">
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#C5A267"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button className="gallery-next absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center bg-white shadow-md rounded-full border border-gray-100 transition-all duration-300 cursor-pointer opacity-0 pointer-events-none group-hover/suraksha-gallery:opacity-100 group-hover/suraksha-gallery:pointer-events-auto max-sm:hidden">
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#C5A267"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4">

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[160] text-white hover:text-gray-300 transition-colors"
          >
            <svg xmlns="http://w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 z-[160] text-white text-lg font-medium tracking-wide">
            {photoIndex + 1} / {galleryImages.length}
          </div>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-[160] w-12 h-12 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/80 transition-all border border-white/20"
          >
            <svg xmlns="http://w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={galleryImages[photoIndex]}
            alt={`Gallery full ${photoIndex + 31}`}
            className="max-h-[70vh] md:max-h-[75vh] max-w-[90vw] md:max-w-[80vw] object-contain transition-opacity duration-300"
          />

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-[160] w-12 h-12 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/80 transition-all border border-white/20"
          >
            <svg xmlns="http://w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>
      )}
    </>
  );
};

export default SurakshaGallery;