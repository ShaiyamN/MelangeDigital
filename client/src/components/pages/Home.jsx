import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import {
  blog261Banner,
  blog262Banner,
  blog263Banner,
} from "../../assets/blogImages";
import {
  Navbar,
  WorkSummary,
  MakertingVerse,
  Clientele,
  Testimonials,
  AwardsAndReco,
  Footer,
  FooterBehindContent,
  WhatsAppWidget,
} from "../layout";

import {
  ContentPartners,
  CopyrightFooter,
  HomeHero,
  HomeVideo,
  Insights,
  LetsTalk,
  NewServices,
  NewServicesMobile,
  PageBreaker,
  Partnered,
  TextReveal,
  TextRevealMobile,
} from "../RevamperHome";
import { clientsDesktop } from "../../constants";
import {
  amazon,
  meta,
  mixpanel,
  shopify,
  googlePartener,
  kylas,
  proofhub,
  interakt,
  hootsuite,
  wigzo,
  aisensy,
  amazonMarketing,
  klaviyo,
  disnep,
  dharmaProd,
  zee5Logo,
  voot,
  bacardi,
  mxPlayer,
  pathSocial,
  taboola,
  outbrain,
  webEngage,
  moengage,
  talkwalker,
  displayLogo,
} from "../../assets/images";
import { ins1, ins2, ins3, whatsapp } from "../../assets/newImages";
import HomeFaq from "../Performance/HomeFAQ";

const Home = () => {
  const images = [
    googlePartener,
    meta,
    proofhub,
    hootsuite,
    mixpanel,
    wigzo,
    aisensy,
    amazonMarketing,
    klaviyo,
    kylas,
    shopify,
    webEngage,
    moengage,
    talkwalker,
    displayLogo,
  ];
  const imagesPartner = [
    disnep,
    dharmaProd,
    zee5Logo,
    voot,
    mixpanel,
    bacardi,
    pathSocial,
    taboola,
    outbrain,
  ];

  const [isNavbarVisible, setNavbarVisible] = useState(true); // Manage navbar visibility
  const footerRef = useRef(null);
  const [dynamicWorks, setDynamicWorks] = useState([]);
  const [worksReady, setWorksReady] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const worksQuery = query(collection(db, "casestudies"), where("showOnHome", "==", true));
        const worksSnapshot = await getDocs(worksQuery);
        const fetchedWorks = worksSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            icon: data.bannerImage,
            tag1: data.services?.[0] || "",
            tag2: data.services?.[1] || "",
            tag3: data.services?.[2] || "",
            title: data.title,
            path: `/work/${data.slug}`,
            createdAt: data.createdAt || 0
          };
        });
        
        fetchedWorks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setDynamicWorks(fetchedWorks);
      } catch (err) {
        console.error("Error fetching homepage data:", err);
      } finally {
        setWorksReady(true);
      }
    };
    fetchData();
  }, []);

  // IntersectionObserver to detect when the footer enters the viewport
  useEffect(() => {
    const footerElement = footerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNavbarVisible(false); // Hide navbar when footer is in view
        } else {
          setNavbarVisible(true); // Show navbar when footer is out of view
        }
      },
      { threshold: 0.1 }, // Adjust threshold as needed
    );

    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const insightsData = [
    {
      title:
        "The rise of creator storefronts and how they are reshaping brand-influencer partnerships",
      date: "Influencer Marketing - Dec 2, 2025",
      image: blog261Banner,
      link: "/blogs/the-rise-of-creator-storefronts-and-how-they-are-reshaping-brand-influencer-partnerships",
    },
    {
      title:
        "Sustainable design and packaging: why 2025 consumers judge before they click buy",
      date: "Design & Development - Dec 3, 2025",
      image: blog262Banner,
      link: "/blogs/sustainable-design-and-packaging-why-2025-consumers-judge-before-they-click-buy",
    },
    {
      title:
        "Community First Content Stacks: Why Owning Your Audience Is The New Moat",
      date: "Content Strategy - Dec 4, 2025",
      image: blog263Banner,
      link: "/blogs/community-first-content-stacks-why-owning-your-audience-is-the-new-moat",
    }
  ];

  return (
    <div id="smooth-wrapper">
      <Helmet>
        <title>Global Digital Marketing Agency for Travel and Tourism | Melange</title>
        <meta
          name="description"
          content="Melange is a global digital marketing agency for travel and tourism, specialising in paid ads, influencer marketing, social media, and growth campaigns."
        />
        <link rel="canonical" href="https://melangedigital.co" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://melangedigital.co" />
        <meta property="og:title" content="Global Digital Marketing Agency for Travel and Tourism | Melange" />
        <meta property="og:description" content="Melange is a global digital marketing agency for travel and tourism, specialising in paid ads, influencer marketing, social media, and growth campaigns." />
        <meta property="og:image" content="https://melangedigital.co/og-homepage.jpg" />
      </Helmet>

      {/*<WhatsAppWidget />*/}
      {/* Pass the visibility state to Navbar */}
      <div className="relative">
        <div className="relative z-10 bg-white mb-[0px] w-full">
          <Navbar isNavbarVisible={isNavbarVisible} />
          <HomeHero />
          <TextReveal />
          <TextRevealMobile />
          <HomeVideo />
          <PageBreaker />
          <NewServices />
          <NewServicesMobile />
          <WorkSummary worksData={dynamicWorks} ready={worksReady} />
          <MakertingVerse />
          <Clientele clients={clientsDesktop} />
          <Testimonials />
          <AwardsAndReco />
          <Partnered images={images} />
          <ContentPartners images={imagesPartner} />
          <HomeFaq/>
          <div className="bg-[#1A1A1A] pb-6">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;