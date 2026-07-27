import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { a1, a2, a3, a4 } from "../../../../../assets/images";
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

const Articles = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Content Marketing", url: "/services/content-marketing" },
    {
      displayName: "Articles",
      url: "/services/content-marketing/articles",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Get an Engaging Article for Better Content Marketing Strategy"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Get our effective article writing services. Increase the effectiveness of your content marketing approach by writing useful and interesting articles."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/2-bd124bf9.png"
        ></meta>
        <meta
          property="og:title"
          content="Get an Engaging Article for Better Content Marketing Strategy"
        ></meta>
        <meta
          property="og:description"
          content="Get our effective article writing services. Increase the effectiveness of your content marketing approach by writing useful and interesting articles."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/content-marketing/articles"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6 pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Get Quality Article & Blog Writing Service
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[78%]">
            Well-crafted articles play a pivotal role in shaping your audience's
            perception of your brand. With compelling narratives, we make sure
            your voice resonates loudly and clearly across every headline,
            call-to-action, website, and advertisement.
          </p>
          <div className="-mt-2">
            <GetinTouch />
          </div>
        </div>
        <div className="py-6 md:py-10">
          <h2 className="text-xl md:text-[32px] w-auto lg:w-[75%] font-semibold lg:leading-9 multiverse-text pb-2">
            We build brands & narratives by focusing on the following key areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={a1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Blogs
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our team dives into extensive research on industry trends, to
                write blog posts that provide your audience with valuable
                insights. By optimizing blogs for SEO, we not only engage your
                audience but also drive organic traffic to your website.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={a2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Press Releases
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our writers have a keen eye for newsworthy angles and possess
                the expertise to create press releases that grab attention and
                generate buzz. We ensure that your brand's key messages are
                effectively communicated to the media to meet your current
                business goals.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={a3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Emailers
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our team creates personalized mailers that effectively convey
                your brand's message. We optimize emailers to maximize open
                rates, click-through rates, and conversions by utilizing
                compelling copy, eye-catching visuals, and strategic calls to
                action.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={a4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-2">
                Case Studies
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our writers create compelling case studies that demonstrate how
                your products or services have delivered measurable results.
                These narratives assure potential clients that your solutions
                aren't just promises; they're proven pathways to success.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6  text-xl md:text-3xl font-semibold">
            Content Marketing Case Studies
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-0 lg:mt-8 md:mt-2 pb-4 lg:pb-12">
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
            <Link to="/work/active-club" className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate6} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px]">
                <p>Performance Marketing</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>Influencer Marketing</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                Active Club
              </h2>
            </Link>
            <Link to="/work/make-my-trip" className="my-4 md:my-0">
              <img src={relate1} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-xs md:text-[12px] ">
                <p>Performance Marketing</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>Activations</p>
              </div>
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                MakeMyTrip Holidays
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <CTAButton buttonName={"Request a Content Audit"} />
      <Footer />
    </div>
  );
};

export default Articles;
