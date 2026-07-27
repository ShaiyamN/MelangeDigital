import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ServiceFaq = () => {
  const faqs = [
    {
      question: "What Digital Marketing Services does Mélange Digital offer?",
      answer:
        "Mélange Digital offers 7+ core service areas: Brand Strategy & Planning, Influencer Marketing, Immersive Brand Storytelling, Design & Development, Content Strategy & Production, SEO, Social Media, PR, IPs & Outreach and more. Each service is delivered by dedicated specialists to help growing brands build a consistent and high-impact digital presence.",
    },
    {
      question: "How does Mélange Digital merge technology and talent for brand growth?",
      answer:
        "Mélange Digital combines data-driven technology tools — including Google, Meta, WordPress, and Shopify — with creative talent across strategy, design, content, and PR. This integrated approach ensures that every campaign is both analytically informed and creatively compelling, driving measurable brand growth.",
    },
    {
      question: "Can Mélange Digital handle all my brand's marketing needs under one roof?",
      answer:
        "Yes. Mélange Digital is a full-service integrated marketing communications agency. From brand strategy and content production to influencer partnerships, SEO, web design, and PR — our teams manage the entire marketing function, removing the need to coordinate multiple agencies and ensuring a consistent brand voice across every channel.",
    },
    {
      question: "Does Mélange Digital work with international brands?",
      answer:
        "Yes. Mélange Digital operates globally with dedicated presences in India, United Kingdom, UAE, Singapore, and Africa. We have delivered campaigns for internationally recognised clients including Costa Cruises, Resorts World Cruises, Singapore Tourism Board, and Sharjah Tourism, making us a strong partner for brands with cross-border marketing needs.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "Most clients see measurable improvements in organic traffic within 3 to 6 months. Competitive markets may take 6 to 12 months for significant gains. We set clear milestone targets — technical health, content coverage, and backlink authority — so progress is visible well before major ranking jumps.",
    },
    {
      question: "Do I retain ownership of my ad accounts and data?",
      answer:
        "Always. You own your Google Ads, Meta Business Manager, and all platform accounts. You own your analytics data, creative assets, and any technology we set up. We operate as trusted partners with access — never as gatekeepers who control your digital infrastructure.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div>
      <div className="lg:px-20 px-5 lg:pt-0 lg:pb-20 pt0 pb-20 flex justify-center font-bricolage">
        <div className="lg:w-[800px]">
          <section>
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
                      <FiChevronUp className="w-5 h-5 shrink-0" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 shrink-0" />
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

export default ServiceFaq;
