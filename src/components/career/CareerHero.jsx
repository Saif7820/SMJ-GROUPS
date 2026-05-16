import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import careerVideo from '../../assets/videos/video6.mp4';

const CareerHero = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Video scale: starts slightly zoomed in, zooms out on scroll
  const scale = useTransform(smoothProgress, [0, 0.4], [1.15, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [1, 0.8]);

  // Text parallax: moves up slightly as user scrolls
  const textY = useTransform(smoothProgress, [0, 0.4], ['0%', '-15%']);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">

      {/* Sticky Video Container */}
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
            <source src={careerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>

        {/* Content Container - Bottom Aligned */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-36 pointer-events-none"
        >
          {/* Tagline Pill */}
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 px-5 py-1.5 rounded-full shadow-sm">
              <span className="text-[#D4A056] text-[10px] md:text-[12px] font-bold tracking-[3px] uppercase">
                Join Our Team
              </span>
            </div>
          </div>

          {/* Hero Title */}
          <h1 className="text-white text-[36px] md:text-[72px] font-serif font-normal leading-[1.2] uppercase mb-8 tracking-tight">
            Work With Us
          </h1>
        </motion.div>

       
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">

        {/* Line Track */}
        <div className="relative w-[1px] h-[45px] overflow-hidden bg-white/10 mb-3">

          {/* Falling Gold Line */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "160%" }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              ease: "easeIn",
            }}
            className="absolute top-0 left-0 w-full h-[22px] bg-[#D4A056]"
          />

        </div>

        {/* Scroll Text */}
        <span className="text-white/80 text-[12px] tracking-[0.42em] uppercase mt-1 mb-[2px] font-light">
          Scroll
        </span>

      </div>
    </div>
  );
};

export default CareerHero;
