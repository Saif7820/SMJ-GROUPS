import React from "react";

const Grow = () => {
  return (
    <section className="bg-[#f8f8f8] py-14 md:py-16 px-5 md:px-10">
      <div className="max-w-4xl mx-auto">

        {/* Top Paragraphs */}
        <div className="mb-16">
          <p className="text-[#374151] text-[18px] md:text-[19px] leading-[30px] mb-6 font-[400]">
            At SMJ Group, we believe great spaces are built by great
            people. As one of Lucknow's growing real estate developers,
            we have consistently delivered thoughtfully planned
            residential developments that blend modern living with
            timeless design.
          </p>

          <p className="text-[#374151] text-[18px] md:text-[19px] leading-[30px] font-[400]">
            Our journey is driven by a clear vision — to create
            sustainable, well-connected communities that enhance
            everyday life. Over the years, our commitment to quality,
            transparency, and customer trust has helped us build a
            strong legacy in the real estate sector.
          </p>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[#0f172a] text-[34px] md:text-[52px] leading-tight font-serif font-[500]">
            Grow With the Team
          </h2>

          <div className="w-3 h-3 bg-[#C8A03B] rounded-full mx-auto mt-3"></div>
        </div>

        {/* Intro Paragraph */}
        <p className="text-[#374151] text-[18px] md:text-[19px] leading-[30px] mb-8 font-[400]">
          We are always looking for passionate, forward-thinking
          professionals who are ready to make an impact. If you enjoy
          problem-solving, value collaboration, and are motivated to grow
          both personally and professionally, you'll feel right at home
          with us.
        </p>

        {/* Belief Section */}
        <div className="mb-8">
          <h3 className="text-[#111827] text-[28px] md:text-[34px] font-serif font-[500] mb-5">
            At SMJ Group, we believe:
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="w-2.5 h-2.5 bg-[#C8A03B] rounded-full mt-3"></span>
              <p className="text-[#374151] text-[18px] md:text-[19px] leading-[30px] font-[400]">
                Strong teamwork builds stronger projects
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="w-2.5 h-2.5 bg-[#C8A03B] rounded-full mt-3"></span>
              <p className="text-[#374151] text-[18px] md:text-[19px] leading-[30px] font-[400]">
                Fresh ideas help us improve our processes
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="w-2.5 h-2.5 bg-[#C8A03B] rounded-full mt-3"></span>
              <p className="text-[#374151] text-[18px] md:text-[19px] leading-[30px] font-[400]">
                Individual growth and company growth go hand in hand
              </p>
            </li>
          </ul>
        </div>

        {/* Bottom Paragraph */}
        <p className="text-[#374151] text-[18px] md:text-[19px] leading-[30px] font-[400]">
          Whether you're an experienced professional or someone eager to
          take the next step in your career, we offer an environment where
          your skills are valued and your efforts truly matter.
        </p>
      </div>
    </section>
  );
};

export default Grow;