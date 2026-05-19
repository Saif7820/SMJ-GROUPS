import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false); // Mobile dropdown ke liye

  // HTML code ke mutabik text-sm font-semibold tracking-widest aur base color text-gray-800 apply kiya hai
  const navClass = ({ isActive }) =>
    `text-sm font-semibold tracking-widest transition-colors duration-300 uppercase py-1 ${
      isActive ? "text-[#B99630]" : "text-gray-800 hover:text-[#B99630]"
    }`;

  return (
    // Fixed w-full z-50 transition-all duration-500 bg-white shadow-md border-b border-gray-100 HTML ke mutabik hai
    <nav className="fixed w-full z-50 transition-all duration-500 bg-white shadow-md border-b border-gray-100">
      {/* max-w-7xl mx-auto px-4 flex items-center justify-between h-16 classes copy ki hain */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <NavLink to="/" className="z-50 flex items-center">
          <img
            src={logo}
            alt="SMJ"
            className="h-10 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Menu - hidden lg:flex items-center space-x-8 */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink to="/" className={navClass}>HOME</NavLink>
          <NavLink to="/about" className={navClass}>ABOUT US</NavLink>

          {/* PROJECTS Dropdown: group-hover pe open hoga */}
          <div className="relative group h-full flex items-center cursor-pointer">
            <button className="flex items-center gap-1 text-sm font-semibold tracking-widest transition-colors duration-300 uppercase text-gray-800 group-hover:text-[#B99630]">
              PROJECTS
              <svg xmlns="http://w3.org" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-300 group-hover:rotate-180" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>

            {/* Dropdown Box - HTML ki exact styling (top-full, mt-5.5, py-4, origin-top, etc.) code se match ki hai */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl border-t-2 border-[#B99630] py-4 transition-all duration-300 transform origin-top w-64 opacity-0 invisible translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 z-50">
              <div className="mb-4 last:mb-0 text-left">
                <h3 className="px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Residential</h3>
                <NavLink className="block px-6 py-2 text-xs text-gray-800 hover:text-[#B99630] hover:bg-gray-50 transition-colors uppercase tracking-wide font-medium" to="/projects/golf-ridge">GOLF RIDGE TOWER</NavLink>
                <NavLink className="block px-6 py-2 text-xs text-gray-800 hover:text-[#B99630] hover:bg-gray-50 transition-colors uppercase tracking-wide font-medium" to="/projects/suraksha">SURAKSHA ENCLAVE</NavLink>
              </div>
              <div className="mb-4 last:mb-0 text-left">
                <h3 className="px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Commercial</h3>
                <NavLink className="block px-6 py-2 text-xs text-gray-800 hover:text-[#B99630] hover:bg-gray-50 transition-colors uppercase tracking-wide font-medium" to="/projects/summit">SUMMIT TWIN TOWER</NavLink>
                <NavLink className="block px-6 py-2 text-xs text-gray-800 hover:text-[#B99630] hover:bg-gray-50 transition-colors uppercase tracking-wide font-medium" to="/blog">COMING SOON</NavLink>
              </div>
            </div>
          </div>

          <NavLink to="/media" className={navClass}>MEDIA COVERAGE</NavLink>
          <NavLink to="/career" className={navClass}>CAREER</NavLink>
          <NavLink to="/contact" className={navClass}>CONTACT US</NavLink>
          <NavLink to="/blog" className={navClass}>Blog</NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden z-50 transition-colors text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg xmlns="http://w3.org" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://w3.org" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
          )}
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 flex flex-col bg-white text-gray-900 shadow-2xl overflow-y-auto">
          <div className="pt-20 px-6 pb-10 flex flex-col h-full">
            <div className="space-y-8">
              <div>
                <button className="w-full flex justify-between items-center text-left text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3 hover:text-[#B99630]">
                  <NavLink to="/" onClick={() => setOpen(false)}>HOME</NavLink>
                </button>
              </div>
              <div>
                <button className="w-full flex justify-between items-center text-left text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3 hover:text-[#B99630]">
                  <NavLink to="/about" onClick={() => setOpen(false)}>ABOUT US</NavLink>
                </button>
              </div>
              <div>
                <button 
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="w-full flex justify-between items-center text-left text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3 hover:text-[#B99630]"
                >
                  PROJECTS
                  <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-chevron-down transition-transform ${projectsOpen ? 'rotate-180' : ''}`} aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                </button>
                {projectsOpen && (
                  <div className="space-y-5 pl-4 border-l border-[#B99630]/40 mt-4 text-left">
                    <div>
                      <h4 className="text-xs font-bold text-[#B99630] tracking-[0.3em] uppercase mb-2">Residential</h4>
                      <div className="space-y-2">
                        <NavLink className="block text-sm tracking-wide uppercase text-gray-600 hover:text-[#B99630]" to="/projects/golf-ridge" onClick={() => setOpen(false)}>GOLF RIDGE TOWER</NavLink>
                        <NavLink className="block text-sm tracking-wide uppercase text-gray-600 hover:text-[#B99630]" to="/projects/suraksha" onClick={() => setOpen(false)}>SURAKSHA ENCLAVE</NavLink>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#B99630] tracking-[0.3em] uppercase mb-2">Commercial</h4>
                      <div className="space-y-2">
                        <NavLink className="block text-sm tracking-wide uppercase text-gray-600 hover:text-[#B99630]" to="/projects/summit" onClick={() => setOpen(false)}>SUMMIT TWIN TOWER</NavLink>
                        <NavLink className="block text-sm tracking-wide uppercase text-gray-600 hover:text-[#B99630]" to="/blog" onClick={() => setOpen(false)}>COMING SOON</NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <button className="w-full flex justify-between items-center text-left text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3 hover:text-[#B99630]">
                  <NavLink to="/media" onClick={() => setOpen(false)}>MEDIA COVERAGE</NavLink>
                </button>
              </div>
              <div>
                <button className="w-full flex justify-between items-center text-left text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3 hover:text-[#B99630]">
                  <NavLink to="/career" onClick={() => setOpen(false)}>CAREER</NavLink>
                </button>
              </div>
              <div>
                <button className="w-full flex justify-between items-center text-left text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3 hover:text-[#B99630]">
                  <NavLink to="/contact" onClick={() => setOpen(false)}>CONTACT US</NavLink>
                </button>
              </div>
              <div>
                <button className="w-full flex justify-between items-center text-left text-lg font-semibold tracking-[0.2em] uppercase border-b border-gray-100 pb-3 hover:text-[#B99630]">
                  <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
                </button>
              </div>
            </div>
            <div className="mt-auto pt-8 text-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase">© SMJ Group</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
