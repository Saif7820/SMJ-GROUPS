import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import blogImg from '../../assets/images/blog.png';

const BlogHero = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Image scale: starts slightly zoomed in, zooms out on scroll
  const scale = useTransform(smoothProgress, [0, 0.4], [1.15, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [1, 0.8]);

  // Text parallax
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
            src={blogImg}
            alt="Suraksha Enclave Lucknow"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>

        {/* Content */}
       <motion.div
  style={{ y: textY }}
  className="absolute inset-0 flex flex-col items-start justify-end text-left text-white px-6 md:px-20 lg:px-32 z-10 pb-32 md:pb-36 pointer-events-none"
>
  {/* Luxury Tag */}
  <div className="backdrop-blur-md bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-5">
    <p className="text-[#E0B15A] text-[10px] md:text-[12px] tracking-[0.4em] uppercase font-semibold">
      Luxury Living in Lucknow
    </p>
  </div>

  {/* Main Heading */}
  <h1 className="text-[42px] md:text-[76px] lg:text-[100px] font-serif tracking-[0.03em] leading-tight max-w-[1200px]">
    Suraksha Enclave Lucknow
  </h1>
</motion.div>
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
    </div>
  );
};

export default BlogHero;