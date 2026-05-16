import React from 'react';

const ProjectVideo = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1150px] mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl tracking-[8px] uppercase font-serif text-[#C5A267]">
            PROJECT VIDEO
          </h2>
          <div className="w-16 h-[3px] bg-[#D4A056] mx-auto mt-5"></div>
        </div>

        {/* Video Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-shadow duration-300 aspect-video border border-gray-200">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/vnlMnowWzXc?rel=0&showinfo=0&autohide=1" 
            title="Suraksha Enclave Project Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
        
      </div>
    </section>
  );
};

export default ProjectVideo;
