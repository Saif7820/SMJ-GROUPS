import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// इमेजेस इम्पोर्ट करें
import hero5 from '../../assets/images/hero5.png';
import hero6 from '../../assets/images/Hero6.png';
import hero7 from '../../assets/images/house.png';

const Landmark = () => {
  const navigate = useNavigate();

  // Projects Data
  const projects = [
     {
      id: 0,
      title: "Golf Ridge Tower",
      location: "Residential",
      image: hero5,
      shortName: "Golf Ridge",
      link: "/projects/golf-ridge"
    },
    {
      id: 1,
      title: "Summit Twin Towers",
      location: "Residential",
      image: hero6,
      shortName: "Summit",
      link: "/projects/summit"
    },
    {
      id: 2,
      title: "Suraksha Enclave by SMJ Group",
      location: "Complete Integrated Township-Lucknow",
      image: hero7,
      shortName: "Suraksha",
      link: "/projects/suraksha"
    },
   
  ];

  const [activeTab, setActiveTab] = useState(0);

  // Delay Function
  const handleTabChange = (index) => {
    setTimeout(() => {
      setActiveTab(index);
    }, 350);
  };

  const nextSlide = () => {
    setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % projects.length);
    }, 350);
  };

  const prevSlide = () => {
    setTimeout(() => {
      setActiveTab((prev) => (prev - 1 + projects.length) % projects.length);
    }, 350);
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 md:py-24">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-36">

        <p className="text-center text-[#B99630] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
          Our Projects
        </p>

        <h2 className="text-3xl md:text-[54px] text-center font-rossanova font-normal mb-8 text-white leading-tight">
          Landmark Developments in Lucknow
        </h2>

        <div className="flex flex-col md:flex-row gap-6">

          {/* Left Side Container (Large Active Banner View) */}
          <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col">
            <div className="relative w-full h-[380px] md:h-[400px] lg:h-[545px] overflow-hidden rounded-2xl group shadow-2xl">
              <img
                src={projects[activeTab].image}
                alt={projects[activeTab].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 p-5 md:p-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent w-full">
                <h3 className="text-2xl md:text-4xl font-rossanova font-bold mb-2 md:mb-3 text-white leading-tight">
                  {projects[activeTab].title}
                </h3>

                <p className="text-gray-300 flex items-center gap-2 mb-4 md:mb-6 text-xs md:text-base uppercase tracking-[0.1em] font-sans">
                  <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-4 md:h-4">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {projects[activeTab].location}
                </p>

                <button 
                  onClick={() => navigate(projects[activeTab].link)}
                  className="bg-[#BF9628] text-white px-5 md:px-6 py-2 md:py-2.5 rounded-sm uppercase text-xs font-bold hover:opacity-90 transition-all tracking-[0.1em] flex items-center gap-2 font-sans cursor-pointer"
                >
                  View Project <span>→</span>
                </button>
              </div>
            </div>

            {/* Slide Arrows & Dots Center Control */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-black hover:bg-[#D4A056] hover:border-[#D4A056] transition-all duration-300"
              >
                <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeTab === i ? 'bg-[#D4A056] w-6' : 'bg-gray-600 w-1.5'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-black hover:bg-[#D4A056] hover:border-[#D4A056] transition-all duration-300"
              >
                <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* FIXED RIGHT COLUMN: Gaps reduced and height calculated to perfectly align with the left image boundaries */}
          <div className="w-full md:w-[35%] lg:w-[30%] flex flex-row md:flex-col justify-between gap-3 md:gap-[16px] h-auto lg:h-[545px]">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleTabChange(index)}
                className="flex-1 md:flex-initial flex flex-col gap-1.5 min-w-0"
              >
                {/* Thumbnail Image Box - Height optimized for tight layout spacing */}
                <div
                  className={`relative w-full h-[65px] sm:h-[90px] md:h-[120px] lg:h-[171px] cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-500
                    ${activeTab === index
                      ? 'border-[#D4A056] scale-[1.02] shadow-xl opacity-100'
                      : 'border-transparent opacity-45 hover:opacity-100'
                    }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Desktop Only Inside Text */}
                  <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex-col justify-end items-center text-center p-4">
                    <h4 className="text-sm font-bold mb-1 tracking-[0.1em] text-white font-rossanova truncate w-full">
                      {project.title}
                    </h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-sans truncate w-full">
                      {project.location}
                    </p>
                  </div>
                </div>

                {/* Mobile View Text Labels */}
                <span 
                  className={`block md:hidden text-center text-[10px] uppercase tracking-wider font-sans truncate font-medium transition-colors duration-300 ${
                    activeTab === index ? 'text-[#D4A056]' : 'text-gray-500'
                  }`}
                >
                  {project.shortName}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Landmark;
