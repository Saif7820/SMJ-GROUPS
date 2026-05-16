import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import video1 from '../../assets/videos/video1.mp4';

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // "Makkhan" jaisa smooth scroll track karne ke liye
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 25,
    restDelta: 0.001
  });

  // SCALE: 1.15 se 1.0 (Exact 1.0 par ruk jayega taaki screen poori cover rahe)
  // Isse edges par kabhi black border nahi dikhega
  const scale = useTransform(smoothProgress, [0, 0.5], [1.15, 1]); 
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0.9]);

  return (
    // h-screen rakha hai taaki viewport ke bahar na jaye aur black space na banne
    <div className="relative h-screen w-full bg-white overflow-hidden">
      
      {/* Sticky Container: Ye browser window ko 100% cover karega */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <motion.div 
          style={{ scale, opacity }} 
          className="relative w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover" // Ensure video covers full area
          >
            <source src={video1} type="video/mp4" />
          </video>
          
          {/* Subtle Overlay (Optional, for depth) */}
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>

        {/* Scroll Indicator - Sirf yahi rakha hai guide karne ke liye */}
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-[24px] h-[36px] border border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-[4px] h-[6px] bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
