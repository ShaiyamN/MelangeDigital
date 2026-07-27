import React from "react";
import {
  rev1,
  rev2,
  rev3a,
  rev3b,
  rev3c,
  rev4,
  rev5,
  VectorSpread3,
} from "../../assets/performancePage";

const Revenue = () => {
  return (
    <div className="font-bricolage lg:pt-32 pt-28 pb-20 lg:px-36 px-5 relative bg-[#EEEAEA29]">
      <div className="max-container">
        <h2 className="lg:text-[26px] text-[24px] lg:leading-[32px] leading-[28px] font-semibold text-blue-700 text-center">
          We Don’t Do Vanity Metrics. Only Real Revenue.
        </h2>

        <div className="py-12 px-0 md:px-16 lg:px-24 relative ">
          <div className="mb-6">
            <p className="text-[9px] uppercase tracking-widest text-gray-400">
              Case Study
            </p>
            <p className="lg:text-[18px] text-[16px] font-semibold text-gray-800 mt-1">
              EdTech – Global B2C & B2B Learning Solutions <br />
            </p>
            <p className="lg:text-[24px] text-[20px] lg:leading-[26px] leading-[22px] font-semibold text-[#3949D3] mt-0">
              ₹50L–₹75L/month budget → ROAS 3.65x, Lead Quality ↑ from 12% to
              45%, Conversions ↑ from 0.77% to 2.86%
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-10 items-start">
            {/* Left: Image Placeholder */}

            <div className="lg:w-[50%]">
              <img src={rev1} alt="" />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between lg:w-[50%] lg:pt-0 pt-10">
              <div>
                <h3 className="mt-0 mb-2 lg:text-[20px] text-[18px] font-semibold">
                  Work Brief:
                </h3>
                <p className="lg:text-[18px]  lg:leading-[26px] text-[16px] leading-[22px]">
                  The client, an education technology provider, aimed to acquire
                  high-quality leads and paying customers across India, the USA,
                  and the UK, both in B2C and B2B segments. With an average
                  product value of ₹1L, they needed a sharp full-funnel
                  marketing strategy across multiple digital platforms. <br />{" "}
                  <br />
                  Our role was to build and optimize custom campaigns for every
                  platform—Meta, Google (Search, PMax, Demand Gen), LinkedIn,
                  Quora, Reddit, Bing—while aligning messaging with regional and
                  audience-specific behavior. Within weeks, lead quality jumped
                  from 12% to 45%. Conversion rates leaped from 0.77% to 2.86%.
                  Most importantly, a ROAS of 3.65x was achieved through precise
                  targeting, cross-team collaboration, and constant data
                  iteration.
                </p>
              </div>

              {/* Button */}
              {/*<div className="mt-6">
                <button className="bg-purple-600 text-white text-sm font-medium px-6 py-2 rounded-full flex items-center gap-2 hover:bg-purple-700 transition">
                  Learn More
                  <span className="text-lg">→</span>
                </button>
              </div>*/}
            </div>
          </div>
        </div>

        <div className="py-12 px-0 md:px-16 lg:px-24 relative ">
          <div className="mb-6">
            <p className="text-[9px] uppercase tracking-widest text-gray-400">
              Case Study
            </p>
            <p className="lg:text-[18px] text-[16px] font-semibold text-gray-800 mt-1">
              Real Estate – Premium Residential Properties
              <br />
            </p>
            <p className="lg:text-[24px] text-[20px] lg:leading-[26px] leading-[22px] font-semibold text-[#3949D3] mt-0">
              ₹3–4 Cr/month budget → Meta: Quality Leads ↑ from 10.73% to
              17.13%, Google: ↑ from 12.76% to 15.44%
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-10 items-start">
            {/* Left: Image Placeholder */}

            <div className="lg:w-[50%]">
              <img src={rev2} alt="" />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between lg:w-[50%] lg:pt-0 pt-10">
              <div>
                <h3 className="mt-0 mb-2 lg:text-[20px] text-[18px] font-semibold">
                  Work Brief:
                </h3>
                <p className="lg:text-[18px]  lg:leading-[26px] text-[16px] leading-[22px]">
                  This real estate brand deals in premium homes priced between
                  ₹3–5 Cr. Our mission was to generate serious buyer leads, not
                  just passive interest. <br /> <br />
                  Through full-funnel campaigns on Meta and Google, we redefined
                  the brand’s media mix with intent-first messaging and
                  segmented targeting. Meta lead quality went from 10.73% to
                  17.13%. Google campaigns scaled even better, improving lead
                  quality from 12.76% to 15.44%. Across the board, our execution
                  reduced acquisition inefficiencies and created a sustainable
                  pipeline of high-intent buyers.
                </p>
              </div>

              {/* Button */}
              {/*<div className="mt-6">
                <button className="bg-purple-600 text-white text-sm font-medium px-6 py-2 rounded-full flex items-center gap-2 hover:bg-purple-700 transition">
                  Learn More
                  <span className="text-lg">→</span>
                </button>
              </div>*/}
            </div>
          </div>
        </div>

        <div className="py-12 px-0 md:px-16 lg:px-24 relative ">
          <div className="mb-6">
            <p className="text-[9px] uppercase tracking-widest text-gray-400">
              Case Study
            </p>
            <p className="lg:text-[18px] text-[16px] font-semibold text-gray-800 mt-1">
              Financial Services – Demat Account & Investment Platforms
              <br />
            </p>
            <p className="lg:text-[24px] text-[20px] lg:leading-[26px] leading-[22px] font-semibold text-[#3949D3] mt-0">
              ₹3–3.5 Cr/month budget → CPS down by up to 75%, Sales ↑ by 3x
              using just 20% of spend
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-10 items-start">
            {/* Left: Image Placeholder */}

            <div className="lg:w-[50%]">
              <img src={rev3a} alt="" />
              <img src={rev3b} alt="" className="lg:pt-40" />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between lg:w-[50%] lg:pt-0 pt-10">
              <div>
                <h3 className="mt-0 mb-2 lg:text-[20px] text-[18px] font-semibold">
                  Work Brief:
                </h3>
                <p className="lg:text-[18px]  lg:leading-[26px] text-[16px] leading-[22px]">
                  We worked with India’s leading stockbroking and investment
                  apps to drive mass-scale Demat account openings and app-based
                  engagement. With a historically high cost per sale
                  (₹10,000–₹16,000), the client needed a drastic shift in
                  efficiency. <br /> <br />
                  We rolled out a platform-specific strategy across Meta and
                  Google—hyper-targeting audiences, optimizing creatives, and
                  simplifying user journeys. The results were staggering. CPS
                  fell from ₹10,000 to ₹2,500 in app campaigns and from ₹16,000
                  to ₹4,500 on Meta. With only 20% of the previous budget, we
                  tripled sales, proving performance isn’t just about spend, but
                  sharp execution.
                </p>
              </div>

              <div className="">
                <img src={rev3c} alt="" className="xxl:pt-40 lg:pt-0 pt-5" />
              </div>

              {/* Button */}
              {/*<div className="mt-6">
                <button className="bg-purple-600 text-white text-sm font-medium px-6 py-2 rounded-full flex items-center gap-2 hover:bg-purple-700 transition">
                  Learn More
                  <span className="text-lg">→</span>
                </button>
              </div>*/}
            </div>
          </div>
        </div>

        <div className="py-12 px-0 md:px-16 lg:px-24 relative ">
          <div className="mb-6">
            <p className="text-[9px] uppercase tracking-widest text-gray-400">
              Case Study
            </p>
            <p className="lg:text-[18px] text-[16px] font-semibold text-gray-800 mt-1">
              Sports & Fitness – MMA Training & Programs
              <br />
            </p>
            <p className="lg:text-[24px] text-[20px] lg:leading-[26px] leading-[22px] font-semibold text-[#3949D3] mt-0">
              UD $4.5M–$5.5M spend → AUD $7M–$8.5M revenue, 50% profit growth
              YoY
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-10 items-start">
            {/* Left: Image Placeholder */}

            <div className="lg:w-[50%]">
              <img src={rev4} alt="" />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between lg:w-[50%] lg:pt-0 pt-10">
              <div>
                <h3 className="mt-0 mb-2 lg:text-[20px] text-[18px] font-semibold">
                  Work Brief:
                </h3>
                <p className="lg:text-[18px]  lg:leading-[26px] text-[16px] leading-[22px]">
                  A leading MMA brand engaged us to build their global digital
                  growth engine. Their goals: grow memberships, sell online
                  programs, and dominate their niche with a performance-driven
                  brand voice. <br /> <br />
                  Our full-funnel strategy blended paid, organic, and retention
                  channels. Google, Meta, Quora, and DV360 drove paid
                  visibility. SEO, email, and content drove loyalty. 20–25% of
                  sales came from organic traffic. Direct traffic accounted for
                  10–15%. The result? 150 Index growth and seamless synergy
                  across all channels—earning them not just short-term revenue,
                  but long-term authority.
                </p>
              </div>

              {/* Button */}
              {/*<div className="mt-6">
                <button className="bg-purple-600 text-white text-sm font-medium px-6 py-2 rounded-full flex items-center gap-2 hover:bg-purple-700 transition">
                  Learn More
                  <span className="text-lg">→</span>
                </button>
              </div>*/}
            </div>
          </div>
        </div>

        <div className="py-12 px-0 md:px-16 lg:px-24 relative ">
          <div className="mb-6">
            <p className="text-[9px] uppercase tracking-widest text-gray-400">
              Case Study
            </p>
            <p className="lg:text-[18px] text-[16px] font-semibold text-gray-800 mt-1">
              D2C – Consumer Products
              <br />
            </p>
            <p className="lg:text-[24px] text-[20px] lg:leading-[26px] leading-[22px] font-semibold text-[#3949D3] mt-0">
              ROAS from 2.0 → 4.25 in 3 months → 6.28 with creative revamp
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-10 items-start">
            {/* Left: Image Placeholder */}

            <div className="lg:w-[50%]">
              <img src={rev5} alt="" />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between lg:w-[50%] lg:pt-0 pt-10">
              <div>
                <h3 className="mt-0 mb-2 lg:text-[20px] text-[18px] font-semibold">
                  Work Brief:
                </h3>
                <p className="lg:text-[18px]  lg:leading-[26px] text-[16px] leading-[22px]">
                  This D2C brand wanted scalable, profitable growth. They had
                  consistent ad spend but lacked efficiency, stuck at a ROAS of
                  2.0. <br /> <br />
                  We split the project into two sprints. Phase 1: Performance
                  optimization—better targeting, feed clean-up, performance
                  dashboards, and real-time budget mapping. Result: ROAS hit
                  4.25 in 3 months. Phase 2: Creative-led growth—story-driven
                  UGC videos, offer-led content, rapid A/B testing, and
                  freshness cycles. With this, we hit 6.28 ROAS. What began as a
                  performance revamp ended in a brand-led transformation that
                  scaled profitably.
                </p>
              </div>

              {/* Button */}
              {/*<div className="mt-6">
                <button className="bg-purple-600 text-white text-sm font-medium px-6 py-2 rounded-full flex items-center gap-2 hover:bg-purple-700 transition">
                  Learn More
                  <span className="text-lg">→</span>
                </button>
              </div>*/}
            </div>
          </div>
        </div>

        <img
          src={VectorSpread3}
          alt=""
          className="absolute left-0 top-[50rem] -z-10 w-[500px] rotate-180"
        />
      </div>
    </div>
  );
};

export default Revenue;
