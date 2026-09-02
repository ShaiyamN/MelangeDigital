import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { dc1, dc2, dc3, dc4 } from "../../../../../assets/images";
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

const DtoC = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Ecommerce Management", url: "/services/ecommerce" },
    {
      displayName: "D2C",
      url: "/services/ecommerce/d2c",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Direct-to-Consumer (D2C) Ecommerce Solutions"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Get our direct-to-consumer ecommerce services to streamline your brand's direct sales strategy. Effectively communicate with customers."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/3-86d73e66.png"
        ></meta>
        <meta
          property="og:title"
          content="Direct-to-Consumer (D2C) Ecommerce Solutions"
        ></meta>
        <meta
          property="og:description"
          content="Get our direct-to-consumer ecommerce services to streamline your brand's direct sales strategy. Effectively communicate with customers."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/ecommerce/d2c"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-6">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Your Direct-to-Customer(D2C) Service
          </h2>
          <p className="text-body w-auto lg:w-[79%]">
            The future of retail is D2C. Our expertise has empowered 20+
            startups to establish their own D2C presence, driving sales and
            profit growth. With ecommerce marketing, we drive your digital
            growth.
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
              <img src={dc1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Website Development
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Our team collaborates to craft a visually captivating and
                user-friendly website, showcasing your products and services
                with precision. We ensure maximum conversions, transforming
                visitors into loyal customers through an exceptional user
                experience.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={dc2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Automation
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Automation is the key to accelerating D2C growth. We help you
                streamline and optimize your business processes. By leveraging
                cutting-edge technology we automate repetitive tasks such as
                order fulfillment, inventory management, customer support.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={dc3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Analytics
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Gain a competitive edge in the D2C landscape with the power of
                analytics. Our experts delve into your data, uncovering trends
                and patterns that reveal untapped opportunities for growth. With
                these insights, we optimize strategies, ensuring continuous
                success.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={dc4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:mt-5 lg:mb-1">
                Customer Engagement and Retention
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Build lasting relationships with your D2C customers. We
                implement engagement and retention strategies, such as loyalty
                programs, personalized recommendations, and post-purchase
                follow-ups, to encourage repeat purchases and advocacy.
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

export default DtoC;
