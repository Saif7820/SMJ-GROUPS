import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [hideFab, setHideFab] = useState(false);

  const phoneNumber = "919721663366";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi%2C+I'm+interested+in+SMJ+Group+properties.+Please+share+more+details.`;

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        setHideFab(footerTop < windowHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MenuButton = ({
    label,
    icon,
    onClick,
    href,
    iconColor,
    iconBg,
    isWide,
    isSmall
  }) => {
    const content = (
      <div
        className={`flex items-center bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all mb-2.5 gap-2.5 ${
          isWide
            ? 'min-w-[185px] md:min-w-[200px] px-3 py-3'
            : isSmall
            ? 'min-w-[130px] md:min-w-[145px] px-2.5 py-2.5'
            : 'min-w-[148px] md:min-w-[163px] px-3 py-3'
        }`}
      >
        <div className={`${isSmall ? 'w-7 h-7 text-base' : 'w-8 h-8 text-[15px]'} rounded-full flex items-center justify-center shrink-0 ${iconBg}`}>
          <span className={iconColor}>{icon}</span>
        </div>

        <span className={`text-gray-800 font-bold ${isSmall ? 'text-[13.5px] md:text-[14px]' : 'text-[13px] md:text-[14px]'}`}>
          {label}
        </span>


      </div>
    );

    if (href)
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          {content}
        </a>
      );

    return <div onClick={onClick}>{content}</div>;
  };

  return (
    <>
      <style>
        {`
          @keyframes shadowPulseFast {
            0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4); }
            70% { box-shadow: 0 0 0 15px rgba(0, 0, 0, 0); }
            100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
          }

          .animate-blink-fast {
            animation: shadowPulseFast 1s infinite;
          }
        `}
      </style>

      {/* --- Floating Action Button Menu --- */}
      <div
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col items-end z-50 font-sans transition-all duration-300 ${
          hideFab
            ? "opacity-0 pointer-events-none translate-y-10"
            : "opacity-100 translate-y-0"
        }`}
      >
        {isOpen && (
          <div className="flex flex-col items-end mb-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
            <MenuButton
              label="Request Callback"
              icon={<HiOutlineMailOpen />}
              iconColor="text-[#D4AF37]"
              iconBg="bg-[#FDF8EC]"
              isWide={true}
              onClick={() => {
                setIsModalOpen(true);
                setIsOpen(false);
              }}
            />

            <MenuButton
              label="Call Now"
              icon={<FiPhoneCall />}
              iconColor="text-[#007AFF]"
              iconBg="bg-[#EEF5FF]"
              isSmall={true}
              href={`tel:+${phoneNumber}`}
            />

            <MenuButton
              label="WhatsApp"
              icon={<FaWhatsapp />}
              iconColor="text-[#25D366]"
              iconBg="bg-[#EDFBF1]"
              href={whatsappLink}
            />
          </div>
        )}

        {/* FAB Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-gradient-to-r from-[#B89222] to-[#C7A53A] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white active:scale-90 transition-all shadow-lg ${
            !isOpen ? 'animate-blink-fast' : ''
          }`}
        >
          {isOpen ? (
            <IoCloseOutline className="text-2xl md:text-4xl" />
          ) : (
            <LuMessageCircle className="text-2xl md:text-4xl" />
          )}
        </button>
      </div>

      {/* --- Modal Section --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 font-sans text-gray-800">
          <div className="bg-white w-full max-w-[445px] p-7 md:p-11 relative shadow-2xl rounded-sm animate-in zoom-in duration-200 max-h-[90vh] overflow-y-auto text-center">
            {/* Close Circle Cross Button */}
            <button 
              onClick={() => {
                setIsModalOpen(false);
                setIsSubmitted(false);
                setMobile("");
              }}
              className="absolute top-4 right-4 md:top-5 md:right-5 w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 text-xs transition-all cursor-pointer font-sans"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="font-serif text-3xl md:text-[32px] text-[#C5A267] font-normal mb-5 text-center">
                  Request a call back
                </h2>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setLoading(true);

                    const formData = new FormData(e.target);

                    formData.append(
                      "access_key",
                      import.meta.env.VITE_WEB3FORMS_KEY
                    );

                    formData.append(
                      "subject",
                      "New Callback Request"
                    );

                    try {
                      const response = await fetch(
                        "https://api.web3forms.com/submit",
                        {
                          method: "POST",
                          body: formData
                        }
                      );

                      const data = await response.json();

                      if (data.success) {
                        setIsSubmitted(true);
                        e.target.reset();
                        setMobile("");
                        setResult("");
                      } else {
                        console.log("Error", data);
                        setResult(data.message);
                      }
                    } catch (error) {
                      console.log("Error", error);
                      setResult("An error occurred. Please try again.");
                    } finally {
                      setLoading(false);
                    }
                  }}
                  className="space-y-[18px] text-left"
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      required
                      className="w-full border-b border-gray-300 py-2 text-[16px] focus:outline-none focus:border-[#C5A267] transition-colors placeholder-gray-400 font-sans"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-Mail ID*"
                      required
                      className="w-full border-b border-gray-300 py-2 text-[16px] focus:outline-none focus:border-[#C5A267] transition-colors placeholder-gray-400 font-sans"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="country"
                      placeholder="Country*"
                      required
                      className="w-full border-b border-gray-300 py-2 text-[16px] focus:outline-none focus:border-[#C5A267] transition-colors placeholder-gray-400 font-sans"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="city"
                      placeholder="City*"
                      required
                      className="w-full border-b border-gray-300 py-2 text-[16px] focus:outline-none focus:border-[#C5A267] transition-colors placeholder-gray-400 font-sans"
                    />
                  </div>

                  {/* Phone field with +91 indicator */}
                  <div className="flex items-center gap-3 border-b border-gray-300 py-2">
                    <span className="text-[16px] font-semibold text-gray-700 font-sans">+91</span>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number*"
                      required
                      pattern="[0-9]{10}"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                      className="w-full text-[16px] focus:outline-none placeholder-gray-400 font-sans bg-transparent"
                    />
                  </div>

                  {/* Privacy checkbox section */}
                  <div className="flex items-start gap-3 pt-1 text-left">
                    <input
                      type="checkbox"
                      id="agreed-floating"
                      required
                      className="mt-1 accent-[#C5A267]"
                    />
                    <label htmlFor="agreed-floating" className="text-[11px] text-gray-500 leading-normal font-sans">
                      By checking this box, you agree to our <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[#C5A267] underline">Privacy Policy</a> and consent to be contacted with relevant updates.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-12 py-3.5 text-xs font-bold tracking-[1.5px] uppercase rounded-md hover:opacity-90 transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      {loading ? "SENDING..." : "Submit \u2192"}
                    </button>
                  </div>

                  {result && (
                    <p className="text-red-500 text-sm text-center">
                      {result}
                    </p>
                  )}
                </form>
              </>
            ) : (
              /* Thank You Message View */
              <div className="py-4 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 bg-[#F5EFE6] text-[#BF9628] rounded-full flex items-center justify-center mb-5 text-xl">
                  ✓
                </div>
                
                <h2 className="font-serif text-3xl md:text-[32px] text-[#C5A267] font-normal mb-3">
                  Thank you!
                </h2>
                
                <p className="text-[#444] text-[16px] font-sans max-w-[310px] leading-relaxed mb-6">
                  We have received your request and will contact you shortly.
                </p>

                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsSubmitted(false);
                    setMobile("");
                  }}
                  className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-8 py-3.5 text-xs font-bold tracking-[1.5px] uppercase rounded-md hover:opacity-90 transition-all cursor-pointer shadow-sm"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingMenu;