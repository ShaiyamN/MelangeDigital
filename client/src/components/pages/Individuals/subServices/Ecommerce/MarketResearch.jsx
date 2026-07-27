import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { ecoM1, ecoM2, ecoM3, ecoM4 } from "../../../../../assets/images";
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

const EcoMarket = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Ecommerce Management", url: "/services/ecommerce" },
    {
      displayName: "Market Research",
      url: "/services/ecommerce/market-research",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        {/* <meta
          name="title"
          content="Ecommerce Marketplace Management Services"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Our ecommerce marketplace management services will help you simplify operations. Optimise your internet presence and sales."
        /> */}
        <link
          rel="canonical"
          href="https://melangedigital.co/services/ecommerce/market-research"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-6 ">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Market Research
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[78%]">
            We don't settle for generic marketing. To leave impactful footprints
            and achieve tangible results, delving into research is vital. As
            your e commerce agency, we study your market, customers, and
            competition.
          </p>
          <div className="-mt-2">
            <GetinTouch />
          </div>
        </div>
        <div className="py-5 md:py-10">
          <h2 className="text-xl lg:leading-9 md:text-[32px] w-auto lg:w-[75%] font-semibold multiverse-text mb-2">
            We help brands succeed in the e-commerce space by focusing on the
            following key areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ecoM1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1 lg:text-[20px] lg:mt-5 lg:mb-1">
                Primary Research
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We delve deep into your target audience, utilizing surveys,
                interviews, focus groups, and customer feedback to obtain sharp,
                accurate, and firsthand insights. With these learnings, our e
                commerce marketing helps your brand to beat the competition.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ecoM2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Competitive Analysis
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We conduct competitor analysis, evaluating factors such as
                product offerings & market positioning. By identifying the gap
                between target audience needs and current offerings, we help
                your brand to have a competitive edge over others.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ecoM3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Market Trends
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                To excel in the ever-changing digital landscape, is to stay
                updated with the latest trends in ecommerce and digital
                marketing to meet the new demands of the market. We help you
                innovate and adjust to the evolving market, ensuring sustained
                success.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={ecoM4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Pricing Analysis
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We help you to make data-driven pricing decisions by analyzing
                pricing dynamics, and evaluating competitor strategies. Our
                expertise enables you to strike a balance between customer
                satisfaction and business growth.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold">
            E-Commerce Management Case Studies
          </h2>

          <div className="flex flex-col md:flex-row justify-start mt-0 md:mt-4 pb-4 lg:pb-20">
            <Link to="/work/duvon" className="my-4 md:my-0 mr-0 md:mr-8">
              <img src={relate5} alt="" />
              <div className="flex font-semibold  my-2 text-[#5455FF] text-xs md:text-sm">
                <p className="">Social Media</p>
                <p className="mx-2 md:mx-3">E-commerce</p>
                <p className="">Website Development</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Duvon Disney
              </h2>
            </Link>
            <Link to="/work/kalon" className="my-4 md:my-0">
              <img src={relate8} alt="" />
              <div className="flex font-semibold  my-2 text-[#5455FF] text-xs md:text-sm">
                <p className="whitespace-nowrap">Brand Strategy</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p className="">E-commerce</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Kalon
              </h2>
            </Link>
            {/* <Link to="/work/sportzvillage" className="my-4 md:my-0">
              <img src={relate11} alt="" />
              <div className="flex font-semibold  my-2 text-[#5455FF] text-xs md:text-sm">
                <p>Brand Strategy</p>
                <p className="mx-2 md:mx-3">Design</p>
                <p>Web Development</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
              Sportz Village
              </h2>
            </Link> */}
          </div>
        </div>
      </div>
      <CTAButton buttonName={"Request an E-commerce Strategy"} />
      <Footer />
    </div>
  );
};

export default EcoMarket;
