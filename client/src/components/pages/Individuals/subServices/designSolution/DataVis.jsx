import React from "react";
import {
  BreadCrumbs,
  CTAButton,
  Navbar,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { dataV1, dataV2, dataV3, dataV4 } from "../../../../../assets/images";
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
const DataVis = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Design Solutions", url: "/services/design-solutions" },
    {
      displayName: "Data Visualization",
      url: "/services/design-solutions/data-visualization",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Effective Data Visualization Services | Mélange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Boost insights using our data visualisation solutions. Clear, engaging, and informative designs for better decision-making. Get in touch with Mélange Digital now!"
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/4-9fda439d.png"
        ></meta>
        <meta
          property="og:title"
          content="Effective Data Visualization Services | Mélange Digital"
        ></meta>
        <meta
          property="og:description"
          content="Boost insights using our data visualisation solutions. Clear, engaging, and informative designs for better decision-making. Get in touch with Mélange Digital now!"
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/design-solutions/data-visualization"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Turn your Data into Business with Our Data Visualization Service
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[79%]">
            At Mélange, our mission is to distill complex information into
            clear, concise, and visually stunning representations that empower
            your data as a dynamic tool to drive valuable insights, engagement,
            and growth.
          </p>
          <div className="-mt-2">
            <GetinTouch />
          </div>
        </div>
        <div className="py-5 md:py-10">
          <h2 className="text-xl lg:leading-9 md:text-[32px] w-auto lg:w-[70%] font-semibold multiverse-text mb-2">
            We build strong visual identities for brands by focusing on the
            following key areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={dataV1}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-[16px] my-1 lg:text-[20px] lg:mt-5 lg:mb-1">
                Data Exploration & Analysis
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We dive deep into your data, extracting meaningful patterns and
                trends. Our team of data experts employs advanced analytics
                techniques and tools like Tableau, Microsoft BI and Google
                Charts to uncover hidden insights that aid informed
                decision-making.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={dataV2}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Design & Storytelling
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                Our designers create engaging visualizations that effectively
                convey your story through data. Whether it's corporate reports,
                presentations, visualization dashboards, we enable you to
                uncover patterns and make data-driven decisions with confidence.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={dataV3}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Interactive & User Friendly Visualisations
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We go beyond static visuals and create interactive data
                visualizations that allow users to explore the data themselves.
                With intuitive navigation and user-friendly interfaces, we
                ensure that your audience can interact with the data and uncover
                insights effortlessly.
              </p>
            </div>

            <div className="bg-white box-shadow p-6 md:p-10">
              <img
                src={dataV4}
                alt=""
                className="w-8 h-8 lg:w-auto lg:h-auto"
              />
              <h3 className="font-bold text-[16px] my-1  lg:text-[20px] lg:mt-5 lg:mb-1">
                Customization & Branding
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-auto lg:w-[100%]">
                We understand the importance of maintaining brand consistency.
                Our designers tailor the data visualizations to align with your
                brand guidelines, ensuring a cohesive and professional look that
                resonates with your audience.
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
              <div className="flex font-semibold  my-2 multiverse-textmultiverse-text text-xs md:text-sm">
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

export default DataVis;
