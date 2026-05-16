import React from "react";

const ConnectLocation = () => {
  return (
    <div className="max-w-[1700px] mx-auto bg-white py-20 px-6 md:px-36">

      {/* Small Heading */}
      <p className="text-center text-[12px] md:text-[14px] tracking-[4px] uppercase text-[#C8A96A] mb-3">
        CONNECT
      </p>

      {/* Main Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-[38px] md:text-[50px] font-serif text-[#1A1A1A] tracking-wide font-normal uppercase">
          LOCATION
        </h2>
        <div className="w-20 h-[1.5px] bg-[#D4A056] mx-auto mt-3"></div>
      </div>

      {/* Map Wrapper */}
      <div className="w-full max-w-[92%] sm:max-w-[88%] md:max-w-[82%] lg:max-w-[1200px] mx-auto rounded-[30px] overflow-hidden border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)] relative">

        {/* Google Map */}
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.1167356227497!2d81.0161619!3d26.7725486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be5b6cf6334ef%3A0xcd9d0b3ddc5743d0!2sGolf%20Ridge%20Tower!5e0!3m2!1sen!2sin!4v1778911669997!5m2!1sen!2sin"
  width="100%"
  height="560"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </div>
    </div>
  );
};

export default ConnectLocation;