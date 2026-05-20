import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `text-sm font-semibold tracking-widest transition-colors duration-300 uppercase py-1 ${
      isActive ? "text-[#B99630]" : "text-gray-800 hover:text-[#B99630]"
    }`;

  return (
    <nav className="fixed w-full z-50 transition-all duration-500 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <NavLink to="/" className="z-50 flex items-center">
          <img
            src={logo}
            alt="SMJ"
            className="h-10 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">

          <NavLink to="/" className={navClass}>
            HOME
          </NavLink>

          <NavLink to="/about" className={navClass}>
            ABOUT US
          </NavLink>

          {/* Projects Dropdown */}
          <div className="relative group flex items-center h-16 cursor-pointer">

            <button className="flex items-center gap-1 text-sm font-semibold tracking-widest transition-colors duration-300 uppercase text-gray-800 group-hover:text-[#B99630]">
              PROJECTS

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:rotate-180"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-1/2 top-full -translate-x-1/2 bg-white shadow-xl border-t-2 border-[#B99630] py-4 w-64 opacity-0 invisible translate-y-2 scale-95 transition-all duration-300 origin-top group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 z-[999]">

              {/* Residential */}
              <div className="mb-4 text-left">

                <h3 className="px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Residential
                </h3>

                <NavLink
                  to="/projects/golf-ridge"
                  className="block px-6 py-2 text-xs text-gray-800 hover:text-[#B99630] hover:bg-gray-50 transition-colors uppercase tracking-wide font-medium"
                >
                  GOLF RIDGE TOWER
                </NavLink>

                <NavLink
                  to="/projects/suraksha"
                  className="block px-6 py-2 text-xs text-gray-800 hover:text-[#B99630] hover:bg-gray-50 transition-colors uppercase tracking-wide font-medium"
                >
                  SURAKSHA ENCLAVE
                </NavLink>

              </div>

              {/* Commercial */}
              <div className="text-left">

                <h3 className="px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Commercial
                </h3>

                <NavLink
                  to="/projects/summit"
                  className="block px-6 py-2 text-xs text-gray-800 hover:text-[#B99630] hover:bg-gray-50 transition-colors uppercase tracking-wide font-medium"
                >
                  SUMMIT TWIN TOWER
                </NavLink>

                {/* FIXED */}
                <NavLink
                  to="/projects/coming-soon"
                  className="block px-6 py-2 text-xs text-gray-800 hover:text-[#B99630] hover:bg-gray-50 transition-colors uppercase tracking-wide font-medium"
                >
                  COMING SOON
                </NavLink>

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
            BLOG
          </NavLink>

        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white overflow-y-auto">
          <div className="pt-20 px-6 pb-10 flex flex-col h-full">

            <div className="space-y-8">

              <NavLink
                to="/"
                className="block text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3"
                onClick={() => setOpen(false)}
              >
                HOME
              </NavLink>

              <NavLink
                to="/about"
                className="block text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3"
                onClick={() => setOpen(false)}
              >
                ABOUT US
              </NavLink>

              {/* Mobile Projects */}
              <div>

                <button
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="w-full flex justify-between items-center text-left text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3"
                >
                  PROJECTS

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${
                      projectsOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>

                {projectsOpen && (
                  <div className="space-y-5 pl-4 border-l border-[#B99630]/40 mt-4">

                    <div>
                      <h4 className="text-xs font-bold text-[#B99630] tracking-[0.3em] uppercase mb-2">
                        Residential
                      </h4>

                      <div className="space-y-2">

                        <NavLink
                          to="/projects/golf-ridge"
                          className="block text-sm tracking-wide uppercase text-gray-600 hover:text-[#B99630]"
                          onClick={() => setOpen(false)}
                        >
                          GOLF RIDGE TOWER
                        </NavLink>

                        <NavLink
                          to="/projects/suraksha"
                          className="block text-sm tracking-wide uppercase text-gray-600 hover:text-[#B99630]"
                          onClick={() => setOpen(false)}
                        >
                          SURAKSHA ENCLAVE
                        </NavLink>

                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-[#B99630] tracking-[0.3em] uppercase mb-2">
                        Commercial
                      </h4>

                      <div className="space-y-2">

                        <NavLink
                          to="/projects/summit"
                          className="block text-sm tracking-wide uppercase text-gray-600 hover:text-[#B99630]"
                          onClick={() => setOpen(false)}
                        >
                          SUMMIT TWIN TOWER
                        </NavLink>

                        <NavLink
                          to="/projects/coming-soon"
                          className="block text-sm tracking-wide uppercase text-gray-600 hover:text-[#B99630]"
                          onClick={() => setOpen(false)}
                        >
                          COMING SOON
                        </NavLink>

                      </div>
                    </div>

                  </div>
                )}
              </div>

              <NavLink
                to="/media"
                className="block text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3"
                onClick={() => setOpen(false)}
              >
                MEDIA COVERAGE
              </NavLink>

              <NavLink
                to="/career"
                className="block text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3"
                onClick={() => setOpen(false)}
              >
                CAREER
              </NavLink>

              <NavLink
                to="/contact"
                className="block text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3"
                onClick={() => setOpen(false)}
              >
                CONTACT US
              </NavLink>

              <NavLink
                to="/blog"
                className="block text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3"
                onClick={() => setOpen(false)}
              >
                BLOG
              </NavLink>

            </div>

            <div className="mt-auto pt-8 text-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                © SMJ Group
              </p>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;