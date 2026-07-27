import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { mp1, mp2, mp3, mp4 } from "../../../../../assets/images";
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

const MarketPlace = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "E-commerce Management", url: "/services/ecommerce" },
    {
      displayName: "Marketplace Management",
      url: "/services/ecommerce/marketplace-management",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Ecommerce Marketplace Management Services"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Our ecommerce marketplace management services will help you simplify operations. Optimise your internet presence and sales."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/3-86d73e66.png"
        ></meta>
        <meta
          property="og:title"
          content="Ecommerce Marketplace Management Services"
        ></meta>
        <meta
          property="og:description"
          content="Our ecommerce marketplace management services will help you simplify operations. Optimise your internet presence and sales."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/ecommerce/marketplace-management"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Marketplace Management Service in India
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[80%]">
            Marketplace management plays a crucial role in the ecommerce digital
            marketing. From optimizing product listings and pricing to expertly
            managing customer reviews, we take care of every aspect for you.
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
              <img src={mp1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1 lg:text-[20px] lg:mt-5 lg:mb-1">
                Listing
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Our team of marketplace experts excels in understanding the
                unique intricacies of each platform. With their expertise, we
                optimize product titles, descriptions, keywords, and images,
                ensuring they are tailored to maximize conversions.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={mp2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Product Content Creation
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We are modern day e commerce agency that helps you craft
                irresistible descriptions, curates A+ content, and uses
                compelling visuals. Stand out from the competition, leaving a
                lasting impression on shoppers with our tailored approach to
                product content.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={mp3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                SaaS Integration
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                SaaS integration streamlines inventory, sales & order
                fulfillment for efficient marketplace management. We help you
                connect accounts, centralize data, sync inventory, orders, and
                customer info across platforms, all in one dashboard.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={mp4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Brand Store Development
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                A well-designed and user-friendly brand store is essential for
                establishing a solid presence on online marketplaces. We combine
                creativity & functionality to create a memorable shopping
                experience for customers that is true to your brand identity.
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

export default MarketPlace;
