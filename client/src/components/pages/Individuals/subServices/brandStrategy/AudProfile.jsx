import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { ap1, ap2, ap3, ap4 } from "../../../../../assets/images";
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

const AudProfile = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Brand Strategy", url: "/services/brand-strategy" },
    {
      displayName: "Audience Profiling",
      url: "/services/brand-strategy/audience-profiling",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="	Audience Profiling: Elevate Your Brand Strategy"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Gain insights into your target audience with our audience profiling services. Refine your brand strategy for maximum impact. Contact us now!"
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/1-dcbbbc53.png"
        ></meta>
        <meta
          property="og:title"
          content="Audience Profiling: Elevate Your Brand Strategy"
        ></meta>
        <meta
          property="og:description"
          content="Gain insights into your target audience with our audience profiling services. Refine your brand strategy for maximum impact. Contact us now!"
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/brand-strategy/audience-profiling"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito text-base md:text-lg px-6 md:px-16 lg:px-28 font-semibold pt-24  md:pt-16 lg:pt-32 mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6  pb-3 md:px-16 md:pb-16  lg:px-28 lg:pb-6">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Audience Development & Profiling Services
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            Your customers are the lifeline of your brand. By diving into their
            world and decoding their desires, we establish an unbreakable
            connection that transforms them from mere observers to passionate
            advocates of your brand.
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
              <img src={ap1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Target Audience Analysis
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We craft branding strategies based on extensive research of your
                audience's characteristics and needs. We leverage the power of
                surveys, interviews and market research tools to gather valuable
                data, ensuring a thorough understanding.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ap2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Segmentation
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We segment audiences into distinct cohorts based on
                demographics, psychographics, behaviors, and preferences. With a
                deep understanding of each segment's nuances, we create
                personalized strategies that truly connect on a personal level.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ap3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Communication
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We collaborate with you to define your brand’s unique voice and
                craft messaging that speaks directly to your target audience. We
                ensure that every piece of communication aligns with the values,
                aspirations, and pain points of your target audience.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ap4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Purchase Journey Mapping
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Visualize your audience's journey from awareness to conversion.
                We map out key touchpoints, decision-making stages, and
                potential roadblocks, helping you streamline the customer
                experience and guide them smoothly through the sales funnel.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold">
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

export default AudProfile;
