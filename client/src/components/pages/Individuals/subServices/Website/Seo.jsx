import React from "react";
import {
  BreadCrumbs,
  Navbar,
  CTAButton,
  GetinTouch,
  Footer,
} from "../../../../layout";
import { seo1, seo2, seo3, seo4 } from "../../../../../assets/images";
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

const Seo = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    {
      displayName: "Website Development & SEO",
      url: "/services/website-development-seo",
    },
    {
      displayName: "SEO",
      url: "/services/website-development-seo/seo",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Get Affordable SEO Services at Melange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="	
          Improve rankings and drive traffic with our SEO services. Elevate your online presence with Mélange Digital's website development expertise."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/6-14ebd3d4.png"
        ></meta>
        <meta
          property="og:title"
          content="Get Afforable SEO Services at Melange Digital "
        ></meta>
        <meta
          property="og:description"
          content="Improve rankings and drive traffic with our SEO services. Elevate your online presence with Mélange Digital's website development expertise."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/website-development-seo/seo"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6  pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Your Professional SEO Service
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[78%]">
            We not only create websites that are highly functional but also make
            them easily discoverable by your target audience. Through strategic
            keyword research, on page & off page seo and high-quality backlinks,
            we enhance your website's visibility.
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
              <img src={seo1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Off Page SEO
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our seo specialists build a robust off page seo strategy to
                elevate your website's authority. Through targeted
                link-building, social media engagement, influencer outreach, and
                content marketing, we take your website's visibility to the next
                level.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={seo2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                On Page SEO
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                We help drive relevant traffic, improve search engine rankings,
                and boost overall site performance through keyword research,
                compelling meta tags, and optimized page speed. Get higher
                engagement and conversion rates with our expert seo services.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={seo3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Technical SEO
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our seo specialists ensure that the search engines crawl, index
                & understand your content effectively. From XML sitemaps to
                faster loading times, we optimize your website for higher
                rankings, increased organic traffic & enhanced user experience
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={seo4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Local SEO Integration
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Dominate local search with our specialized local SEO strategies.
                We optimize your website for location-based keywords, create and
                manage Google My Business profiles, and ensure accurate NAP
                (Name, Address, Phone) information across the web.
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

export default Seo;
