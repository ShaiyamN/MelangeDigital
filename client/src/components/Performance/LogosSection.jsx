import React from "react";
import {
  vita,
  xyxx,
  wow,
  kapiva,
  sleepyCat,
  zouk,
  nestroot,
  chm,
  powerGummies,
  justHerbs,
  costa,
  snitch,
  leftImg,
  meta,
  googleAds,
  shopify,
  VectorSpread2,
  VectorSpread,
  leftImgGif,
  VectorSpread3,
  VectorSpread4,
  bodywise,
  namhya,
  trueElements,
  superSmelly,
  ustra,
} from "../../assets/performancePage";
import { Link } from "react-router-dom";

const LogosSection = () => {
  return (
    <div className="lg:px-20 px-5 py-20 font-bricolage max-container">
      <div className="">
        <p className="lg:text-[26px] text-[22px] lg:leading-[32px] leading-[24px] font-bricolage text-[#3949D3] font-bold text-center">
          40+ Brand Teams trust us to Drive Growth that <br /> Actually Moves The
          Needle
        </p>

        <div className="pt-20 space-y-10 lg:space-y-20">
          {/* Group 1 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-center">
            <img src={vita} alt="" className="lg:w-[200px]" />
            <img src={xyxx} alt="xyxx" className="lg:w-[190px]" />
            <img src={kapiva} alt="kapiva" className="lg:w-[200px]" />
            <img src={wow} alt="wow" className="lg:w-[190px]" />
          </div>

          {/* Group 2 */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 items-center lg:px-40">
            <img src={sleepyCat} alt="sleepy Cat" className="lg:w-[200px]" />
            <img src={zouk} alt="Zouk" className="lg:w-[200px]" />
            <img src={nestroot} alt="Nest root" className="lg:w-[200px]" />
          </div>

          {/* Group 3 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-center lg:px-20 ">
            <img src={chm} alt="Chm" className="lg:w-[80px]" />
            <img
              src={powerGummies}
              alt="Power Gummies"
              className="lg:w-[180px]"
            />
            <img
              src={justHerbs}
              alt="JustHerbs"
              className="lg:w-[230px]"
            />
            <img src={snitch} alt="snitch" className="lg:w-[200px] w-[160px]" />
          </div>
          {/* Group 4 */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-center lg:px-20 ">
            <img src={superSmelly} alt="Chm" className="lg:w-[150px]" />
            <img src={ustra} alt="Power Gummies" className="lg:w-[140px]" />
            <img src={trueElements} alt="JustHerbs" className="lg:w-[130px] " />
            <img src={namhya} alt="costa" className="lg:w-[150px]" />
          </div>*/}

          {/* Group 5 */}
          {/* <div className="flex justify-center gap-10 items-center lg:px-20 ">
            <img src={snitch} alt="snitch" className="lg:w-[200px] w-[160px]" />
            <img
              src={bodywise}
              alt="snitch"
              className="lg:w-[200px] w-[160px]"
            />
          </div>*/}
        </div>

        <p className="lg:text-[26px] text-[22px] lg:leading-[32px] leading-[24px] font-bricolage text-[#3949D3] font-bold text-center lg:pt-32 pt-20">
          10+ Years of Combined Expertise, <br />
          Backed by Meta, Google and Shopify
        </p>

        <div className="lg:pt-20 pt-16 lg:px-32 px-20">
          <div className="bg-[#D9D9D9] lg:w-full h-[350px] lg:h-[107px] rounded-[69px] border shadow-xl flex lg:flex-row flex-col lg:space-y-0  space-y-10 lg:justify-between items-center lg:px-20 py-10 ">
            <img src={meta} alt="" className="lg:w-[150px] w-[100px]" />
            <img src={googleAds} alt="" className="lg:w-[150px] w-[100px]" />
            <img src={shopify} alt="" className="lg:w-[150px] w-[100px]" />
          </div>
        </div>

        <div className="flex justify-center items-center lg:pt-24 pt-16">
          <Link to="/contact">
            <button className="lg:w-[140px] w-[110px] lg:h-[50px] h-[52px] rounded-md bg-[#3949D3] hover:bg-[#781FEF] text-white lg:text-[18px] text-[16px] font-semibold">
              {" "}
              Lets Chat
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:pt-32 pt-20">
        <div className="">
          <p className="lg:text-[26px] text-[22px] lg:leading-[32px] leading-[24px] font-bricolage text-[#3949D3] font-bold text-center">
            Scaling Revenue isn’t Rocket Science. <br className="lg:hidden" />{" "}
            <span className="lg:text-[26px] text-[22px] lg:leading-[32px] leading-[24px]">
              {" "}
              It’s a System{" "}
            </span>
          </p>
          <p className="lg:text-[20x] text-[18px] lg:leading-[24px] leading-[20px]font-bricolage text-center pt-3">
            And We’ve Done It In Under 3 Months
          </p>
        </div>
        <div className="lg:flex items-center lg:pt-20 pt-10">
          <div className="lg:w-[50%] flex items-center justify-center relative">
            <img src={leftImgGif} alt="" className="w-[500px] z-10" />

            <img
              src={VectorSpread4}
              alt=""
              className="absolute left-0  w-[900px] "
            />
          </div>
          <div className="lg:w-[50%] lg:mt-0 mt-10">
            <div className="">
              <p className="text-[26px] leading-[32px] lg:text-left text-center font-bricolage text-[#3949D3] font-bold ">
                De-Risking Growth & <br /> Guaranteeing Results
              </p>
              <p className="lg:text-[20px] text-[18px] lg:text-left text-center leading-[24px] font-bricolage  pt-3">
                Too many agencies promise, but we prefer proof. We’re here to
                end the “we tried an agency, didn’t work” story. That’s why we
                offer performance-linked models. If we don’t move your revenue
                numbers, we don’t take a rupee.
              </p>
            </div>
            <div className="pt-16">
              <p className="text-[26px] leading-[32px] lg:text-left text-center font-bricolage text-[#3949D3] font-bold ">
                Not Just Ads. We Engineer Outcomes
              </p>
              <p className="lg:text-[20px] text-[18px] lg:text-left text-center leading-[24px] font-bricolage  pt-3">
                We don’t throw media budgets at vanity metrics. Our strategies
                are designed to directly influence your P&L - not just
                impressions. Whether it's doubling ROAS, cutting CAC in half, or
                generating qualified leads at scale, every campaign is tracked,
                optimised, and tied to what matters: business results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosSection;
