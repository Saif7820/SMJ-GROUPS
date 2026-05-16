import React from "react";

const Location = () => {
  return (
    <div className="w-full bg-white pb-20 px-4 sm:px-6 md:px-36">

      {/* Header Block Section */}
      <div className="text-center mb-12 flex flex-col items-center">
        
        {/* Top Small Subheading */}
        <p className="text-[14px] md:text-[12px] tracking-[6px] text-[#C8A96A] mb-3 uppercase font-medium font-sans">
          CONNECT
        </p>

        {/* Main Heading */}
        <h2 className="text-[42px] md:text-[56px] font-serif text-[#1A1A1A] tracking-wide font-normal uppercase leading-tight">
          LOCATION
        </h2>

        {/* Standard Clean Slim Underline Divider (No Diamond) */}
        <div className="w-20 h-[1px] bg-[#D4A056] mx-auto mt-5"></div>

      </div>

      {/* Map Wrapper */}
      <div className="max-w-[1700px] mx-auto rounded-[20px] overflow-hidden border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.12)] relative">
        
        {/* UPDATED: Integrated your newly provided official map code into React format */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.1167356227497!2d81.0161619!3d26.7725486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be5b6cf6334ef%3A0xcd9d0b3ddc5743d0!2sGolf%20Ridge%20Tower!5e0!3m2!1sen!2sin!4v1778925660339!5m2!1sen!2sin"
          width="100%"
          height="560"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </div>
  );
};

export default Location;
