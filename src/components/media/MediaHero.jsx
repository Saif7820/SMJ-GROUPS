import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import mediaImg from '../../assets/images/media.png';

const MediaHero = () => {
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
            src={mediaImg}
            alt="Media Center"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10 md:-mt-24 pointer-events-none"
        >
          {/* Tag Line */}
          <p className="text-[#B8860B] text-[10px] md:text-[12px] tracking-[0.5em] uppercase font-bold mb-6">
            Updates &amp; Highlights
          </p>

          {/* Main Heading */}
          <h1 className="text-[40px] md:text-[64px] lg:text-[86px] font-serif tracking-[0.05em] mb-4 leading-tight">
            Media Center
          </h1>

          {/* Description */}
          <div className="max-w-[800px] mx-auto">
            <p className="text-[16px] md:text-[20px] leading-relaxed font-medium opacity-90">
              Stay updated with our latest events, press releases, and video highlights from SMJ Group.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        
      </div>
    </div>
  );
};

export default MediaHero;
