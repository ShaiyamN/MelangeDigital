import React from "react";
import {
  BreadCrumbs,
  CTAButton,
  Navbar,
  GetinTouch,
  Footer,
} from "../../../../layout";
import {
  subimage1,
  subimage2,
  subimage3,
  subimage4,
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
  servicesImage,
  servicesImage1,
} from "../../../../../assets/caseImages";
import { Helmet } from "react-helmet-async";

const MarketResearch = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Brand Strategy", url: "/services/brand-strategy" },
    {
      displayName: "Market Research",
      url: "/services/brand-strategy/market-research",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Data-driven Market Research Agency in India"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Navigate markets strategically with our comprehensive market research service. Get data-driven insights for informed business decisions."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/1-dcbbbc53.png"
        ></meta>
        <meta
          property="og:title"
          content="Data-driven Market Research Agency in India "
        ></meta>
        <meta
          property="og:description"
          content="Navigate markets strategically with our comprehensive market research service. Get data-driven insights for informed business decisions."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/brand-strategy/market-research"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito text-base md:text-lg px-6 md:px-16 lg:px-28 font-semibold pt-24  md:pt-16 lg:pt-32 mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16  lg:px-28 lg:pb-6 ">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Best Market Research Service
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            We believe that understanding the world surrounding your brand is
            the key to unlocking its true potential. That's why we employ a
            three-pronged approach that takes us on a journey of discovery.
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
              <img
                src={subimage1}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Industry Research
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We dive deep into the intricacies of your industry, to analyse
                the trends, market dynamics, and emerging opportunities. By
                staying at the forefront of industry advancements, we ensure
                that your brand remains agile and adaptable.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={subimage2}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Category Research
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We zoom in on your specific category, meticulously studying the
                competition, consumer preferences, and market nuances. This
                enables us to identify unexplored territories, untapped
                potential, and unique selling propositions that drive your
                brand's digital growth.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={subimage3}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Product Research
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                As your digital growth agency we conduct in-depth research to
                understand their features, benefits, and how they resonate with
                your target audience. This helps us position them effectively
                and highlight their value proposition in a way that truly
                resonates.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={subimage4}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Customer Satisfaction Surveys
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We gauge customer satisfaction and gather valuable feedback
                through our customized surveys. We help you gain insights into
                customer sentiment, pinpoint opportunities for enhancement, and
                elevate the overall quality of your customer experience.
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

export default MarketResearch;
