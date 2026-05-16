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
    isWide
  }) => {
    const content = (
      <div
        className={`flex items-center bg-white rounded-full shadow-lg px-3 md:px-4 py-2 hover:scale-105 transition-all cursor-pointer mb-2 border border-gray-50 ${
          isWide
            ? 'min-w-[190px] md:min-w-[210px]'
            : 'min-w-[150px] md:min-w-[170px]'
        }`}
      >
        <div className={`text-lg md:text-xl mr-3 ${iconColor}`}>
          {icon}
        </div>

        <span className="text-gray-700 text-[13px] md:text-[14px] font-semibold">
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
              href={`tel:+${phoneNumber}`}
            />

            <MenuButton
              label="WhatsApp"
              icon={<FaWhatsapp />}
              iconColor="text-[#25D366]"
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
          <div className="bg-white w-full max-w-[440px] p-5 md:p-8 relative shadow-2xl rounded-sm animate-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setIsSubmitted(false);
                setMobile("");
              }}
              className="absolute top-4 right-5 text-[#D4AF37] text-2xl border border-[#D4AF37] rounded-full p-0.5 hover:bg-[#D4AF37] hover:text-white transition-all"
            >
              <IoCloseOutline />
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="text-[#D4AF37] text-[24px] md:text-[28px] font-serif text-center mb-5 md:mb-6 tracking-wide">
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
                  className="space-y-4"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#D4AF37] text-[14px] bg-transparent"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail ID*"
                    className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#D4AF37] text-[14px] bg-transparent"
                    required
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="country"
                      placeholder="Country*"
                      className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#D4AF37] text-[14px] bg-transparent"
                      required
                    />

                    <input
                      type="text"
                      name="city"
                      placeholder="City*"
                      className="w-full border-b border-gray-300 py-2 outline-none focus:border-[#D4AF37] text-[14px] bg-transparent"
                      required
                    />
                  </div>

                  <div className="relative flex items-center border-b border-gray-300 py-2 z-50">
                    <span className="text-gray-500 mr-3 text-[14px] font-medium">
                      +91
                    </span>

                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number*"
                      value={mobile}
                      onChange={(e) =>
                        setMobile(
                          e.target.value.replace(/\D/g, "")
                        )
                      }
                      className="w-full outline-none bg-transparent text-[14px] relative z-50"
                      required
                      maxLength="10"
                    />
                  </div>

                  <div className="flex items-start space-x-2 text-[10px] text-gray-400 leading-tight pt-1 text-left">
                    <input
                      type="checkbox"
                      className="mt-0.5 accent-[#D4AF37] h-3 w-3 shrink-0"
                      required
                    />

                    <p>
                      By checking this box, you agree to our{" "}
                      <span className="underline cursor-pointer text-[#D4AF37]">
                        Privacy Policy
                      </span>{" "}
                      and consent to be contacted.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#B89222] to-[#C7A53A] text-white py-3 mt-4 font-bold tracking-[0.1em] uppercase shadow-md transition-all hover:brightness-105 disabled:opacity-50"
                  >
                    {loading ? "SUBMITTING..." : "SUBMIT →"}
                  </button>

                  {result && (
                    <p className="text-red-500 text-sm text-center">
                      {result}
                    </p>
                  )}
                </form>
              </>
            ) : (
              <div className="text-center py-8 flex flex-col items-center animate-in fade-in duration-500">
                <div className="w-14 h-14 bg-yellow-50 text-[#D4AF37] rounded-full flex items-center justify-center mb-6 text-2xl border border-yellow-100 shadow-inner">
                  <span>✓</span>
                </div>

                <h2 className="text-[#D4AF37] text-[24px] md:text-[28px] font-serif mb-2 tracking-wide">
                  Thank you!
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                  We have received your request and will contact you
                  shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingMenu;