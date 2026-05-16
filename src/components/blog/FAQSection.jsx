import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiX, FiCheckCircle } from "react-icons/fi";

const faqData = [
  { q: "What is the price of Suraksha Enclave villas?", a: "Depending on the size and configuration, the initial price is ₹1.20 Cr." },
  { q: "Is Suraksha Enclave good for investment?", a: "Absolutely yes. The reason is that it is well-positioned on Raibareli Road with high demand for villas." },
  { q: "Where is Suraksha Enclave located?", a: "It is situated in Lucknow on Raibareli Road." },
  { q: "What configurations are available?", a: "The project includes villas with three or four bedrooms." },
  { q: "Is it a gated community?", a: "Indeed, Suraksha Enclave is a highly secure community with security personnel operating round the clock." },
  { q: "Are villas ready to move?", a: "Availability may vary; confirm the availability by getting connected." },
  { q: "Does it offer modern facilities?", a: "Indeed, there will be a parking facility, gardens, security, and even a generator backup." },
  { q: "How can I arrange for a visit to the place?", a: "Please contact us for more information about your visit." },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", "New Enquiry - Suraksha Enclave");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => {
          setIsSubmitted(false);
          setIsFormOpen(false);
        }, 3000);
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
    <section className="bg-[#FDFCF9] py-16 md:py-24 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header - Centered Gold with Short Underline */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#C5A267] font-normal leading-tight uppercase">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A267] mt-4"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left cursor-pointer"
              >
                <span className={`text-sm md:text-base font-medium transition-colors ${activeIndex === index ? "text-[#C5A267]" : "text-gray-800"}`}>
                  {index + 1}. {faq.q}
                </span>
                <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${activeIndex === index ? "bg-[#C5A267] border-[#C5A267] text-white" : "border-gray-200 text-gray-400"}`}>
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact Support Button - Custom Gradient */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm italic mb-8">Still have questions? Feel free to reach out to our experts.</p>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-10 py-4 rounded-full font-bold tracking-[2px] uppercase text-[11px] shadow-lg hover:shadow-xl transition-all mx-auto block cursor-pointer"
          >
            Contact Support
          </button>
        </div>
      </div>

      {/* --- POPUP MODAL (z-index highest) --- */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z- flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => { setIsFormOpen(false); setIsSubmitted(false); }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            />

            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-md rounded-[30px] p-8 md:p-10 shadow-2xl z-"
            >
              {!isSubmitted ? (
                <>
                  <button onClick={() => setIsFormOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-black cursor-pointer p-2">
                    <FiX size={24} />
                  </button>
                  <h3 className="text-2xl font-serif text-black mb-1 leading-tight">Enquiry Form</h3>
                  <p className="text-[#C5A267] text-[10px] tracking-[2px] uppercase font-bold mb-8">Suraksha Enclave Lucknow</p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input name="name" required type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C5A267]" />
                    <input name="phone" required type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C5A267]" />
                    <textarea name="message" required placeholder="How can we help you?" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C5A267] h-28 resize-none"></textarea>
                    <button type="submit" disabled={loading} className="w-full bg-gradient-to-l from-[#F1C376] to-[#B68744] text-white py-4 rounded-xl font-bold tracking-[2px] uppercase text-[11px] shadow-md hover:shadow-xl transition-all cursor-pointer disabled:opacity-50">
                      {loading ? "SUBMITTING..." : "Submit Enquiry"}
                    </button>
                    {result && <p className="text-red-500 text-sm text-center">{result}</p>}
                  </form>
                </>
              ) : (
                <div className="py-10 text-center flex flex-col items-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-500 mb-4">
                    <FiCheckCircle size={60} />
                  </motion.div>
                  <h3 className="text-2xl font-serif text-black mb-2">Thank You!</h3>
                  <p className="text-gray-500 text-sm">Your enquiry has been submitted successfully. Our team will contact you shortly.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FAQSection;
