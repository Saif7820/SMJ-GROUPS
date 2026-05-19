import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi'; // Icon ke liye

const CustomerSupport = () => {
  // Modal control karne ke liye state
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", "New Customer Support Message");

    try {
      const response = await fetch("https://web3forms.com", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setShowModal(true);
        e.target.reset();
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
  };

  return (
    <section className="py-20 px-6 bg-white relative">
      {/* Form wrapper width */}
      <div className="max-w-[760px] mx-auto text-center">
        
        {/* Top Button Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-block border border-[#D4A056]/40 px-6 py-1.5 rounded-full bg-[#fdfcf9]/50 shadow-[0_2px_10px_rgba(212,160,86,0.03)]">
            <span className="text-[#C8A96A] text-[11px] md:text-[12px] font-medium tracking-[4px] uppercase block translate-x-[2px]">
               Send Us a Message
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-[#1A1A1A] text-[42px] md:text-[54px] font-serif font-normal leading-tight uppercase mb-6 tracking-wide">
          Customer Support
        </h2>

        {/* UPDATED DIVIDER: Width ko max-w-[1700px] se kam karke [170px] kiya aur top pe perfectly shift kiya hai */}
        <div className="flex items-start justify-center w-full max-w-[170px] mx-auto relative mb-10 pt-1.5">
          {/* Left Fading Line - Isse top pe bilkul chipka diya hai mt-[1px] se */}
          <div className="flex-1 h-[2.5px] bg-gradient-to-r from-transparent to-[#D4A056] mt-[1px]" />
          
          {/* Center Vertical Element */}
          <div className="flex flex-col items-center px-1.5 relative">
            {/* Small Top Center Line (Tick) */}
            <div className="w-[2.5px] h-[5px] bg-[#D4A056] absolute top-[-5px]" />
            
            {/* Main Vertical Center Line */}
            <div className="w-[2.5px] h-[32px] bg-[#D4A056]" />
          </div>
          
          {/* Right Fading Line */}
          <div className="flex-1 h-[2.5px] bg-gradient-to-l from-transparent to-[#D4A056] mt-[1px]" />
        </div>

        {/* Description */}
        <p className="text-[#1E2939] text-[14px] md:text-[17px] font-sans font-light max-w-2xl mx-auto mb-8 leading-relaxed">
          Have a query for us? Leave us a message and we'll get in touch within 24 hours.
        </p>

        {/* Contact Form - UNTOUCHED & EXACTLY SAME */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-10 text-left">
          <div className="relative">
            <input type="text" name="name" placeholder="Full Name *" required className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#D4A056] transition-colors placeholder:text-gray-400 text-gray-700 bg-transparent" />
          </div>
          <div className="relative">
            <input type="email" name="email" placeholder="Email Address *" required className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#D4A056] transition-colors placeholder:text-gray-400 text-gray-700 bg-transparent" />
          </div>
          <div className="relative">
            <input type="text" name="location" placeholder="Location *" required className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#D4A056] transition-colors placeholder:text-gray-400 text-gray-700 bg-transparent" />
          </div>
          <div className="flex gap-4">
            <div className="w-16 border-b border-gray-300 py-3 text-gray-400">+91</div>
            <input type="tel" name="mobile" placeholder="Mobile Number" className="flex-1 border-b border-gray-300 py-3 focus:outline-none focus:border-[#D4A056] transition-colors placeholder:text-gray-400 text-gray-700 bg-transparent" />
          </div>

          <div className="flex justify-center mt-12 flex-col items-center">
            <button 
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-12 py-4 rounded-md font-semibold tracking-[2px] uppercase text-[12px] hover:shadow-xl transition-all flex items-center gap-3 group disabled:opacity-50"
            >
              {loading ? "SENDING..." : <>Send Message <span className="group-hover:translate-x-1 transition-transform">→</span></>}
            </button>
            {result && <p className="text-red-500 text-sm mt-4">{result}</p>}
          </div>
        </form>
      </div>

      {/* --- SUCCESS POPUP (MODAL) --- */}
      {showModal && (
        <div className="fixed inset-0 z- flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-10 md:p-14 max-w-md w-full text-center shadow-2xl scale-in-center">
            {/* Success Check Icon */}
            <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center mx-auto mb-6">
               <div className="w-8 h-8 bg-[#D4A056] rounded-full flex items-center justify-center text-white">
                  <FiCheck size={18} />
               </div>
            </div>

            <h2 className="text-3xl font-serif text-gray-800 mb-4 font-normal">Thank You!</h2>
            
            <p className="text-gray-500 text-[14px] font-light leading-relaxed mb-10">
              Your inquiry has been received.<br />
              One of our representatives will contact you shortly at the provided contact details.
            </p>

            <button 
              onClick={() => setShowModal(false)}
              className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F]  text-white px-12 py-3 rounded-md font-semibold tracking-[2px] uppercase text-[11px] transition-all flex items-center justify-center gap-2 mx-auto hover:opacity-90"
            >
              CLOSE <span>→</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomerSupport;
