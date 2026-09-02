import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { m1, m2, m3, m4 } from "../../../../../assets/images";
import { Link } from "react-router-dom";
import {
  relate1,
  relate10,
  relate2,
  relate3,
  relate4,
  relate5,
  relate6,
  relate7,
  relate8,
  relate9,
  servicesImage,
  servicesImage1,
} from "../../../../../assets/caseImages";
import { Helmet } from "react-helmet-async";

const Media = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Performance Marketing",
      url: "/services/performance-marketing",
    },
    {
      displayName: "Media Buying & Planning",
      url: "/services/performance-marketing/media-buying-planning",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Strategic Media Buying & Planning | Mélange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Increase your effect with experienced media buying and planning. Strategies that are tailored to achieve the best results. Mélange Digital offers a variety of services."
        />
        <link
          rel="canonical"
          href="https://melangedigital.co/services/performance-marketing/media-buying-planning"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Media Buying & Planning
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            We help your business achieve growth and enhance visibility in the
            dynamic digital landscape. Navigate the complexities of media buying
            and planning with our cutting-edge strategies, data-driven insights
            and industry expertise.
          </p>
          <div className="-mt-2">
            <GetinTouch />
          </div>
        </div>
        <div className="py-6 md:py-10">
          <h2 className="text-xl md:text-[32px] w-auto lg:w-[65%] font-semibold lg:leading-9 multiverse-text pb-2">
            We increase your ROI by focusing on the following key areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={m1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Media Plan
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We delve deep into understanding your target audience, their
                online behaviors, and preferences, to craft a tailored media
                plan for your business. We help you identify optimal advertising
                channels and placements that maximize your brand's reach.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={m2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Campaign Optimisation
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Executing a strategic campaign is only half the battle won. We
                delve into insights, audience behavior to continuously optimize
                our campaigns and always bring the A-game in terms of A/B
                testing, creative refinement, and targeting adjustments.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={m3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Distribution
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                As your performance marketing agency, we strategically
                distribute your marketing content across various channels,
                including social media platforms, online publications, and
                relevant networks, reaching your audience where they are most
                active.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={m4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Programmatic Advertising
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We leverage cutting-edge algorithms to pinpoint distinct
                audiences, ensuring your ads are seamlessly delivered in
                real-time across diverse platforms. This automated approach
                optimizes efficiency, amplifies reach, and elevates your brand's
                visibility.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold">
            Performance Marketing Case Studies
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-0 lg:mt-8 md:mt-2 pb-4 lg:pb-12">
            <Link to="/work/make-my-trip" className="my-4 md:my-0">
              <img src={relate1} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px] ">
                <p>Performance Marketing</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>Activations</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                MakeMyTrip Holidays
              </h2>
            </Link>
            <Link to="/work/zee5" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate9} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px]">
                <p>B2C</p>
                <p className="mx-2 md:mx-3">Performance Marketing</p>
                <p>Social Media</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Zee5
              </h2>
            </Link>

            <Link to="/work/duvon" className="my-4 md:my-0">
              <img src={relate5} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px]">
                <p className="whitespace-nowrap">Social Media</p>
                <p className="whitespace-nowrap mx-2 md:mx-3">E-commerce</p>
                <p className="">Website Development</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Duvon Disney
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <CTAButton buttonName={"Request an Ad Audit"} />
      <Footer />
    </div>
  );
};

export default Media;
