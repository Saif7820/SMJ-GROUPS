import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import video4 from '../../assets/videos/video4.mp4';

const SurakhshaHero = () => {
  // Smooth scroll tracking
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Video zoom out effect
  const scale = useTransform(smoothProgress, [0, 0.4], [1.15, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [1, 0.8]);

  // Text parallax
  const textY = useTransform(smoothProgress, [0, 0.4], ["0%", "-15%"]);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">

      {/* Sticky Video */}
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
            <source src={video4} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col justify-end pb-28 px-6 md:px-36 pointer-events-none"
        >

          {/* Location Tag */}
          <div className="flex items-center w-fit gap-2 mb-6 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg">
            <span className="text-white text-[11px] md:text-[12px] font-medium tracking-[3px] uppercase">
              Raebareli Road, Lucknow
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-[45px] md:text-[108px] font-['Playfair_Display'] font-normal leading-[1.05] uppercase mb-7">
            Suraksha Enclave
          </h1>

          {/* Gold Line */}
          <div className="h-[4px] w-25 bg-[#D4A056] mb-12"></div>
        </motion.div>

        {/* New Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
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

export default SurakhshaHero;