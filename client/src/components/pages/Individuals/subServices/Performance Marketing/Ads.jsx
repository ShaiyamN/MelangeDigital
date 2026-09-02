import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { ads1, ads2, ads3, ads4 } from "../../../../../assets/images";
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

const Ads = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Performance Marketing",
      url: "/services/performance-marketing",
    },
    {
      displayName: "Ads",
      url: "/services/performance-marketing/ads",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Strategic Ad Campaigns for Growth | Mélange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Maximize ROI with our targeted ad campaigns. Expert performance marketing strategies for increased visibility and conversions. Explore our services at Mélange Digital."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/5-f184ff01.png"
        ></meta>
        <meta
          property="og:title"
          content="Strategic Ad Campaigns for Growth | Mélange Digital"
        ></meta>
        <meta
          property="og:description"
          content="Maximize ROI with our targeted ad campaigns. Expert performance marketing strategies for increased visibility and conversions. Explore our services at Mélange Digital."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/performance-marketing/ads"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Your Digital Advertising Service
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            In a world flooded with information and content, effectively
            reaching your customers requires communicating what they want to
            hear at the right moment. By leveraging human & data-driven
            insights, we craft and execute a winning strategy for your business.
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
              <img src={ads1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Social Ads
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We leverage the power of social media to connect your business
                with its ideal audience. Our experts execute strategic ads
                through spot-on targeting, compelling ad creatives, and
                data-driven optimization to increase engagement, conversions &
                drive digital growth.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ads2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Search Ads
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Search ads enable you to present your brand's offerings to
                individuals who are already interested in the category you
                specialize in. With extensive keyword research, compelling CTAs,
                & ad structures, we drive quality leads for your business
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ads3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Display & Shopping Ads
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Expand your brand's reach across diverse websites, captivating
                potential customers throughout their online journey. Using
                platforms like Google Shopping, we optimize product listings,
                descriptions, and bidding strategies to maximize conversions.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ads4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Retargeting and Remarketing
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We re-engage users who have previously interacted with your
                brand through strategic retargeting and remarketing campaigns.
                We create personalized ads that remind potential customers of
                your offerings and encourage them to return and convert.
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

export default Ads;
