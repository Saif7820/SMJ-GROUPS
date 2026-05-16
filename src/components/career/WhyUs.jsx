import React from "react";
import {
  Users,
  TrendingUp,
  Briefcase,
  Award,
} from "lucide-react";

const whyUsData = [
  {
    icon: <Users size={34} />,
    title: "Collaborative Culture",
    description:
      "Work with a supportive team that values your input and ideas",
  },
  {
    icon: <TrendingUp size={34} />,
    title: "Growth Opportunities",
    description:
      "Learn and grow in the dynamic real estate industry",
  },
  {
    icon: <Briefcase size={34} />,
    title: "Diverse Projects",
    description:
      "Gain exposure to various responsibilities and challenges",
  },
  {
    icon: <Award size={34} />,
    title: "Meaningful Impact",
    description:
      "Contribute to developments that shape the city's future",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-[#f8f8f8] py-14 md:py-20 px-5">
      <div className="max-w-[1080px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[#0f172a] text-[35px] md:text-[50px] font-serif font-[500] leading-tight">
            Why Join Us?
          </h2>

          <div className="w-3 h-3 bg-[#C8A03B] rounded-full mx-auto mt-3"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {whyUsData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white border border-[#efe5cf] rounded-[20px] px-7 py-8 min-h-[230px] shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)] group"
            >

              {/* Top Right Circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#faf7ef] rounded-full translate-x-1/2 -translate-y-1/2"></div>

              {/* Icon Box */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#f7f3e8] flex items-center justify-center text-[#be972f] shadow-sm">
                {item.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-6">
                <h3 className="text-[#1f2937] text-[21px] md:text-[23px] font-serif font-[500] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#4b5563] text-[15px] md:text-[16px] leading-[28px] font-[400]">
                  {item.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-[#fffdf8] to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;