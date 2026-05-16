import logo from "../../assets/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white mt-0 font-sans text-[#444] border-t border-gray-800">

      {/* Top Section - py-12 ko py-[50px] kiya hai (Height badhane ke liye) */}
      <div className="max-w-[1700px] mx-auto px-6 md:px-36 py-[50px] grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

        {/* Logo */}
        <div className="col-span-2 md:col-span-1 flex justify-start items-start">
          <img
            src={logo}
            alt="logo"
            className="h-14 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Residential + Commercial */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-[#C5A267] font-bold mb-4 uppercase text-[13px] tracking-[1.5px]">
              Residential
            </h3>
            <div className="space-y-3">
              <NavLink
                to="/projects/golf-ridge"
                className="block text-gray-600 hover:text-[#C5A267] transition-colors text-[14px]"
              >
                Golf Ridge Tower
              </NavLink>
              <NavLink
                to="/projects/suraksha"
                className="block text-gray-600 hover:text-[#C5A267] transition-colors text-[14px]"
              >
                Suraksha Enclave
              </NavLink>
            </div>
          </div>

          <div>
            <h3 className="text-[#C5A267] font-bold mb-4 uppercase text-[13px] tracking-[1.5px]">
              Commercial
            </h3>
            <div className="space-y-3">
              <NavLink
                to="/projects/summit"
                className="block text-gray-600 hover:text-[#C5A267] transition-colors text-[14px]"
              >
                Summit Twin Tower
              </NavLink>
              <NavLink
                to="/projects/coming-soon"
                className="block text-gray-600 hover:text-[#C5A267] transition-colors text-[14px]"
              >
                Coming Soon
              </NavLink>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#C5A267] font-bold mb-4 uppercase text-[13px] tracking-[1.5px]">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-600 text-[15px]">
            <li>
              <NavLink to="/" className="hover:text-[#C5A267] transition-colors">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#C5A267] transition-colors">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="hover:text-[#C5A267] transition-colors">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/media" className="hover:text-[#C5A267] transition-colors">
                Media Coverage
              </NavLink>
            </li>
            <li>
              <NavLink to="/career" className="hover:text-[#C5A267] transition-colors">
                Career
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-[#C5A267] font-bold mb-4 uppercase text-[13px] tracking-[1.5px]">
            Other Links
          </h3>
          <NavLink
            to="/contact"
            className="block text-gray-600 mb-6 hover:text-[#C5A267] transition-colors text-[15px]"
          >
            Contact Us
          </NavLink>

          {/* Brochure Button */}
          <button className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-5 md:px-6 py-1.5 md:py-2 rounded-md mb-8 text-[11px] md:text-[12px] font-bold tracking-[1.2px] md:tracking-[1.5px] uppercase hover:opacity-90 transition-all shadow-md w-auto block">
            Download Brochure
          </button>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-700 text-xl md:text-2xl">
            <NavLink to="#">
              <FaFacebookF className="hover:text-[#C5A267] transition-colors cursor-pointer" />
            </NavLink>
            <NavLink to="#">
              <FaInstagram className="hover:text-[#C5A267] transition-colors cursor-pointer" />
            </NavLink>
            <NavLink to="#">
              <FaLinkedinIn className="hover:text-[#C5A267] transition-colors cursor-pointer" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Middle Contact Bar - py-10 ko py-[42px] kiya hai (Height badhane ke liye) */}
      <div className="border-t border-gray-800 py-[42px] px-6 md:px-36">
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-gray-700">

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-lg text-gray-500" />
            <span className="text-[14px] font-medium">+91-9721663366</span>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-xl text-gray-500 mt-1" />
            <div className="text-[13px] leading-relaxed">
              <span className="font-bold text-gray-800 block mb-0.5 uppercase tracking-[0.5px] text-[11px]">
                Head Office
              </span>
              <span className="text-gray-600">
                C-3-0001, Palm Spring Villa, Sushant Golf City, Lucknow - 226030
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 md:justify-end">
            <FaEnvelope className="text-lg text-gray-500" />
            <span className="text-[14px] font-medium">info@smjgroup.in</span>
          </div>

        </div>
      </div>

      {/* Bottom Yellow Bar */}
      <div className="bg-[#BE9B2F] text-white text-[11px] md:text-[13px] py-4 px-6 md:px-36 flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center tracking-[1px] font-medium uppercase text-center">
        <p>DESIGN & DEVELOPED BY - BRANDS TAILER</p>
        <p>© SMJ GROUP, {new Date().getFullYear()} All Rights Reserved</p>
        <div className="flex flex-wrap justify-center gap-3">
          <NavLink to="/tc" className="hover:underline">T&C</NavLink>
          <span>-</span>
          <NavLink to="/privacy" className="hover:underline">PRIVACY POLICY</NavLink>
          <span>-</span>
          <NavLink to="/sitemap" className="hover:underline">SITE MAP</NavLink>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
