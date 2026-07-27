import React from "react";
import {
  bt1,
  bt2,
  bt3,
  icon1,
  icon2,
  icon3,
  icon4,
} from "../../assets/performancePage";

const BetterResult = () => {
  const features = [
    {
      title: "We Drive Accountability In Growth",
      description:
        "Our teams don’t just run ads. We challenge founders and CMOs to think bigger and support them with actionable plans to execute that vision.",
      img: bt1,
    },
    {
      title: "Strategic Business Thinking",
      description:
        "We translate data into insight, and insight into business moves. If it doesn’t impact revenue, we don’t waste time on it.",
      img: bt2,
    },
    {
      title: "Communication You Can Rely On",
      description:
        "Fast responses. Clear timelines. No silos. You’ll never be left wondering what’s happening. We bring proactive clarity to every touchpoint.",
      img: bt3,
    },
  ];

  const reasons = [
    {
      icon: icon1,
      title: "Deep eCommerce DNA",
      description:
        "We’ve built and scaled our own D2C brands so we get what it means to chase targets, manage ROAS and make tough calls fast.",
    },
    {
      icon: icon2,
      title: "Growth At Every Stage",
      description:
        "Whether you're post-product-market-fit or pre-Series A, we’ve scaled brands at every level from ₹1L/month to ₹1Cr/month and beyond.",
    },
    {
      icon: icon3,
      title: "Cross-Industry Best Practices",
      description:
        "From beauty to tech, F&B to fashion, we don’t guess. We bring tested plays from other industries to give your brand an unfair edge.",
    },
    {
      icon: icon4,
      title: "We Test On Ourselves First",
      description:
        "Our creative frameworks and growth tactics are first run on our own internal brands so we only bring you what already works.",
    },
  ];
  return (
    <div className="font-bricolage">
      <section className="bg-white lg:pt-16 lg:pb-24 pb-0 px-6 lg:px-24 relative max-container ">
        {/* Header */}
        <div className="mb-8">
          <h2 className="lg:text-[26px] text-[24px] leading-[26px] font-semibold text-[#781FEF]">
            Great Results. Even Better Experience
          </h2>
          <p className=" mt-2 lg:text-[20px] text-[14px] leading-[16px]">
            Because smooth processes make scaling stress-free
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden transition hover:shadow-lg"
            >
              <img src={feature.img} alt="" />
              <div className="p-5">
                <h3 className="font-semibold text-[18px] leading-[22px]  mb-2">
                  {feature.title}
                </h3>
                <p className="text-[14px] leading-[18px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional dot background */}
        <div className="absolute right-0 top-0 h-full w-1/4 bg-[radial-gradient(circle,_#e0e0e0_1px,_transparent_1px)] [background-size:10px_10px] opacity-30 pointer-events-none" />
      </section>

      <section className="bg-[#EEEAEA29] py-28  relative">
        <div className="max-container px-6 md:px-12 lg:px-24">
          {/* Section Header */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div>
              <p className="text-sm font-medium text-purple-500">Why Us?</p>
              <h2 className="lg:text-[30px] text-[24px] lg:leading-[36px] leading-[28px] font-semibold text-gray-800 mt-1">
                Why High-Growth Brands <br /> Choose Us
              </h2>
            </div>
            <p className="text-[16px] leading-[22px] lg:block hidden">
              Insurance provides a safety net that helps individuals and
              businesses manage financial risks and recover from unforeseen
              events. Whether it's a medical emergency.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition"
              >
                <div className="shrink-0">
                  <img
                    src={reason.icon}
                    alt=""
                    className="lg:w-[40px] w-[30px]"
                  />
                </div>
                <div>
                  <h3 className="lg:text-[18px] text-[16px] leading-[20px] font-semibold  mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-[14px] leading-[20px] text-[#6E7982]">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BetterResult;
