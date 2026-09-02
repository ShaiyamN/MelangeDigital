import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { ba1, ba2, ba3, ba4 } from "../../../../../assets/images";
import { Link } from "react-router-dom";
import {
  relate10,
  relate2,
  relate3,
  relate4,
  relate5,
  relate6,
  relate8,
  relate9,
  servicesImage,
  servicesImage1,
} from "../../../../../assets/caseImages";
import { Helmet } from "react-helmet-async";

const BrandAudit = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Brand Strategy", url: "/services/brand-strategy" },
    {
      displayName: "Brand Audit",
      url: "/services/brand-strategy/brand-audit",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Best Brand Audit Service - Get Suggestions with Our Experts"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Our brand audit analyze strengths and areas for growth, shaping a winning strategy."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/1-dcbbbc53.png"
        ></meta>
        <meta
          property="og:title"
          content="Best Brand Audit Service - Get Suggestions with Our Experts"
        ></meta>
        <meta
          property="og:description"
          content="Our brand audit analyze strengths and areas for growth, shaping a winning strategy. "
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/brand-strategy/brand-audit"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito text-base md:text-lg px-6 md:px-16 lg:px-28 font-semibold pt-24  md:pt-16 lg:pt-32 mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-6 ">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            The Only Brand Audit Service you need
          </h2>
          <p className="text-body w-auto lg:w-[76%]">
            A thorough brand audit is the cornerstone of an effective brand
            strategy. With a comprehensive assessment of your brand's current
            state, we uncover valuable insights and identify areas for
            improvement.
          </p>
          <div className="-mt-2">
            <GetinTouch />
          </div>
        </div>
        <div className="py-5 md:py-10">
          <h2 className="text-xl lg:leading-9 md:text-[32px] w-auto lg:w-[68%] font-semibold multiverse-text mb-2">
            We build strong brands by focusing on the following key areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ba1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Brand Positioning Analysis
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We analyse your brand's position in the market, assessing how
                well it differentiates itself from competitors and resonates
                with your target audience. With this, we lay the groundwork for
                strategic enhancements that set your brand apart.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ba2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Visual Identity Evaluation
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                With an in-depth evaluation of your brand's visual identity,
                including your logo, color palette, typography, and overall
                design consistency, we delve deep into whether your visuals
                accurately reflect your brand's personality and capture the
                interest of your audience.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ba3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Content Assessment
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We review your messaging on website, social media, marketing
                materials, and customer communications. We assess clarity,
                consistency, and effectiveness, refining it to resonate with
                your target audience and enhance your brand communication.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ba4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Brand Experience Analysis
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We evaluate the customer journey, assessing interactions across
                multiple channels and platforms. We create a seamless experience
                for your customers at every stage, enhancing your brand's
                overall customer journey.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold ">
            Brand Strategy Case Studies
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-0 md:mt-4 pb-4 lg:pb-20">
            <Link to="/work/sportz-village-xp" className="my-4 md:my-0">
              <img src={relate2} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-sm">
                <p className="whitespace-nowrap">Thought Leadership</p>
                <p className="mx-2 md:mx-3">Performance Marketing</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Sportz Village XP
              </h2>
            </Link>
            <Link to="/work/dhruvak" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate3} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-sm">
                <p>B2C Launch</p>
                <p className="mx-2 md:mx-3">Performance Marketing</p>
                <p>Social Media</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Dhruvak
              </h2>
            </Link>
            <Link to="/work/costa-cruises" className="my-4 md:my-0">
              <img src={relate10} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-sm ">
                <p>Brand Strategy</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>Web Development</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Costa Cruises
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <CTAButton buttonName={"Request a Brand Audit"} />
      <Footer />
    </div>
  );
};

export default BrandAudit;
