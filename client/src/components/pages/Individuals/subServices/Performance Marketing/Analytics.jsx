import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { ana1, ana2, ana3, ana4 } from "../../../../../assets/images";
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

const Analytics = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Performance Marketing",
      url: "/services/performance-marketing",
    },
    {
      displayName: "Analytics",
      url: "/services/performance-marketing/analytics",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Performance Marketing Analytics | Data Insights | Mélange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Performance marketing analytics can provide you with practical insights. Improve your success strategies. Contact us today now!"
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/5-f184ff01.png"
        ></meta>
        <meta
          property="og:title"
          content="Performance Marketing Analytics | Data Insights | Mélange Digital"
        ></meta>
        <meta
          property="og:description"
          content="Performance marketing analytics can provide you with practical insights. Improve your success strategies. Contact us today now!"
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/performance-marketing/analytics"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Data Analytics Solutions
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            The real success of ad campaigns lies in their data analytics! As
            your performance marketing agency we dive deep into your campaign
            data to extract valuable information about audience behavior, ad
            performance, and overall campaign effectiveness, delivering tangible
            results.
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
              <img src={ana1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Data visualisation
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our skilled data analysts and designers create impactful
                visualizations. Whether you need to track KPIs, analyze sales
                trends, or monitor user behavior, our data visualizations
                empower you to make data-driven decisions with confidence.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ana2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Insights & Reporting
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our skilled analysts examine your data, trends, and
                opportunities. Through interactive and visually compelling
                reports, we present these insights in a digestible manner,
                making it easy for you to grasp the bigger picture and take
                strategic actions.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ana3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                ROI Analysis
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                ROI is a critical metric for any business, and our team studies
                the performance of your campaigns and initiatives. By comparing
                the costs incurred with the generated revenue, we provide you
                with clear insights into the success of the campaigns.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ana4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Custom Analytics Solutions
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We don't believe in one-size-fits-all solutions. Our team is
                equipped to create tailored solutions to address your unique
                challenges. Whether you need assistance with data integration,
                tracking setup, or specialized analysis, we've got you covered.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold">
            Performance Marketing Case Studies
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-0 lg:mt-8 md:mt-2 pb-4 lg:pb-12">
            <Link to="/work/makemytrip" className="my-4 md:my-0">
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

export default Analytics;
