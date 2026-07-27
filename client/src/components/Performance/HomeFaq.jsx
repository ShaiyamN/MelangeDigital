import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const HomeFaq = () => {
  const faqs = [
    {
      question: "What is Mélange Digital and what services does it offer?",
      answer:
        "Mélange Digital is an award-winning integrated marketing communications (IMC) agency based in Mumbai, India. We offer a full suite of digital marketing services under one roof: including SEO, Social Media Marketing, Performance Marketing, Content Creation, Graphic Design, Web Development, and Ecommerce Management, tailored for growing brands.",
    },
    {
      question: "How does Mélange Digital help growing brands online?",
      answer:
        "Mélange Digital specialises in growth by offering customised digital marketing plans that maximise impact within budget. From growth hacking strategies and SEO to paid ads and social media, our team designs data-driven campaigns that improve visibility, generate leads, and drive measurable ROI from day one.",
    },
    {
      question:
        "Why should I choose an integrated marketing agency over specialist agencies?",
      answer:
        "An integrated marketing agency like Mélange Digital gives you a unified brand voice across all channels — SEO, Social Media, Influencer Marketing, Content, Design, and Paid Media — coordinated by a single team. This eliminates communication gaps between vendors, ensures consistent messaging, and delivers faster execution compared to managing multiple specialist agencies.",
    },
    {
      question: "What industries does Mélange Digital work with?",
      answer:
        "Mélange Digital has worked with clients across industries including entertainment (Zee, Disney), travel and tourism (MakeMyTrip, Sharjah Tourism), education (Dhruvak Academy), lifestyle, e-commerce, and luxury hospitality (Deltin Royale). We cater to both emerging startups and established brands looking to scale their digital presence.",
    },
    {
      question:
        "What makes Mélange Digital different from other digital marketing agencies?",
      answer:
        "Three things set us apart: Global integration — strategy built for cross-border growth from day one. Full-stack in-house delivery — strategy, creative, media buying, and analytics under one roof. Data transparency — you own your accounts, data, and results always. We're operators, not gatekeepers.",
    },
    {
      question: "Does Mélange Digital offer performance marketing services?",
      answer:
        "Yes. Mélange Digital offers performance marketing services including paid search (Google Ads), paid social (Meta, LinkedIn, Instagram), and programmatic advertising. Our campaigns are optimised for specific KPIs such as cost-per-lead, ROAS, and conversions, making us suitable for brands looking for measurable, result-driven advertising.",
    },
    {
      question: "Can Mélange Digital manage my brand's social media accounts?",
      answer:
        "Yes. Mélange Digital provides end-to-end social media management — from strategy and content calendars to creative production, community management, and performance analytics. We manage profiles across platforms including Instagram, LinkedIn, Facebook, and YouTube, tailoring content to each channel's audience.",
    },
    {
      question: "Does Mélange Digital provide SEO services for small businesses?",
      answer:
        "Yes. Mélange Digital offers SEO services specifically designed for small and medium-sized businesses, including on-page optimisation, technical SEO audits, keyword strategy, link building, and local SEO. Our strategies are focused on driving organic traffic that converts, not just rankings.",
    },
    {
      question:
        "How long does it take to see results from digital marketing with Mélange Digital?",
      answer:
        "Timelines vary by service: SEO typically shows meaningful traction within 3–6 months, while paid media campaigns can generate results within the first 2–4 weeks. Social media growth and content marketing build progressively over 3–12 months. Mélange Digital sets clear KPIs and provides regular reporting so clients can track progress from month one.",
    },
    {
      question: "Which countries and regions does Mélange Digital serve?",
      answer:
        "We serve clients across South Asia (India), Southeast Asia (Singapore), the Middle East (UAE, Saudi Arabia), Europe (UK), and South Africa (Zambia). We have multilingual capabilities and local market expertise in each region.",
    },
  ];

  const [sectionOpen, setSectionOpen] = useState(true);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="lg:px-20 px-5 lg:pt-12 lg:pb-20 pt-0 pb-20 flex justify-center font-bricolage">
      <div className="lg:w-[800px] w-full">
        <section className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
          {/* Main Section Tab */}
          <button
            onClick={() => setSectionOpen(!sectionOpen)}
            className="w-full flex justify-between items-center text-left px-5 lg:px-6 py-4 lg:py-5 bg-[#f8f8f8] hover:bg-[#f2f2f2] transition"
          >
            <h2 className="lg:text-[28px] text-[22px] leading-[28px] font-semibold text-black">
              Frequently Asked Questions
            </h2>

            {sectionOpen ? (
              <FiChevronUp className="w-6 h-6 text-black shrink-0" />
            ) : (
              <FiChevronDown className="w-6 h-6 text-black shrink-0" />
            )}
          </button>

          {/* Entire FAQ Section Opens/Closes */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              sectionOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 lg:px-6 py-2 lg:py-3">
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full lg:text-[18px] text-[16px] leading-[24px] flex justify-between items-center text-left py-4 font-medium text-black gap-4"
                    >
                      <span>{faq.question}</span>

                      {openIndex === index ? (
                        <FiChevronUp className="w-5 h-5 shrink-0" />
                      ) : (
                        <FiChevronDown className="w-5 h-5 shrink-0" />
                      )}
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? "max-h-[500px] opacity-100 pb-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-sm leading-[22px] w-[95%]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeFaq;