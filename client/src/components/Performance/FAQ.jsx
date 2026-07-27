import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const faqs = [
    {
      question: "What results can Melange Digital achieve through performance marketing?",
      answer:
        "At Melange Digital, we consistently deliver measurable ROI, averaging 4.8X Return on Ad Spend (ROAS) across our client portfolio. We focus on reducing your customer acquisition costs, increasing lifetime value, and driving sustainable revenue growth through data-driven campaigns.",
    },
    {
      question: "Which platforms does Melange Digital specialize in for performance marketing?",
      answer:
        "We specialize in Meta (Facebook & Instagram), Google Ads, YouTube, LinkedIn, and TikTok. Our expertise includes precise targeting, strategic budgeting, conversion optimization, and creative that aligns closely with your brand's goals and audience.",
    },
    {
      question: "How soon can we expect results from a performance marketing campaign?",
      answer:
        "Typically, our clients begin to see meaningful improvements within the first 2–4 weeks. However, maximum impact and optimization generally occur within 60–90 days, allowing our strategies to gather sufficient data and achieve peak performance.",
    },
    {
      question: "What sets Melange Digital apart from other performance marketing agencies?",
      answer:
        "Melange Digital uniquely blends creative storytelling with deep analytical expertise. We leverage integrated communications, advanced analytics, continuous testing, and performance-focused content to ensure your marketing efforts translate directly into business growth, proven by our 90% client retention rate.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <div>
      <div className="lg:px-20 px-5 lg:pt-32 lg:pb-20 pt-10 pb-20 flex justify-center font-bricolage">
        <div className=" lg:w-[800px]">
          <section className="">
            <h1 className="lg:text-[28px] text-[24px] leading-[28px] font-semibold mb-6">
              Frequently Asked Questions
            </h1>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full lg:text-[20px] text-[18px] leading-[24px] flex justify-between items-center text-left py-3 font-semibold text-black"
                  >
                    {faq.question}
                    {openIndex === index ? (
                      <FiChevronUp className="w-5 h-5" />
                    ) : (
                      <FiChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  {openIndex === index && (
                    <p className="text-gray-500 pb-3 text-sm leading-[18px] w-[90%]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
