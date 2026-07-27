import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { be1, be2, be3, be4 } from "../../../../../assets/images";
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

const BrandExp = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Brand Strategy", url: "/services/brand-strategy" },
    {
      displayName: " Brand Experience",
      url: "/services/brand-strategy/brand-experience",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Experience our Brand Experience Service!"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Our brand experiences captivate audiences, foster loyalty, and drive success. Discover more at Melange Digital."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/1-dcbbbc53.png"
        ></meta>
        <meta
          property="og:title"
          content="Experience our Brand Experience Service!"
        ></meta>
        <meta
          property="og:description"
          content="Our brand experiences captivate audiences, foster loyalty, and drive success. Discover more at Melange Digital."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/brand-strategy/brand-experience"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito text-base md:text-lg px-6 md:px-16 lg:px-28 font-semibold pt-24  md:pt-16 lg:pt-32 mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Brand Audit Experience Service
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[78%]">
            At Mélange Digital, we understand that brand experience is not just
            about creating memorable moments, but about forging a deep and
            lasting connection with your audience that inspires loyalty.
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
              <img src={be1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1 lg:text-[20px] lg:mt-5 lg:mb-1">
                Brand Essence
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We dive deep into the core of your brand, unveiling its purpose,
                values, and vision. By harmonizing your brand key, tagline,
                vision, and mission, we create a cohesive essence that resonates
                throughout your customer journey.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={be2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1 lg:text-[20px] lg:mt-5 lg:mb-1">
                Brand Personality
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We unravel your brand's unique character by defining the
                distinctive traits and attributes that encapsulate its voice,
                tone, and style. This creates a memorable and relatable brand
                persona that consistently reflects across all touchpoints.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={be3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Positioning
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We carve a distinct position for your brand. By emphasizing
                unique strengths and differentiators, we ensure success and
                create a compelling narrative that resonates with your audience
                & drives digital growth.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={be4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Experiential Campaigns
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Our experiential campaigns combine creativity and strategy to
                create interactive events, pop-ups, activations, and digital
                experiences that leave a lasting impact and foster a strong
                emotional connection with your brand.
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

export default BrandExp;
