import React from 'react';
import { motion } from 'framer-motion';
import comingImg from '../../assets/images/coming.png';

const ComingHero = () => {
  return (
    <div className="relative h-screen w-full bg-[#051e18] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={comingImg}
          alt="Coming Soon"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Dark Premium Emerald/Black Overlay matching screen layout */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Section - Perfectly matching your reference image structure */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10 pointer-events-none select-none">
        
        {/* LUCKNOW Heading */}
        <h1 className="text-[38px] md:text-[56px] lg:text-[68px] font-sans font-light tracking-[2px] uppercase mb-3 leading-tight text-white/95">
          Lucknow
        </h1>
        
        {/* WILL NEVER BE THE SAME Subheading */}
        <h2 className="text-[18px] md:text-[28px] lg:text-[36px] font-sans font-light tracking-[3px] uppercase mb-16 text-white/90">
          Will Never Be The Same
        </h2>

        {/* STAY TUNED Label */}
        <div className="mt-1">
          <p className="text-[17px] md:text-[10px] lg:text-[24px] font-sans font-light tracking-[5px] uppercase text-white/90">
            Stay Tuned
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          {/* Scroll Text */}
          <span className="text-white/80 text-[10px] tracking-[0.42em] uppercase mb-[1px] font-light">
            Scroll
          </span>
          {/* Slim Arrow */}
          <div className="text-white text-[12px] font-extralight leading-none">
            ↓
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingHero;
