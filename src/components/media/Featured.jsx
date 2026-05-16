import React from 'react';
import mediaVideo from '../../assets/videos/media.mp4';

const Featured = () => {
  return (
    <section className="bg-white py-24 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-32">
        
        {/* Top Headings */}
        <div className="text-center mb-10">
          <p className="text-[#B8860B] text-[10px] md:text-[12px] tracking-[0.5em] uppercase font-bold mb-4">
            Watch
          </p>
          <h2 className="text-[32px] md:text-[50px] font-serif text-[#1A1A1A] leading-tight font-normal">
            Featured Highlights
          </h2>
        </div>

        {/* Video Container - Centered */}
        <div className="flex justify-center">
          {/* Max-width ko perfect balance ke liye 1000px kiya hai */}
          <div className="w-full max-w-[1000px] aspect-[16/9] relative group">
            
            {/* The "Video" Frame */}
            <div className="w-full h-full rounded-[14px] md:rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] bg-gray-100 relative z-10">
              <video 
                className="w-full h-full object-cover border-none outline-none"
                src={mediaVideo}
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Featured;
