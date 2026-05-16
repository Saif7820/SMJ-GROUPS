import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import video5 from '../../assets/videos/video5.mp4';

const SummitHero = () => {
  const { scrollYProgress } = useScroll();

  // Smooth scroll animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Video zoom effect
  const scale = useTransform(smoothProgress, [0, 0.5], [1.2, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [1, 0.55]);

  // Text movement
  const textY = useTransform(smoothProgress, [0, 0.4], ['0%', '-25%']);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">

      {/* Sticky Background Video */}
      <div className="sticky top-0 h-full w-full overflow-hidden">

        <motion.div
          style={{ scale, opacity }}
          className="relative w-full h-full origin-center"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video5} type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:pl-36 md:pr-24 pointer-events-none"
        >

          {/* Location Tag */}
          <div className="flex items-center w-fit gap-2 mb-6 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg">
            <div className="w-2 h-2 rounded-full bg-[#D4A056] animate-pulse"></div>

            <span className="text-white text-[11px] md:text-[13px] font-medium tracking-[3px] uppercase opacity-95">
              Sushant Golf City, Lucknow
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white text-[48px] md:text-[115px] font-serif font-light leading-tight uppercase mb-4 tracking-tight">
            Summit Twin Tower
          </h1>

          {/* Gold Line */}
          <div className="h-[4px] w-24 bg-[#D4A056] mb-10"></div>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >

          {/* Scroll Text */}
          <span className="text-white/80 text-[10px] tracking-[0.42em] uppercase mb-[2px] font-light">
            Scroll
          </span>

          {/* Slim Arrow */}
          <div className="text-white text-[14px] font-extralight leading-none">
            ↓
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default SummitHero;