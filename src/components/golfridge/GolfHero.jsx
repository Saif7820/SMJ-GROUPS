import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import projectVideo from '../../assets/videos/po1.mp4';

const GolfHero = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Video Animation
  const scale = useTransform(smoothProgress, [0, 0.4], [1.15, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [1, 0.8]);

  // Text Animation
  const textY = useTransform(smoothProgress, [0, 0.4], ['0%', '-15%']);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">

      {/* Sticky Video Container */}
      <div className="sticky top-0 h-full w-full overflow-hidden">

        {/* Video */}
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
            <source src={projectVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-36 pointer-events-none"
        >

          {/* Location Tag */}
          <div className="flex items-center w-fit gap-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-sm">

            {/* Location Icon */}
            <div className="text-[#D4A056]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>

            <span className="text-white text-[11px] md:text-[13px] font-medium tracking-[2.5px] uppercase">
              Sushant Golf City, Lucknow
            </span>
          </div>

          {/* Title */}
          <h1 className="text-white text-[45px] md:text-[115px] font-['Playfair_Display'] font-normal leading-[1.1] uppercase mb-7 tracking-tight">
            Golf Ridge Tower
          </h1>

          {/* Gold Line */}
          <div className="h-[4px] w-24 bg-[#D4A056] mb-12"></div>

        </motion.div>

        {/* Scroll Indicator */}
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

export default GolfHero;