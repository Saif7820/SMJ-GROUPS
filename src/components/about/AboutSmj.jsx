import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import about1 from '../../assets/images/about1.png';

const AboutSmj = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Image scale: starts slightly zoomed in, zooms out on scroll
  const scale = useTransform(smoothProgress, [0, 0.4], [1.15, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [1, 0.8]);

  // Text parallax: moves up slightly as user scrolls
  const textY = useTransform(smoothProgress, [0, 0.4], ['0%', '-15%']);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">

      {/* Sticky Image Container */}
      <div className="sticky top-0 h-full w-full overflow-hidden">

        <motion.div
          style={{ scale, opacity }}
          className="relative w-full h-full origin-center"
        >
          {/* Background Image */}
          <img
            src={about1}
            alt="About SMJ"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Solid dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 mx-auto pointer-events-none"
        >
          {/* OUR STORY with lines */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-[1px] bg-[#B99630]/70"></div>
            <p className="text-[#B99630] text-[12px] md:text-[13px] tracking-[0.25em] uppercase font-bold">
              OUR STORY
            </p>
            <div className="w-12 h-[1px] bg-[#B99630]/70"></div>
          </div>

          <h1 className="text-6xl md:text-[80px] lg:text-[100px] font-serif font-normal mb-8 leading-none">
            About SMJ
          </h1>

          <p className="max-w-[700px] text-[16px] md:text-[18px] lg:text-[19px] text-gray-200 leading-[1.7] font-sans font-normal">
            Building a legacy of trust, excellence, and innovation since 2006. We
            are committed to transforming Lucknow's skyline with world-class real
            estate developments.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-[#B99630]/70 text-[10px] tracking-[0.3em] uppercase mb-3 font-semibold">SCROLL</span>
          <div className="w-[24px] h-[36px] border border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-[4px] h-[6px] bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSmj;
