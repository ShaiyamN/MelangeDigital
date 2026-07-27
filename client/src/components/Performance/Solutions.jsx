import React, { useState } from "react";
import {
  solutionLeft,
  VectorSpread,
  VectorSpread3,
} from "../../assets/performancePage";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is a creative agency?",
    answer:
      "A creative agency is a company that provides a range of services to help businesses with branding, advertising, marketing, and design.",
  },
  {
    question: "How does a creative agency differ from?",
    answer:
      "A creative agency is a company that provides a range of services to help businesses with branding, advertising, marketing, and design.",
  },
  {
    question: "Why might a business choose to work?",
    answer:
      "A creative agency is a company that provides a range of services to help businesses with branding, advertising, marketing, and design.",
  },
  {
    question: "How do creative agencies charge for their services?",
    answer:
      "A creative agency is a company that provides a range of services to help businesses with branding, advertising, marketing, and design.",
  },
];

const Solutions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <div className="font-bricolage pt-20 lg:px-20 px-5 relative bg-[#EEEAEA29] ">
      <div className="max-container">
        <div className="lg:flex items-center lg:space-x-20 justify-between  ">
          <div className="lg:w-[50%]">
            <img src={solutionLeft} alt="" />
          </div>

          <div className="lg:w-[50%]">
            <section className="">
              <h1 className="lg:text-[28px] text-[22px] font-bold mb-6">
                How we fix it
              </h1>

              {/*<div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full lg:text-[20px] text-[16px] flex justify-between items-center text-left py-3 font-semibold text-black"
                    >
                      {faq.question}
                      {openIndex === index ? (
                        <FiChevronUp className="w-5 h-5" />
                      ) : (
                        <FiChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    {openIndex === index && (
                      <p className="text-gray-500 pb-3 lg:text-sm text-[12px] w-[90%]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>*/}

              <div className="space-y-5 text-gray-500">
                <p className="border-b border-gray-400 py-4">
                  1. Our systems are built for profitable scaling - not vanity
                  reach. We know when and where to scale, not just how.
                </p>
                <p className="border-b border-gray-400 py-4">
                  2. We reverse-engineer creative formats from past conversions.
                  No guesswork, only proven playbooks.
                </p>
                <p className="border-b border-gray-400 py-4">
                  3. We don't test randomly. We test what matters - and we test
                  with volume, velocity, and intent.
                </p>
              </div>

              <Link to="/contact">
              <button className="lg:mt-16 mt-10 lg:w-[140px] w-[120px] lg:h-[52px] h-[52px] rounded-md bg-[#3949D3] hover:bg-[#781FEF] text-white lg:text-[16px] text-[16px] font-semibold">
                {" "}
               TALK TO US
              </button>
              </Link>
            </section>
          </div>
        </div>

        <div className=" lg:p-20 p-0 pt-20 lg:pt-28 hidden">
          <section className=" ">
            <div className="text-center mb-10">
              <h2 className="lg:text-[26px] text-[24px] lg:leading-[32px] leading-[28px] font-semibold text-blue-700">
                A Quick Glimpse into Wins We've Engineered
              </h2>
              <p className="mt-2 lg:text-[20px] text-[18px]">
                Some Of Our Case Studies
              </p>
            </div>

            <div className="lg:max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={`h-[300px] rounded-xl ${
                    index === 0 ? "" : "bg-gray-200"
                  } bg-gray-200`}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="">
          <img
            src={VectorSpread3}
            alt=""
            className="absolute right-0 top-[26rem] -z-10 w-[500px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
