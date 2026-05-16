import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false); // Mobile dropdown ke liye

  const navClass = ({ isActive }) =>
    `text-[14px] tracking-[0.1em] font-medium transition-all duration-300 py-1 font-sans ${isActive ? "text-[#B99630]" : "text-[#1a1a1a] hover:text-[#B99630]"
    }`;

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-[100] ">
      <div className="max-w-[1700px] mx-auto px-6 md:px-36 py-3 md:py-1 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-10 md:h-9 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Menu (No Changes) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 uppercase">
          <NavLink to="/" className={navClass}>HOME</NavLink>
          <NavLink to="/about" className={navClass}>ABOUT US</NavLink>

          <div className="relative group flex items-center cursor-pointer">
            <span className="text-[#1a1a1a] group-hover:text-[#B99630] font-medium text-[14px] tracking-[0.1em] flex items-center gap-1.5 py-4 font-sans">
              PROJECTS <span className="text-[10px] ml-0">▼</span>
            </span>

            <div className="absolute left-0 top-full hidden group-hover:block pt-0">
              <div className="bg-white shadow-2xl w-60 p-5 border-t-[3px] border-[#B99630]">

                <p className="text-gray-400 text-[10px] font-bold mb-3 tracking-widest  uppercase">
                  Residential
                </p>

                <div className="flex flex-col gap-2.5 mb-5">
                  <NavLink
                    to="/projects/golf-ridge"
                    className="text-gray-700 hover:text-[#B99630] text-[14px] font-sans"
                  >
                    Golf Ridge Tower
                  </NavLink>

                  <NavLink
                    to="/projects/suraksha"
                    className="text-gray-700 hover:text-[#B99630] text-[14px] font-sans"
                  >
                    Suraksha Enclave
                  </NavLink>
                </div>

                <p className="text-gray-400 text-[10px] font-bold mb-3 tracking-widest  uppercase">
                  Commercial
                </p>

                <div className="flex flex-col gap-2.5">
                  <NavLink
                    to="/projects/summit"
                    className="text-gray-700 hover:text-[#B99630] text-[14px] font-sans"
                  >
                    Summit Twin Tower
                  </NavLink>

                  <NavLink
                    to="/projects/coming-soon"
                    className="text-gray-700 hover:text-[#B99630] text-[14px] font-sans"
                  >
                    COMING SOON
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <NavLink to="/media" className={navClass}>
            MEDIA COVERAGE
          </NavLink>

          <NavLink to="/career" className={navClass}>
            CAREER
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            CONTACT US
          </NavLink>

          <NavLink to="/blog" className={navClass}>
            Blog
          </NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      {open && (
        <div className="fixed inset-0 bg-white z-[150] flex flex-col p-8 overflow-y-auto">

          {/* Top Bar with Logo & Close */}
          <div className="flex justify-between items-center mb-10">
            <img src={logo} alt="logo" className="h-8 w-auto" />

            <button
              className="text-3xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-8 uppercase tracking-[2px] font-bold text-[#1a1a1a]">

            <NavLink to="/" onClick={() => setOpen(false)}>
              HOME
            </NavLink>

            <NavLink to="/about" onClick={() => setOpen(false)}>
              ABOUT US
            </NavLink>

            {/* Mobile Projects Accordion */}
            <div className="flex flex-col">

              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setProjectsOpen(!projectsOpen)}
              >
                <span>PROJECTS</span>

                <span
                  className={`text-xs transition-transform ${projectsOpen ? "rotate-180" : ""
                    }`}
                >
                  ▼
                </span>
              </div>

              {projectsOpen && (
                <div className="flex flex-col pl-4 mt-4 gap-6 lowercase font-normal">

                  <div className="flex flex-col gap-3">
                    <p className="text-[10px] text-[#B99630] uppercase font-bold tracking-widest font-sans">
                      RESIDENTIAL
                    </p>

                    <NavLink
                      to="/projects/golf-ridge"
                      onClick={() => setOpen(false)}
                      className="text-gray-600"
                    >
                      Golf Ridge Tower
                    </NavLink>

                    <NavLink
                      to="/projects/suraksha"
                      onClick={() => setOpen(false)}
                      className="text-gray-600"
                    >
                      Suraksha Enclave
                    </NavLink>
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-[10px] text-[#B99630] uppercase font-bold tracking-widest font-sans">
                      COMMERCIAL
                    </p>

                    <NavLink
                      to="/projects/summit"
                      onClick={() => setOpen(false)}
                      className="text-gray-600"
                    >
                      Summit Twin Tower
                    </NavLink>

                    <NavLink
                      to="/projects/coming-soon"
                      onClick={() => setOpen(false)}
                      className="text-gray-600"
                    >
                      Coming Soon
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/media" onClick={() => setOpen(false)}>
              MEDIA COVERAGE
            </NavLink>

            <NavLink to="/career" onClick={() => setOpen(false)}>
              CAREER
            </NavLink>

            <NavLink to="/contact" onClick={() => setOpen(false)}>
              CONTACT US
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;