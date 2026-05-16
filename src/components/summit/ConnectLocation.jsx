import React from 'react';

const ConnectLocation = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-32">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-[#C5A267] text-[11px] md:text-[13px] font-bold uppercase tracking-[6px] mb-3">
            CONNECT
          </h3>
          <h2 className="text-4xl md:text-[52px] font-serif text-[#1c2b39] font-light tracking-wide">
            LOCATION
          </h2>
          <div className="w-20 h-[1px] bg-[#D4A056] mx-auto mt-6"></div>
        </div>

        {/* Map Container */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] relative border border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.3689396187556!2d80.99911667526739!3d26.796378776716686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be51793dc463f%3A0x45c4d1d234b8c1a4!2sSummit%20Twin%20Tower!5e0!3m2!1sen!2sin!4v1778075082825!5m2!1sen!2sin" 
            className="absolute top-0 left-0 w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ConnectLocation;
