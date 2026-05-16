import React, { useState } from 'react';
import { FiPhone, FiClock } from 'react-icons/fi';

const locationsData = {
  smj: {
    tag: "HEAD OFFICE",
    name: "SMJ GROUP",
    address: "C-3-0001, Palm Spring Villa, Sushant Golf City, Lucknow - 226030",
    phone: "+91 97216 63366",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.8650978911728!2d80.99707319839476!3d26.784869000000004!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be50069b867e1%3A0x8b65a3bf008601ea!2sPalm%20spring%20Villa!5e0!3m2!1sen!2sus!4v1778224490742!5m2!1sen!2sus",
    nearby: [
      { place: "SGPGI", dist: "5 min" },
      { place: "Medanta Hospital", dist: "15 min" },
      { place: "Outer Ring Road", dist: "3 min" },
      { place: "Lulu Mall", dist: "15 min" },
      { place: "C.C.S Airport", dist: "20 min" },
      { place: "The Millennium Schools", dist: "8 min" }
    ]
  },

  golf: {
    tag: "SITE ADDRESS",
    name: "GOLF RIDGE TOWER",
    address: "Golf Ridge Tower, Pocket 5, Golf City, Sector B, Ansal API, Lucknow, Uttar Pradesh 226030",
    phone: "+91 89297 79929",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.1168869155877!2d81.01361037526655!3d26.772543776730988!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be5b6cf6334ef%3A0xcd9d0b3ddc5743d0!2sGolf%20Ridge%20Tower!5e0!3m2!1sen!2sus!4v1778224549576!5m2!1sen!2sus",
    nearby: [
      { place: "International stadium", dist: "15 min" },
      { place: "Medanta Hospital", dist: "5 min" },
      { place: "Dial 112 Office", dist: "10 min" },
      { place: "Lulu Mall", dist: "5 min" },
      { place: "Phoenix Plassio", dist: "10 min" },
      { place: "IT City", dist: "15 min" }
    ]
  },

  summit: {
    tag: "SITE ADDRESS",
    name: "SUMMIT TWIN TOWER",
    address: "Block 8 International Trade Park, ITP-2, Sushant Golf City, Lucknow",
    phone: "+91 89297 79929",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14246.493165181608!2d80.97459498715823!3d26.788275499999997!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be584520e0a3f%3A0x84584911999301a8!2sSushant%20Golf%20City%20Lucknow!5e0!3m2!1sen!2sus!4v1778224664866!5m2!1sen!2sus",
    nearby: [
      { place: "Sushant Golf City", dist: "0.3 km" },
      { place: "Lucknow Airport", dist: "16 km" },
      { place: "Hazratganj", dist: "14 km" },
      { place: "Gomti Nagar", dist: "9 km" }
    ]
  },

  suraksha: {
    tag: "SMJ VILLA",
    name: "SURAKSHA ENCLAVE",
    address: "Near SGPGI, Raebareli Road, Lucknow, Uttar Pradesh 226301",
    phone: "+91 89297 79929",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.0593337024325!2d80.9720815!3d26.7105514!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb003362b26f%3A0xc3f1d75a52a41ac3!2sSuraksha%20Enclave%20Villa!5e0!3m2!1sen!2sin!4v1778224828884!5m2!1sen!2sin",
    nearby: [
      { place: "SGPGI", dist: "5 min" },
      { place: "Medanta Hospital", dist: "15 min" },
      { place: "Outer Ring Road", dist: "3 min" },
      { place: "Lulu Mall", dist: "15 min" },
      { place: "C.C.S Airport", dist: "20 min" },
      { place: "The Millennium Schools", dist: "8 min" }
    ]
  }
};

const OfficeSection = () => {
  const [active, setActive] = useState('smj');
  const current = locationsData[active];

  return (
    <section className="max-w-[1500px] mx-auto px-8 md:px-20 lg:px-32 py-12">

      {/* Headings */}
      <div className="text-center mb-12">
        <p className="text-[11px] font-bold text-[#B08D57] tracking-[0.3em] uppercase mb-3">
          Visit Us
        </p>

        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 font-normal">
          Our Offices
        </h1>

        <p className="text-gray-900 text-[16px] font-light mt-3 tracking-wide">
          Experience our premium locations and professional service.
        </p>
      </div>

      {/* Tab Navigation */}
           {/* Tab Navigation - Fixed Underline width for Mobile */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 border-b border-gray-100 mb-10 pb-4 md:pb-0">
        {Object.keys(locationsData).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className="w-full md:w-auto flex flex-col items-center group"
          >
            <span className={`pb-2 md:pb-4 text-[13px] tracking-[2px] transition-all duration-300 font-medium uppercase inline-block relative ${
              active === key
                ? 'text-[#B08D57]'
                : 'text-gray-400 hover:text-gray-600'
            }`}>
              {locationsData[key].name}
              
              {/* Custom Underline: Sirf text ki width lega */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                active === key ? 'bg-[#B08D57]' : 'bg-transparent'
              }`} />
            </span>
          </button>
        ))}
      </div>


      {/* Layout Container */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">

        {/* Map Container */}
        <div className="flex-[2.2] w-full border border-black rounded-[35px] overflow-hidden shadow-sm min-h-[520px]">
          <iframe
            src={current.map}
            className="w-full h-full min-h-[520px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>

        {/* Info Card */}
        <div className="flex-[0.8] w-full p-8 border border-black rounded-[35px] flex flex-col justify-between bg-white shadow-sm min-h-[520px]">
          <div>

            <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
              {current.tag}
            </span>

            <h2 className="text-2xl font-serif text-gray-800 mt-2 mb-3 font-normal uppercase leading-tight">
              {current.name}
            </h2>

            <p className="text-gray-500 text-[13px] font-light leading-relaxed mb-5">
              {current.address}
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3 text-[13px] text-gray-700">
                <FiPhone className="text-[#B08D57]" />
                <span>{current.phone}</span>
              </div>

              <div className="flex items-center gap-3 text-[13px] text-gray-700">
                <FiClock className="text-[#B08D57]" />
                <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-[10px] font-bold text-gray-400 tracking-widest mb-3 uppercase">
                Nearby
              </h4>

              <div className="space-y-1.5">
                {current.nearby.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-[13px] font-light"
                  >
                    <span className="text-gray-600">{item.place}</span>
                    <span className="text-[#B08D57] font-semibold">
                      {item.dist}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white py-3.5 rounded-lg font-bold tracking-[2px] uppercase text-[11px] hover:shadow-lg transition-all flex items-center justify-center gap-2 group mt-6">
            Get Directions
            
          </button>

        </div>
      </div>
    </section>
  );
};

export default OfficeSection;