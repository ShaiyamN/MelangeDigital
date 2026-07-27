import React from "react";
import {
  BreadCrumbs,
  Navbar,
  GetinTouch,
  CTAButton,
  Footer,
} from "../../../../layout";
import { im1, im2, im3, im4 } from "../../../../../assets/images";
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


const InfluencerMarketing = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
    { displayName: "Content Marketing", url: "/services/content-marketing" },
    {
      displayName: "Influencer Marketing",
      url: "/services/content-marketing/influencer-marketing",
    },
  ];
  return (
    <div className="font-nunito">
      <Helmet>
        <meta
          name="title"
          content="Influencer Marketing Agency - Grow your Brand & Sales"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="To increase the visibility of your business, use our influencer marketing service. Our techniques can connect you with the relevant influencers for effective promotion."
        />
        <meta
          property="og:image"
          content="https://melangedigital.co/assets/2-bd124bf9.png"
        ></meta>
        <meta
          property="og:title"
          content="Influencer Marketing Agency - Grow your Brand & Sales"
        ></meta>
        <meta
          property="og:description"
          content="To increase the visibility of your business, use our influencer marketing service. Our techniques can connect you with the relevant influencers for effective promotion."
        ></meta>
        <link
          rel="canonical"
          href="https://melangedigital.co/services/content-marketing/influencer-marketing"
        />
      </Helmet>
      <Navbar />
      <div className="font-nunito px-6 pt-24 md:pt-16 lg:px-28 text-base md:px-16 lg:pt-32 md:text-lg font-semibold mb-6">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="px-6 pb-3 md:px-16 md:pb-16 lg:px-28 lg:pb-4">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold py-2">
            Best Influencer Marketing Service
          </h1>
          <p className="text-base md:text-xl w-auto lg:w-[78%]">
            In the dynamic realm of social media, brands are rewriting the rules
            of engagement by tapping into the power of influencers. By
            collaborating with influential voices, we fuel your brand’s growth
            and cultivate authentic connections with your audience.
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
              <img src={im1} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-5">
                Scouting Influencers
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                At our agency, we believe in forging influencer partnerships
                that go beyond surface-level connections. Our approach involves
                identifying influencers whose values align seamlessly with your
                brand, ensuring an authentic collaboration.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={im2} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-5">
                Video Production
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our team works with influencers to create engaging video content
                that showcases your brand in the best light. From product
                reviews to tutorials to branded storytelling, we ensure that
                each video reflects your brand's unique personality.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={im3} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-5">
                Campaign Tracking
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Measuring the success of your influencer marketing campaigns is
                essential. We monitor key metrics and KPIs to assess the
                effectiveness of each campaign, allowing us to make data-driven
                decisions and optimise future strategies that drive your brand's
                digital growth.
              </p>
            </div>
            <div className="bg-white box-shadow p-6 md:p-10">
              <img src={im4} alt="" className="w-8 h-8 lg:w-auto lg:h-auto" />
              <h3 className="font-bold text-[16px] lg:text-[20px] my-1 lg:my-5">
                Campaign Management
              </h3>
              <p className="text-[12px] md:text-[18px] lg:leading-6 w-[100%]">
                Our experts meticulously handle every facet of the process,
                ensuring a seamless and impactful execution. From
                conceptualizing content to coordinating posting schedules, we
                meticulously manage each step to guarantee a cohesive and
                successful campaign.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-xl md:text-3xl font-semibold">
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

export default InfluencerMarketing;
