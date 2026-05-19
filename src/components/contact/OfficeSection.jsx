import React, { useState } from "react";
import { FiPhone, FiClock, FiExternalLink } from "react-icons/fi";

const locationsData = {
  smj: {
    tag: "HEAD OFFICE",
    name: "SMJ Group",
    address:
      "C-3-0001, Palm Spring Villa, Sushant Golf City, Lucknow - 226030",
    phone: "+91 97216 63366",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.148232965623!2d80.9914441!3d26.7844894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be5116b0b58c7%3A0x32e97b2dc5c7d06f!2sPalm%20Spring%20Villa!5e0!3m2!1sen!2sin!4v1700000000002",
    direction: "https://maps.google.com/?q=Palm+Spring+Villa+SMJ+Lucknow",
    nearby: [
      { place: "SGPGI", dist: "5 min" },
      { place: "Medanta Hospital", dist: "15 min" },
      { place: "Outer Ring Road", dist: "3 min" },
      { place: "Lulu Mall", dist: "15 min" },
      { place: "C.C.S Airport", dist: "20 min" },
      { place: "The Millennium Schools", dist: "8 min" },
    ],
  },

  golf: {
    tag: "SITE ADDRESS",
    name: "GOLF RIDGE TOWER",
    address:
      "Golf Ridge Tower, Pocket 5, Golf City, Sector B, Ansal API, Lucknow, Uttar Pradesh 226030",
    phone: "+91 89297 79929",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.1168869155877!2d81.01361037526655!3d26.772543776730988!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be5b6cf6334ef%3A0xcd9d0b3ddc5743d0!2sGolf%20Ridge%20Tower!5e0!3m2!1sen!2sus!4v1778224549576!5m2!1sen!2sus",
    direction: "https://maps.google.com/?q=Golf+Ridge+Tower+Lucknow",
    nearby: [
      { place: "International stadium", dist: "15 min" },
      { place: "Medanta Hospital", dist: "5 min" },
      { place: "Dial 112 Office", dist: "10 min" },
      { place: "Lulu Mall", dist: "5 min" },
      { place: "Phoenix Plassio", dist: "10 min" },
      { place: "IT City", dist: "15 min" },
    ],
  },

  summit: {
    tag: "SITE ADDRESS",
    name: "SUMMIT TWIN TOWER",
    address:
      "Block 8 International Trade Park, ITP-2, Sushant Golf City, Lucknow",
    phone: "+91 89297 79929",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14246.493165181608!2d80.97459498715823!3d26.788275499999997!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be584520e0a3f%3A0x84584911999301a8!2sSushant%20Golf%20City%20Lucknow!5e0!3m2!1sen!2sus!4v1778224664866!5m2!1sen!2sus",
    direction: "https://maps.google.com/?q=Summit+Twin+Tower+Lucknow",
    nearby: [
      { place: "Sushant Golf City", dist: "0.3 km" },
      { place: "Lucknow Airport", dist: "16 km" },
      { place: "Hazratganj", dist: "14 km" },
      { place: "Gomti Nagar", dist: "9 km" },
    ],
  },

  suraksha: {
    tag: "SMJ VILLA",
    name: "SURAKSHA ENCLAVE",
    address:
      "Near SGPGI, Raebareli Road, Lucknow, Uttar Pradesh 226301",
    phone: "+91 89297 79929",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.0593337024325!2d80.9720815!3d26.7105514!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb003362b26f%3A0xc3f1d75a52a41ac3!2sSuraksha%20Enclave%20Villa!5e0!3m2!1sen!2sin!4v1778224828884!5m2!1sen!2sin",
    direction: "https://maps.google.com/?q=Suraksha+Enclave+Lucknow",
    nearby: [
      { place: "SGPGI", dist: "5 min" },
      { place: "Medanta Hospital", dist: "15 min" },
      { place: "Outer Ring Road", dist: "3 min" },
      { place: "Lulu Mall", dist: "15 min" },
      { place: "C.C.S Airport", dist: "20 min" },
      { place: "The Millennium Schools", dist: "8 min" },
    ],
  },
};

const OfficeSection = () => {
  const [active, setActive] = useState("smj");
  const current = locationsData[active];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#B99630] text-xs tracking-[0.4em] uppercase mb-4">
            Visit Us
          </p>
          <h2 className="text-5xl font-serif mb-4">Our Offices</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Experience our premium locations and professional service.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {Object.keys(locationsData).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`uppercase text-sm tracking-wider pb-2 border-b-2 transition ${
                active === key
                  ? "border-[#B99630] text-[#B99630]"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              {locationsData[key].name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Map */}
          <div className="lg:col-span-2 h-[420px] lg:h-[550px] rounded-3xl overflow-hidden shadow-xl border">
            <iframe
              src={current.map}
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>

          {/* Info Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border flex flex-col">
            <span className="text-xs tracking-widest text-[#B99630] uppercase mb-3">
              {current.tag}
            </span>

            <h3 className="text-2xl font-serif mb-4">
              {current.name}
            </h3>

            <p className="text-sm text-gray-700 mb-5 leading-relaxed">
              {current.address}
            </p>

            <div className="flex items-center gap-3 mb-3">
              <FiPhone className="text-[#B99630]" />
              <span className="font-medium">{current.phone}</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <FiClock className="text-[#B99630]" />
              <span className="font-medium">
                Mon - Sat: 10:00 AM - 7:00 PM
              </span>
            </div>

            {/* Nearby */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest mb-3">
                Nearby
              </p>

              {current.nearby.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between text-sm mb-1"
                >
                  <span>{item.place}</span>
                  <span className="text-[#B99630] font-semibold">
                    {item.dist}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <a
              href={current.direction}
              target="_blank"
              rel="noreferrer"
              className="mt-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#B99630] to-[#d4af8a] text-white py-3 rounded-xl uppercase text-sm tracking-wider hover:shadow-lg transition"
            >
              Get Directions
              <FiExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;