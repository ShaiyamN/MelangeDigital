import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import {
  branding1,
  branding2,
  branding3,
  branding4,
} from "../../../../../assets/images";
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
  relate11,
  servicesImage,
  servicesImage1,
} from "../../../../../assets/caseImages";
import { Helmet } from "react-helmet-async";

const Branding = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Design Solutions", url: "/services/design-solutions" },
    {
      displayName: "Branding",
      url: "/services/design-solutions/branding",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Creative & Strategic Branding Solutions"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Our complete branding services will help you to elevate your brand. Create a distinct and memorable identity that speaks to your target audience."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/4-9fda439d.png"
        ></meta>
        <meta
          property="og:title"
          content="Creative & Strategic Branding Solutions"
        ></meta>
        <meta
          property="og:description"
          content="Our complete branding services will help you to elevate your brand. Create a distinct and memorable identity that speaks to your target audience."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/design-solutions/branding"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16  lg:px-28 lg:pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Professional Business Branding Services
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[78%]">
            Branding extends beyond the tangible aspects of a business and
            delves into the realm of emotional and psychological connections
            that consumers have with your brand.
          </p>
          <div className="-mt-2">
            <GetinTouch />
          </div>
        </div>
        <div className="py-5 md:py-10">
          <h2 className="text-xl lg:leading-9 md:text-[32px] w-auto  lg:w-[60%] font-semibold multiverse-text mb-2">
            We build strong visual identities for brands by focusing on the
            following key areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={branding1}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-[16px] my-1 lg:text-[20px] lg:mt-5 lg:mb-1">
                Brand Strategy and Positioning
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We start by immersing ourselves into your business, industry,
                and target market to develop a strategic brand roadmap. Our team
                conducts thorough market research, competitor analysis, and
                audience profiling to define your unique value proposition and
                positioning.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={branding2}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Visual Identity and Design
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                From logo and identity designing to typography, colour palettes,
                and graphic assets, we create a visual identity that represents
                your brand's personality and resonates with your audience. We
                ensure consistency across all brand touchpoints.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={branding3}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Brand Messaging & Storytelling
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                With our design services we ensure that we deliver compelling
                brand messaging and visual storytelling that articulates your
                brand's values and unique story. We develop a consistent brand
                voice that engages your audience to leave a lasting impact.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={branding4}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Brand Experience and Engagement
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We design seamless and engaging customer journeys that
                strategically integrate your brand across various touchpoints.
                From initial brand awareness to post-purchase interactions, we
                create cohesive experiences that captivate your audience.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold">
            Design Solutions Case Studies
          </h2>

          <div className="flex flex-col md:flex-row justify-between mt-0 md:mt-4 pb-4 lg:pb-20">
            <Link to="/work/kalon" className="my-4 md:my-0">
              <img src={relate8} alt="" />
              <div className="flex font-semibold  my-2 multiverse-text text-xs md:text-sm">
                <p className="whitespace-nowrap">Brand Strategy</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p className="mx-2 md:mx-3">E-commerce</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Kalon
              </h2>
            </Link>

            <Link to="/work/proportunity" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate4} alt="" />
              <div className="flex font-semibold  my-2 multiverse-text text-xs md:text-sm">
                <p className="mx-2 md:mx-1">Website Development</p>
                <p>Performance Marketing</p>
                <p>Design</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Proportunity
              </h2>
            </Link>
            <Link to="/work/sportz-village" className="my-4 md:my-0">
              <img src={relate11} alt="" />
              <div className="flex font-semibold  my-2 multiverse-text text-xs md:text-sm">
                <p>Brand Strategy</p>
                <p className="mx-2 md:mx-3">Design</p>
                <p>Web Development</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Sportz Village
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <CTAButton buttonName={"Request a Design Audit"} />
      <Footer />
    </div>
  );
};

export default Branding;
