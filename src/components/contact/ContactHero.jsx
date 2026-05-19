import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import contactVideo from '../../assets/videos/video7.mp4';

const ContactHero = () => {
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
            <source src={contactVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Bottom Dark Gradient */}
          <div
            className="absolute bottom-0 left-0 w-full h-[50%]"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)' }}
          ></div>
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col justify-end pb-28 px-6 md:px-36 pointer-events-none"
        >
          {/* Get In Touch Badge */}
          <div className="w-fit mb-8 border border-[#B99630] px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="text-[#B99630] text-[10px] md:text-[12px] font-medium tracking-[3px] uppercase">
              Get in Touch
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-[40px] md:text-[80px] font-['Playfair_Display'] font-normal leading-[1] uppercase tracking-wide">
            Contact Us
          </h1>

          {/* Gold Underline */}
        </motion.div>

        {/* Scroll Indicator */}
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

  {/* Scroll Indicator */}
   <span className="text-white/80 text-[12px] tracking-[0.42em] uppercase  mt-1  mb-[2px] font-light">
    Scroll
  </span>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
 

  {/* Text */}
 

  {/* Slim Arrow */}

</div>
</div>
      </div>
    </div>
  );
};

export default ContactHero;
