import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { pc1, pc2, pc3, pc4 } from "../../../../../assets/images";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

const PaidCamp = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Ecommerce Management", url: "/services/ecommerce" },
    {
      displayName: "Paid Campaigns",
      url: "/services/ecommerce/paid-campaigns",
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
          href="https://melangedigital.co/services/ecommerce/paid-campaigns"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6  pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Paid Campaigns
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[78%]">
            Paid campaigns are the go-to to attract quality traffic and maximise
            online reach. By leveraging data-driven strategies, precise audience
            targeting, and captivating creatives, our experts create compelling
            ecommerce strategies to meet your business goals.
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
              <img src={pc1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1 lg:text-[20px] lg:mt-5 lg:mb-1">
                PPC
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Leverage the power of ppc services to strategically present your
                products or services to your ideal audience. Our campaigns use
                advanced targeting and captivating ads to convert potential
                customers into loyal buyers.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={pc2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Display & Video Ads
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                With accurate targeting, messaging, and visuals, we showcase
                your brand's offerings on relevant websites, apps, and video
                platforms. Through our strategic display and video advertising
                solutions, we help you drive valuable conversions.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={pc3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Remarketing
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
              <img src={pc4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Video Advertising
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Tell your brand story through compelling video ads. We create
                engaging video content that resonates with your audience's
                emotions and desires. We then optimize its distribution across
                platforms like YouTube to drive engagement and brand recall.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold">
            E-Commerce Management Case Studies
          </h2>

          <div className="flex flex-col md:flex-row justify-start mt-0 md:mt-4 pb-4 lg:pb-20">
            <Link to="/work/duvon" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate5} alt="" />
              <div className="flex font-semibold  my-2 text-[#5455FF] text-xs md:text-sm">
                <p className="mx-2 md:mx-3">Social Media</p>
                <p className="mx-2 md:mx-3">E-commerce</p>
                <p className="mx-2 md:mx-3">Website Development</p>
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
                <p className="mx-2 md:mx-3">E-commerce</p>
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

export default PaidCamp;
