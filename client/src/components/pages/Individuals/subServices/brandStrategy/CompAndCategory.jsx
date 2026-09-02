import React from "react";
import {
  BreadCrumbs,
  CTAButton,
  Navbar,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { cc1, cc2, cc3, cc4 } from "../../../../../assets/images";
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

const CompAndCategory = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Brand Strategy", url: "/services/brand-strategy" },
    {
      displayName: "Competition & Category Benchmarking",
      url: "/services/brand-strategy/competition-category-benchmarking",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Competition Category Benchmarking Get a Strategic Analysis Today!"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="By evaluating your brand strategy against the competition. Gain knowledge to make more educated decisions. Improve your market standing right now."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/1-dcbbbc53.png"
        ></meta>
        <meta
          property="og:title"
          content="Competition Category Benchmarking Get a Strategic Analysis Today!"
        ></meta>
        <meta
          property="og:description"
          content="By evaluating your brand strategy against the competition. Gain knowledge to make more educated decisions. Improve your market standing right now."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/brand-strategy/competition-category-benchmarking"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito text-base md:text-lg px-6 md:px-16 lg:px-28 font-semibold pt-24  md:pt-16 lg:pt-32 mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6  pb-3 md:px-16 md:pb-16  lg:px-28 lg:pb-6">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Outshine the Competition with Benchmarking Strategies
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            In today's fast-paced and ever-evolving business landscape, staying
            ahead of the competition is paramount. And we help you achieve this
            with deep understanding & strategic analysis of your category &
            competition.
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
              <img src={cc1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Category Benchmarking
              </h3>
              <p className="text-sm md:text-[18px] leading-6 w-[100%]">
                We grasp your market's size, growth trends, and consumer
                behavior. This unveils market gaps, competitive advantages, and
                positions your brand perfectly. It serves as the foundation for
                effective brand building strategies.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={cc2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Competition Analysis
              </h3>
              <p className="text-sm md:text-[18px] leading-6 w-[100%]">
                We deeply analyze your direct and indirect competitors,
                revealing insights on their strengths, weaknesses, offerings,
                pricing, distribution channels, and market share. This sharpens
                your value proposition, enabling impactful marketing strategies
                to thrive.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={cc3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Performance Metrics Comparison
              </h3>
              <p className="text-sm md:text-[18px] leading-6 w-[100%]">
                Numbers tell a story, and our performance metrics comparison
                offers a data-driven narrative. We analyze KPIs such as market
                share, customer acquisition costs, etc, allowing you to gauge
                your performance relative to competitors and strategize
                accordingly.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={cc4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Customer Experience Assessment
              </h3>
              <p className="text-sm md:text-[18px] leading-6 w-[100%]">
                Delivering exceptional customer experiences sets you apart in a
                crowded market. We dive into customer touchpoints, from
                pre-purchase interactions to post-purchase support. We help you
                uncover insights to enhance customer satisfaction and loyalty.
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

export default CompAndCategory;
