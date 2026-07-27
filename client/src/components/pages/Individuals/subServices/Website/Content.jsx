import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { con1, con2, con3, con4 } from "../../../../../assets/images";
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

const Content = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Website Development & SEO",
      url: "/services/website-development-seo",
    },
    {
      displayName: "Content",
      url: "/services/website-development-seo/content",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Compelling Content for Website Development | Mélange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Crafting engaging website content to captivate your audience. Elevate your online presence with Mélange Digital's content services."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/6-14ebd3d4.png"
        ></meta>
        <meta
          property="og:title"
          content="Compelling Content for Website Development | Mélange Digital"
        ></meta>
        <meta
          property="og:description"
          content="Crafting engaging website content to captivate your audience. Elevate your online presence with Mélange Digital's content services."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/website-development-seo/content"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Get Content That Converts
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[78%]">
            We craft compelling content that connects & converts. From
            informative blog posts, captivating product descriptions, to
            persuasive landing page copy, we ensure that every word speaks
            directly to your audience and drives them to take action.
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
              <img src={con1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Competition Benchmarking
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our team dives deep into your competitors' websites to study
                what's working best in your industry. With these valuable
                insights and strategic approach, we customize your website to
                meet your business goals & give you an edge over your
                competitors.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={con2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Keyword Research
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We dig deep into your industry to find the most popular and
                relevant keywords that your customers are searching for. By
                strategically incorporating these keywords into your website's
                content, we rank your website higher in search engine results.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={con3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                SEO Friendly
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our team knows the secret sauce of creating content that both
                humans and search engines love. We craft keyword optimized
                content that is engaging, informative, and speaks directly to
                your audience, keeping them hooked and coming back for more.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={con4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Blog and Article Creation
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Establish authority and engage your audience with insightful
                blog posts and articles. Our writers delve into industry trends,
                crafting informative and thought-provoking content that
                showcases your expertise and keeps visitors coming back for
                more.
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

export default Content;
