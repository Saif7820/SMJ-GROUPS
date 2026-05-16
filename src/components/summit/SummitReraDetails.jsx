import React from 'react';
import qrImg from '../../assets/images/qr.png';

const SummitReraDetails = () => {
  return (
    <section className="bg-white py-14 md:py-20">
      
      {/* Width thoda aur bada */}
      <div className="max-w-[1140px] mx-auto px-5 md:px-6">
        
        {/* Heading */}
        <div className="text-center mb-9">
          <h2 className="text-3xl md:text-4xl tracking-[8px] uppercase font-serif text-[#C5A267]">
            RERA DETAILS
          </h2>
        </div>

        {/* Main Content Box */}
        <div className="bg-[#fdfcf5] rounded-lg border border-[#d8d2c5] shadow-[0_16px_40px_rgba(0,0,0,0.10)] overflow-hidden">
          
          {/* Top Header */}
          <div className="px-6 md:px-10 py-5 border-b border-[#d8d2c5] bg-[#f4efe1]">
            <h3 className="text-[22px] md:text-[24px] font-semibold text-[#1e1e1e] mb-1">
              Project & Banking Details
            </h3>

            <p className="text-[13px] md:text-[14px] text-gray-500">
              Summit Twin Tower - Official Information
            </p>
          </div>

          {/* Details + QR */}
          <div className="flex flex-col lg:flex-row">

            {/* Left Side */}
            <div className="w-full lg:w-2/3 flex flex-col">

              {/* Row */}
              <div className="flex flex-col sm:flex-row py-3.5 px-6 md:px-10 bg-[#fbf9ef] border-b border-[#d8d2c5] hover:bg-[#f4efe1] transition-colors duration-300">
                <div className="w-full sm:w-1/3 text-gray-500 text-[13px] md:text-[14px] mb-1 sm:mb-0">
                  Project RERA No.
                </div>

                <div className="w-full sm:w-2/3 text-[#1a1a1a] font-semibold text-[14px] md:text-[15px]">
                  UPRERAPRJ962033
                </div>
              </div>

              {/* Row */}
              <div className="flex flex-col sm:flex-row py-3.5 px-6 md:px-10 border-b border-[#d8d2c5] hover:bg-[#f4efe1] transition-colors duration-300">
                <div className="w-full sm:w-1/3 text-gray-500 text-[13px] md:text-[14px] mb-1 sm:mb-0">
                  RERA Website
                </div>

                <a
                  href="https://up-rera.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-2/3 text-[#C5A267] font-semibold text-[14px] md:text-[15px] hover:underline"
                >
                  Visit RERA Website
                </a>
              </div>

              {/* Row */}
              <div className="flex flex-col sm:flex-row py-3.5 px-6 md:px-10 bg-[#fbf9ef] border-b border-[#d8d2c5] hover:bg-[#f4efe1] transition-colors duration-300">
                <div className="w-full sm:w-1/3 text-gray-500 text-[13px] md:text-[14px] mb-1 sm:mb-0">
                  Project Launch Date
                </div>

                <div className="w-full sm:w-2/3 text-[#1a1a1a] font-semibold text-[14px] md:text-[15px]">
                  02-09-2021
                </div>
              </div>

              {/* Row */}
              <div className="flex flex-col sm:flex-row py-3.5 px-6 md:px-10 border-b border-[#d8d2c5] hover:bg-[#f4efe1] transition-colors duration-300">
                <div className="w-full sm:w-1/3 text-gray-500 text-[13px] md:text-[14px] mb-1 sm:mb-0">
                  A/C Name
                </div>

                <div className="w-full sm:w-2/3 text-[#1a1a1a] font-semibold text-[14px] md:text-[15px]">
                  H CONS COLLECTION A/C SUMMIT TWIN TOWER
                </div>
              </div>

              {/* Row */}
              <div className="flex flex-col sm:flex-row py-3.5 px-6 md:px-10 bg-[#fbf9ef] border-b border-[#d8d2c5] hover:bg-[#f4efe1] transition-colors duration-300">
                <div className="w-full sm:w-1/3 text-gray-500 text-[13px] md:text-[14px] mb-1 sm:mb-0">
                  A/C No
                </div>

                <div className="w-full sm:w-2/3 text-[#1a1a1a] font-semibold text-[14px] md:text-[15px]">
                  50200069028428
                </div>
              </div>

              {/* Row */}
              <div className="flex flex-col sm:flex-row py-3.5 px-6 md:px-10 border-b border-[#d8d2c5] hover:bg-[#f4efe1] transition-colors duration-300">
                <div className="w-full sm:w-1/3 text-gray-500 text-[13px] md:text-[14px] mb-1 sm:mb-0">
                  Bank
                </div>

                <div className="w-full sm:w-2/3 text-[#1a1a1a] font-semibold text-[14px] md:text-[15px]">
                  HDFC
                </div>
              </div>

              {/* Row */}
              <div className="flex flex-col sm:flex-row py-3.5 px-6 md:px-10 bg-[#fbf9ef] border-b border-[#d8d2c5] hover:bg-[#f4efe1] transition-colors duration-300">
                <div className="w-full sm:w-1/3 text-gray-500 text-[13px] md:text-[14px] mb-1 sm:mb-0">
                  Branch
                </div>

                <div className="w-full sm:w-2/3 text-[#1a1a1a] font-semibold text-[14px] md:text-[15px]">
                  NADAN MAHAL ROAD, LUCKNOW
                </div>
              </div>

              {/* Row */}
              <div className="flex flex-col sm:flex-row py-3.5 px-6 md:px-10 hover:bg-[#f4efe1] transition-colors duration-300">
                <div className="w-full sm:w-1/3 text-gray-500 text-[13px] md:text-[14px] mb-1 sm:mb-0">
                  IFSC Code
                </div>

                <div className="w-full sm:w-2/3 text-[#1a1a1a] font-semibold text-[14px] md:text-[15px]">
                  HDFC0003950
                </div>
              </div>

            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-8 lg:p-0 border-t lg:border-t-0 lg:border-l border-[#d8d2c5] bg-white">

              <div className="bg-white p-5 rounded-xl border border-[#d8d2c5] shadow-sm flex flex-col items-center">
                <img
                  src={qrImg}
                  alt="RERA QR Code"
                  className="w-40 h-40 object-contain mb-4"
                />

                <p className="text-gray-500 text-[13px] md:text-[14px]">
                  Scan for more details
                </p>
              </div>

            </div>
          </div>

          {/* Bottom Note */}
          <div className="px-6 md:px-10 py-4 bg-[#faf5e6] border-t border-[#d8d2c5] flex items-start gap-3">

            <div className="mt-0.5 text-[#D4A056]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div>
              <p className="text-[#D4A056] font-bold text-[13px] md:text-[14px] mb-0.5">
                Important Note
              </p>

              <p className="text-[#D4A056] text-[13px] md:text-[14px]">
                NOTE: That Money from customer must be deposited in Collection A/c only.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SummitReraDetails;