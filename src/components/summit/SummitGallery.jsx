import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Images Import
import img80 from '../../assets/images/80.png';
import img81 from '../../assets/images/81.png';
import img82 from '../../assets/images/82.png';
import img83 from '../../assets/images/83.png';
import img84 from '../../assets/images/84.png';
import img85 from '../../assets/images/85.png';
import img86 from '../../assets/images/86.png';
import img87 from '../../assets/images/87.png';
import img88 from '../../assets/images/88.png';
import img89 from '../../assets/images/89.png';
import img90 from '../../assets/images/90.png';

const galleryImages = [
  img80,
  img81,
  img82,
  img83,
  img84,
  img85,
  img86,
  img87,
  img88,
  img89,
  img90,
];

const SummitGallery = () => {
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
    setPhotoIndex(
      (prev) => (prev + galleryImages.length - 1) % galleryImages.length
    );
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
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[30%] h-[1px] bg-[#C5A267]"></span>
            </h2>

          </div>

          {/* Slider Container */}
          <div className="relative group/gallery px-1 md:px-0">

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
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-[220px] sm:h-[240px] md:h-[265px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Prev Button */}
            <button className="gallery-prev absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center bg-white shadow-md rounded-full border border-gray-100 transition-all duration-300 cursor-pointer opacity-0 pointer-events-none group-hover/gallery:opacity-100 group-hover/gallery:pointer-events-auto max-sm:hidden">
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
            <button className="gallery-next absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center bg-white shadow-md rounded-full border border-gray-100 transition-all duration-300 cursor-pointer opacity-0 pointer-events-none group-hover/gallery:opacity-100 group-hover/gallery:pointer-events-auto max-sm:hidden">
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
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
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
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Full Image */}
          <img
            src={galleryImages[photoIndex]}
            alt={`Gallery full ${photoIndex + 1}`}
            className="max-h-[70vh] md:max-h-[75vh] max-w-[90vw] md:max-w-[80vw] object-contain transition-opacity duration-300"
          />

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-[160] w-12 h-12 flex items-center justify-center bg-black/50 text-white rounded-full hover:bg-black/80 transition-all border border-white/20"
          >
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

        </div>
      )}
    </>
  );
};

export default SummitGallery;