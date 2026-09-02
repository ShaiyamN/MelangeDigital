import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { web1, web2, web3, web4 } from "../../../../../assets/images";
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

const Webdev = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Website Development & SEO",
      url: "/services/website-development-seo",
    },
    {
      displayName: "Website Development",
      url: "/services/website-development-seo/web-development",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        {/* <meta
          name="title"
          content="Get Seamless Website UI/UX Service | Mélange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Create user-centric websites with our UI/UX design services. Elevate user experience and engagement with Mélange Digital."
        /> */}
        <link
          rel="canonical"
          href="https://melangedigital.co/services/website-development-seo/web-development"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h2 className="text-hero font-display font-semibold py-2">
            Website Development
          </h2>
          <p className="text-body w-auto lg:w-[78%]">
            We are a new age web development agency that crafts visually
            stunning and user-friendly websites that drive engagement, and
            convert visitors into loyal customers
          </p>
          <div className="-mt-2">
            <GetinTouch />
          </div>
        </div>
        <div className="py-6 md:py-10">
          <h2 className="text-xl md:text-[32px] w-auto lg:w-[65%] font-semibold lg:leading-9 multiverse-text pb-2">
            We elevate brand's online presence by focusing on the following key
            areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={web1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Wireframe
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our team meticulously designs intuitive and user-focused
                wireframes, providing you with a clear roadmap for your website.
                We help you transform your visions into a concrete blueprint and
                streamline your development process.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={web2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Automation
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We leverage the power of automation to help your business gain a
                competitive edge in the market. Our automation specialists
                streamline & automate repetitive tasks, workflows, and lead
                management, saving you time and resources.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={web3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Analytics
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                As a leading digital marketing agency, we harness the power of
                data to optimize your campaigns and drive meaningful results.
                Our expert analysts track and measure key performance metrics,
                providing you with actionable data-driven recommendations.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={web4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-title my-1 lg:my-2">
                Integrations
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We ensure that your website functions flawlessly, giving your
                users the best experience possible, by integrating your
                e-commerce platform, payment gateways, customer support systems,
                or third-party applications as per your business requirements.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold">
            Website Development Case Studies
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-0 lg:mt-8 md:mt-2 pb-4 lg:pb-12">
            <Link to="/work/kunal-rathod" className="my-4 md:my-0">
              <img src={relate7} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px] ">
                <p>Website Development</p>
                <p className="mx-2 md:mx-3">SEO</p>
                <p>SEM</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Kunal Rathod
              </h2>
            </Link>
            <Link to="/work/proportunity" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate4} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px]">
                <p>Website Development</p>
                <p className="mx-2 md:mx-3">Performance Marketing</p>
                <p>Design</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Proportunity
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
      <CTAButton buttonName={"Request a Website Audit"} />
      <Footer />
    </div>
  );
};

export default Webdev;
