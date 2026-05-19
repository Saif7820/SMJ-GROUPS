import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // Pop-up modals ke states
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form input states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    agreed: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the privacy policy.");
      return;
    }
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setFormData({ name: "", email: "", country: "", city: "", phone: "", agreed: false });
  };

  return (
    // Outer HTML ke mutabik text-gray-700 rakha hai
    <footer className="bg-white text-gray-700 relative w-full font-sans">

      {/* Top Section - border-t py-8 md:py-10 max-w-7xl px-6 */}
      <div className="border-t py-8 md:py-10">
        {/* Exact grid layout from your HTML: grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-16 */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-16 text-left">
          
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <img
              src={logo}
              alt="SMJ Logo"
              className="h-20 mb-6 object-contain"
            />
          </div>

          {/* Residential + Commercial */}
          <div>
            {/* HTML code se exact copy: uppercase text-sm mb-5 tracking-widest font-medium with exact inline color */}
            <h4 className="uppercase text-sm mb-5 tracking-widest font-semibold" style={{ color: "rgb(185, 150, 48)" }}>
              Residential
            </h4>
            <ul className="space-y-2 mb-6">
              <li>
                <NavLink to="/projects/golf-ridge" className="text-gray-700 hover:text-[#B99630] transition text-sm">
                  Golf Ridge Tower
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects/suraksha" className="text-gray-700 hover:text-[#B99630] transition text-sm">
                  Suraksha Enclave
                </NavLink>
              </li>
            </ul>

            {/* HTML code se exact copy: uppercase text-sm mb-4 tracking-widest font-medium with exact inline color */}
            <h4 className="uppercase text-sm mb-4 tracking-widest font-semibold" style={{ color: "rgb(185, 150, 48)" }}>
              Commercial
            </h4>
            <ul className="space-y-2 mb-6">
              <li>
                <NavLink to="/projects/summit" className="text-gray-700 hover:text-[#B99630] transition text-sm">
                  Summit Twin Tower
                </NavLink>
              </li>
              <li>
                <NavLink to="/coming-soon" className="text-gray-700 hover:text-[#B99630] transition text-sm">
                  Coming Soon
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            {/* HTML code se exact copy: uppercase text-sm mb-6 tracking-widest font-medium with exact inline color */}
            <h4 className="uppercase text-sm mb-6 tracking-widest font-semibold" style={{ color: "rgb(185, 150, 48)" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><NavLink to="/" className="text-gray-700 hover:text-[#B99630] transition text-sm">Home</NavLink></li>
              <li><NavLink to="/about" className="text-gray-700 hover:text-[#B99630] transition text-sm">About Us</NavLink></li>
              <li><NavLink to="/projects" className="text-gray-700 hover:text-[#B99630] transition text-sm">Projects</NavLink></li>
              <li><NavLink to="/media" className="text-gray-700 hover:text-[#B99630] transition text-sm">Media Coverage</NavLink></li>
              <li><NavLink to="/career" className="text-gray-700 hover:text-[#B99630] transition text-sm">Career</NavLink></li>
            </ul>
          </div>

          {/* Other Links + Brochure Button + Social icons */}
          <div className="col-span-2 md:col-span-1">
            {/* HTML code se exact copy: uppercase text-sm mb-6 tracking-widest font-medium with exact inline color */}
            <h4 className="uppercase text-sm mb-6 tracking-widest font-semibold" style={{ color: "rgb(185, 150, 48)" }}>
              Other Links
            </h4>
            <p className="mb-5">
              <NavLink to="/contact" className="text-gray-700 hover:text-[#B99630] transition">
                Contact Us
              </NavLink>
            </p>

            {/* Brochure Button */}
            <button 
              onClick={() => setIsOpen(true)}
              className="relative group px-4 py-2 bg-gradient-to-r from-[#B99630] to-[#d4af8a] text-white text-sm tracking-widest font-semibold uppercase rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#B99630]/50 mb-6 whitespace-nowrap cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">Download Brochure</span>
            </button>

            {/* Social Icons SVGs from your HTML */}
            <div className="flex gap-5 text-gray-700">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook cursor-pointer hover:text-[#B99630] transition" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram cursor-pointer hover:text-[#B99630] transition" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin cursor-pointer hover:text-[#B99630] transition" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Middle Contact Bar */}
      <div className="border-t py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left text-gray-700">
          
          <div className="flex items-center justify-center md:justify-start gap-3">
            <svg xmlns="http://w3.org" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            <span>+91-9721663366</span>
          </div>

          <div className="flex items-start justify-center md:justify-start gap-3 text-sm leading-relaxed">
            <svg xmlns="http://w3.org" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin mt-1" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>
              <strong>Head Office</strong><br />
              C-3-0001, Palm Spring Villa, Sushant Golf City<br />
              Lucknow - 226030
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-3">
            <svg xmlns="http://w3.org" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
            <span>info@smjgroup.in</span>
          </div>

        </div>
      </div>

      {/* Bottom Yellow/Golden Bar */}
      <div id="main-footer" className="py-4 text-white text-sm border-t border-white/10" style={{ backgroundColor: "rgb(185, 150, 48)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          
          <div className="md:text-left order-2 md:order-1">
            <a href="https://brandstailer.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors uppercase tracking-wider text-xs font-medium">
              DESIGN &amp; DEVELOPED BY - BRANDS TAILER
            </a>
          </div>

          <div className="order-1 md:order-2">
            © SMJ GROUP, 2026 All Rights Reserved
          </div>

          <div className="md:text-right order-3">
            <div className="flex justify-center md:justify-end gap-2 uppercase tracking-wider text-xs font-medium">
              <NavLink className="hover:text-gray-200 transition-colors" to="/terms">T&amp;C</NavLink>
              <span>-</span>
              <NavLink className="hover:text-gray-200 transition-colors" to="/privacy">Privacy POLICY</NavLink>
              <span>-</span>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">SITE MAP</a>
            </div>
          </div>

        </div>
      </div>

      {/* --- POP-UP CALL BACK BOX MODAL --- */}
      {isOpen && (
        <div className="fixed inset-0 z- flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-[440px] bg-white rounded-sm p-10 md:p-14 shadow-2xl text-center">
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-5 md:right-5 w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 text-xs transition-all cursor-pointer"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="font-serif text-3xl md:text-[32px] text-[#B99630] font-normal mb-6">
                  Request a call back
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5 text-left font-sans">
                  <div>
                    <input type="text" name="name" placeholder="Name*" required value={formData.name} onChange={handleInputChange} className="w-full border-b border-gray-300 py-2 text-[16px] focus:outline-none focus:border-[#B99630] transition-colors placeholder-gray-400 bg-transparent text-gray-800" />
                  </div>
                  <div>
                    <input type="email" name="email" placeholder="E-Mail ID*" required value={formData.email} onChange={handleInputChange} className="w-full border-b border-gray-300 py-2 text-[16px] focus:outline-none focus:border-[#B99630] transition-colors placeholder-gray-400 bg-transparent text-gray-800" />
                  </div>
                  <div>
                    <input type="text" name="country" placeholder="Country*" required value={formData.country} onChange={handleInputChange} className="w-full border-b border-gray-300 py-2 text-[16px] focus:outline-none focus:border-[#B99630] transition-colors placeholder-gray-400 bg-transparent text-gray-800" />
                  </div>
                  <div>
                    <input type="text" name="city" placeholder="City*" required value={formData.city} onChange={handleInputChange} className="w-full border-b border-gray-300 py-2 text-[16px] focus:outline-none focus:border-[#B99630] transition-colors placeholder-gray-400 bg-transparent text-gray-800" />
                  </div>
                  <div className="flex items-center gap-3 border-b border-gray-300 py-2">
                    <span className="text-[16px] font-semibold text-gray-700 font-sans">+91</span>
                    <input type="tel" name="phone" placeholder="Mobile Number*" required pattern="[0-9]{10}" value={formData.phone} onChange={handleInputChange} className="w-full text-[16px] focus:outline-none placeholder-gray-400 bg-transparent text-gray-800" />
                  </div>
                  <div className="flex items-start gap-3 pt-1">
                    <input type="checkbox" name="agreed" id="agreed" required checked={formData.agreed} onChange={handleInputChange} className="mt-1 accent-[#B99630]" />
                    <label htmlFor="agreed" className="text-[11px] text-gray-500 leading-normal">
                      By checking this box, you agree to our <NavLink to="/privacy" onClick={closeModal} className="text-[#B99630] underline">Privacy Policy</NavLink> and consent to be contacted with relevant updates.
                    </label>
                  </div>
                  <div className="flex justify-center pt-3">
                    <button type="submit" className="bg-gradient-to-r from-[#B99630] to-[#d4af8a] text-white px-12 py-2.5 text-xs font-bold tracking-[1.5px] uppercase rounded-md hover:opacity-90 transition-all shadow-md flex items-center gap-2 cursor-pointer">
                      Submit &rarr;
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-4 flex flex-col items-center justify-center font-sans">
                <div className="w-14 h-14 bg-[#F5EFE6] text-[#B99630] rounded-full flex items-center justify-center mb-5 text-xl">✓</div>
                <h2 className="font-serif text-3xl md:text-[32px] text-[#B99630] font-normal mb-3">Thank you!</h2>
                <p className="text-[#444] text-[16px] max-w-[290px] leading-relaxed mb-6">We have received your request and will contact you shortly.</p>
                <button onClick={closeModal} className="bg-gradient-to-r from-[#B99630] to-[#d4af8a] text-white px-8 py-2.5 text-xs font-bold tracking-[1.5px] uppercase rounded-md hover:opacity-90 transition-all cursor-pointer shadow-sm">
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </footer>
  );
};

export default Footer;
