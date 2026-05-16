import React, { useState } from "react"; // 1. useState import kiya
import { Mail, CheckCircle2 } from "lucide-react"; // 2. CheckCircle icon add kiya

const Apply = () => {
  // 3. State create ki submission track karne ke liye
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", "New Job Application");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
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
    <section className="bg-[#f8f8f8] py-14 md:py-20 px-5 relative min-h-[600px]">
      <div className="max-w-[700px] mx-auto">
        {/* Top Button */}
        <div className="flex justify-center mb-5">
          <button className="border border-[#d4b15a] text-[#b9912d] tracking-[6px] text-[12px] font-semibold px-7 py-2.5 rounded-full uppercase bg-white">
            Apply Now
          </button>
        </div>

        {/* Heading */}
        <div className="text-center mb-5">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Mail size={40} strokeWidth={1.7} className="text-[#111827]" />
            <h2 className="text-[#0f172a] text-[32px] md:text-[50px] leading-[1.1] font-serif font-[500]">
              Interested in working with us?
            </h2>
          </div>
          <div className="w-3 h-3 bg-[#C8A03B] rounded-full mx-auto mt-3"></div>
        </div>

        {/* Sub Text */}
        <p className="text-center text-[#4b5563] text-[16px] md:text-[17px] leading-[29px] mb-7 font-[400]">
          Share your details with us and take the next step toward building a rewarding career.
        </p>

        {/* Form Container */}
        <div className="bg-white rounded-[24px] shadow-[0_12px_35px_rgba(0,0,0,0.07)] border border-[#ececec] p-7 md:p-11 relative overflow-hidden">
          
          {/* 4. Agar submit nahi hua hai to Form dikhao */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-9 mb-9">
                <input type="text" name="firstName" placeholder="First Name *" required className="w-full border-b border-[#cfd4dc] bg-transparent pb-5 text-[15px] text-[#374151] placeholder:text-[#98a2b3] outline-none" />
                <input type="text" name="lastName" placeholder="Last Name *" required className="w-full border-b border-[#cfd4dc] bg-transparent pb-5 text-[15px] text-[#374151] placeholder:text-[#98a2b3] outline-none" />
                <input type="email" name="email" placeholder="Your Email *" required className="w-full border-b border-[#cfd4dc] bg-transparent pb-5 text-[15px] text-[#374151] placeholder:text-[#98a2b3] outline-none" />
                <input type="text" name="phone" placeholder="Phone No. *" required className="w-full border-b border-[#cfd4dc] bg-transparent pb-5 text-[15px] text-[#374151] placeholder:text-[#98a2b3] outline-none" />
              </div>

              <div className="mb-9">
                <label className="block text-[#374151] text-[16px] font-[600] mb-3">Experience *</label>
                <textarea name="experience" rows="6" placeholder="Tell us about your work experience..." required className="w-full rounded-[18px] border border-[#cfd4dc] px-5 py-5 text-[15px] text-[#374151] placeholder:text-[#98a2b3] outline-none resize-none"></textarea>
              </div>

              <div className="flex justify-center flex-col items-center">
                <button type="submit" disabled={loading} className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] via-[#B8862B] to-[#D4A056] text-white px-9 py-3 rounded-md text-[13px] md:text-[14px] font-semibold tracking-[1.5px] uppercase hover:opacity-90 transition-all duration-300 shadow-md disabled:opacity-50">
                  {loading ? "SUBMITTING..." : "Apply Now"}
                </button>
                {result && <p className="text-red-500 text-sm mt-4">{result}</p>}
              </div>
            </form>
          ) : (
            /* 5. Success Message (Jo aapki image mein hai) */
            <div className="py-10 text-center flex flex-col items-center animate-in fade-in zoom-in duration-300">
              <div className="w-12 h-12 bg-[#fdf8e6] rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={28} className="text-[#C8A03B]" />
              </div>
              
              <h3 className="text-[#0f172a] text-[30px] font-serif mb-4">Thank You!</h3>
              
              <div className="max-w-[300px]">
                <p className="text-[#64748b] text-[15px] leading-relaxed mb-1">Your application has been received.</p>
                <p className="text-[#64748b] text-[15px] leading-relaxed mb-8">We'll review your application and get back to you soon.</p>
              </div>

            <button 
  type="submit" 
  disabled={loading} 
  className="bg-gradient-to-r from-[#BF9628] to-[#D2AA7F] text-white px-9 py-3 rounded-md text-[13px] md:text-[14px] font-semibold tracking-[1.5px] uppercase hover:opacity-90 transition-all duration-300 shadow-md disabled:opacity-50"
>
  {loading ? "SUBMITTING..." : "Apply Now"}
</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Apply;
