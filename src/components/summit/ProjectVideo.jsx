// src/pages/ProjectVideo.jsx

import React from "react";

const ProjectVideo = () => {
  return (
    <section className="w-full bg-white py-14 md:py-20 px-4 flex flex-col items-center">
      
      {/* Heading Outside */}
      <h1 className="text-[28px] md:text-[36px] tracking-[5px] md:tracking-[6px] uppercase font-serif font-thin text-[#C5A267] mb-7 text-center leading-none">
        Project Video
      </h1>

      {/* Video Container */}
      <div className="w-full max-w-[1025px] bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
        
        <div className="relative w-full pb-[50%] md:pb-[58%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/5LvwmnIqRc4?start=185"
            title="Project Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ProjectVideo;