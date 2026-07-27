import React, { useState, useEffect } from "react";
import {
  Navbar,
  Ourservices,
  ServiceLabeling,
  CTAButton,
  BreadCrumbs,
  Footer,
  WorkSummaryForServices,
  Clientele,
} from "../layout";
import { clientsDesktop } from "../../constants";
import { ContentPartners, Partnered } from "../RevamperHome";
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
import { Helmet } from "react-helmet-async";
import ServiceFaq from "../Performance/ServiceFaq";

const Services = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Services", url: "/services" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startThreshold = 300;
      let endThreshold = 2500;
      if (window.innerWidth < 768) {
        endThreshold = 4500;
      } else if (window.innerWidth < 1024) {
        endThreshold = 2800;
      }
      setIsScrolled(scrollY > startThreshold && scrollY < endThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div>
      <Helmet>
        <title>Full Power Digital Marketing Services | Mélange Digital</title>
        <meta
          name="description"
          content="Explore Mélange Digital's complete suite of digital marketing services. SEO, PPC to brand strategy, influencer marketing & PR outreach to grow your brand"
        />
        <link rel="canonical" href="https://melangedigital.co/services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://melangedigital.co/services" />
        <meta property="og:title" content="Full Power Digital Marketing Services | Mélange Digital" />
        <meta property="og:description" content="Explore Mélange Digital's complete suite of digital marketing services — brand strategy, influencer marketing, AEO & SEO, and performance campaigns." />
        <meta property="og:image" content="https://melangedigital.co/og-services.jpg" />

        {/* Schema Markup - BreadcrumbList */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://melangedigital.co/services#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://melangedigital.co"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://melangedigital.co/services"
                }
              ]
            }
          `}
        </script>

        {/* Schema Markup - WebPage */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://melangedigital.co/services#webpage",
              "url": "https://melangedigital.co/services",
              "name": "Full Power Digital Marketing Services | Mélange Digital",
              "description": "Explore Mélange Digital's complete suite of digital marketing services. SEO, PPC to brand strategy, influencer marketing & PR outreach to grow your brand",
              "isPartOf": {
                "@type": "WebSite",
                "@id": "https://melangedigital.co/#website"
              },
              "breadcrumb": {
                "@id": "https://melangedigital.co/services#breadcrumb"
              },
              "inLanguage": "en-US"
            }
          `}
        </script>

        {/* Schema Markup - ItemList of Services */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Mélange Digital Services",
              "description": "Full suite of integrated digital marketing services offered by Mélange Digital",
              "numberOfItems": 11,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Service",
                    "@id": "https://melangedigital.co/services/brand-strategy#service",
                    "name": "Brand Strategy & Planning",
                    "url": "https://melangedigital.co/services/brand-strategy",
                    "description": "We capture your brand essence and create strategies that resonate. From brand positioning and architecture to competitive landscape analysis and consumer insight research.",
                    "provider": {
                      "@type": "Organization",
                      "name": "Mélange Digital",
                      "url": "https://melangedigital.co"
                    },
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "Brand Strategy & Planning Services",
                      "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Positioning" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Architecture" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Competitive Landscape Analysis" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Target Market Identification" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Guidelines Creation" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consumer Insight Research" } }
                      ]
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Service",
                    "@id": "https://melangedigital.co/services/influencer-marketing#service",
                    "name": "Influencer Marketing",
                    "url": "https://melangedigital.co/services/influencer-marketing",
                    "description": "End-to-end influencer marketing from identification and vetting to campaign strategy, outreach, content collaboration, event activations, and compliance management.",
                    "provider": {
                      "@type": "Organization",
                      "name": "Mélange Digital",
                      "url": "https://melangedigital.co"
                    },
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "Influencer Marketing Services",
                      "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer Identification & Vetting" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Campaign Strategy & Ideation" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer Outreach & Negotiation" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Collaboration & Creation" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Activations" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Compliance Management" } }
                      ]
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "@id": "https://melangedigital.co/services/immersive-brand-storytelling#service",
                    "name": "Immersive Brand Storytelling",
                    "url": "https://melangedigital.co/services/immersive-brand-storytelling",
                    "description": "Creating branded experiences through AR/VR, visual storytelling, audio branding, experiential marketing, UGC campaigns, and immersive event marketing.",
                    "provider": {
                      "@type": "Organization",
                      "name": "Mélange Digital",
                      "url": "https://melangedigital.co"
                    },
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "Immersive Brand Storytelling Services",
                      "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branded Experiences AR/VR" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storyboard & Script Writing" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Visual Storytelling" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Audio Branding & Podcasts" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Experiential Marketing" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UGC Campaigns" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Immersive Event Marketing" } }
                      ]
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "Service",
                    "@id": "https://melangedigital.co/services/design-and-development#service",
                    "name": "Design & Development",
                    "url": "https://melangedigital.co/services/design-and-development",
                    "description": "UI/UX design, web and app design, prototyping, visual identity, mobile-first design, motion graphics, and product and packaging design.",
                    "provider": {
                      "@type": "Organization",
                      "name": "Mélange Digital",
                      "url": "https://melangedigital.co"
                    },
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "Design & Development Services",
                      "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design & Testing" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web & App Design" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Prototyping & Wireframing" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Visual Identity Design" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile-first Design" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motion Graphics" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product & Packaging Design" } }
                      ]
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "Service",
                    "@id": "https://melangedigital.co/services/content-strategy-and-production#service",
                    "name": "Content Strategy & Production",
                    "url": "https://melangedigital.co/services/content-strategy-and-production",
                    "description": "SEO-optimised content creation, social media content strategy, video production, blog writing, and copywriting built around a thorough content audit and gap analysis.",
                    "provider": {
                      "@type": "Organization",
                      "name": "Mélange Digital",
                      "url": "https://melangedigital.co"
                    },
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "Content Strategy & Production Services",
                      "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Audit & Gap Analysis" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO-Optimized Content Creation" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Content Strategy" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Content Production" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Blog & Article Writing" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Copywriting & Storytelling" } }
                      ]
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "item": {
                    "@type": "Service",
                    "@id": "https://melangedigital.co/services/pr-and-outreach#service",
                    "name": "PR, IPs & Outreach",
                    "url": "https://melangedigital.co/services/pr-and-outreach",
                    "description": "Media relations, digital PR, press release writing, online reputation management, influencer and celebrity PR, event publicity, IP development, sponsorship strategy, and media monitoring.",
                    "provider": {
                      "@type": "Organization",
                      "name": "Mélange Digital",
                      "url": "https://melangedigital.co"
                    },
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "PR, IPs & Outreach Services",
                      "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Media Relations & Digital PR" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Press Release Writing & Distribution" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Reputation Management" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer & Celebrity PR" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Publicity & Management" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IP Development & Licensing" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sponsorship Strategy" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Media Monitoring & Analytics" } }
                      ]
                    }
                  }
                }
                {
  "@type": "ListItem",
  "position": 7,
  "item": {
    "@type": "Service",
    "@id": "https://melangedigital.co/services/content-marketing#service",
    "name": "Content Marketing",
    "url": "https://melangedigital.co/services/content-marketing",
    "description": "Strategic content marketing solutions including content planning, SEO-driven blog writing, social media content, email marketing, video scripts, and performance tracking to grow brand authority and audience engagement.",
    "provider": {
      "@type": "Organization",
      "name": "Mélange Digital",
      "url": "https://melangedigital.co"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Content Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Planning & Calendar Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Blog Writing & Articles" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Content Creation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Marketing Campaigns" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Script Writing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Performance Analytics" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Infographic & Visual Content" } }
      ]
    }
  }
},
{
  "@type": "ListItem",
  "position": 8,
  "item": {
    "@type": "Service",
    "@id": "https://melangedigital.co/services/ecommerce#service",
    "name": "E-Commerce",
    "url": "https://melangedigital.co/services/ecommerce",
    "description": "End-to-end e-commerce solutions covering store setup, product listing optimisation, conversion rate optimisation, marketplace management, abandoned cart recovery, and e-commerce performance analytics.",
    "provider": {
      "@type": "Organization",
      "name": "Mélange Digital",
      "url": "https://melangedigital.co"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "E-Commerce Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Store Setup & Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Listing Optimisation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Rate Optimisation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketplace Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Abandoned Cart Recovery" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Performance Analytics" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopping Ads & Feed Management" } }
      ]
    }
  }
},
{
  "@type": "ListItem",
  "position": 9,
  "item": {
    "@type": "Service",
    "@id": "https://melangedigital.co/services/design-solutions#service",
    "name": "Design Solutions",
    "url": "https://melangedigital.co/services/design-solutions",
    "description": "Creative design solutions spanning brand identity, print and digital collateral, social media creatives, packaging design, pitch deck design, and custom illustration for brands across all industries.",
    "provider": {
      "@type": "Organization",
      "name": "Mélange Digital",
      "url": "https://melangedigital.co"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Design Solutions Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity & Logo Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Creatives" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Print & Digital Collateral" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Packaging Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pitch Deck & Presentation Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Illustration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Banner & Ad Creative Design" } }
      ]
    }
  }
},
{
  "@type": "ListItem",
  "position": 10,
  "item": {
    "@type": "Service",
    "@id": "https://melangedigital.co/services/performance-marketing#service",
    "name": "Performance Marketing",
    "url": "https://melangedigital.co/services/performance-marketing",
    "description": "Data-driven performance marketing across Google Ads, Meta Ads, and programmatic channels. Covers paid search, paid social, retargeting, conversion tracking, landing page optimisation, and ROI reporting.",
    "provider": {
      "@type": "Organization",
      "name": "Mélange Digital",
      "url": "https://melangedigital.co"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Performance Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meta Ads (Facebook & Instagram)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Programmatic Advertising" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retargeting & Remarketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Tracking & Analytics" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page Optimisation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ROI & Performance Reporting" } }
      ]
    }
  }
},
{
  "@type": "ListItem",
  "position": 11,
  "item": {
    "@type": "Service",
    "@id": "https://melangedigital.co/services/website-development-seo#service",
    "name": "Website Development & SEO",
    "url": "https://melangedigital.co/services/website-development-seo",
    "description": "Full-stack website development paired with technical and on-page SEO. Services include custom website builds, CMS development, technical SEO audits, keyword strategy, link building, local SEO, and ongoing performance monitoring.",
    "provider": {
      "@type": "Organization",
      "name": "Mélange Digital",
      "url": "https://melangedigital.co"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Development & SEO Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Website Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CMS Development & Integration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO Audit & Fixes" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Keyword Research & Strategy" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "On-Page SEO Optimisation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Link Building & Off-Page SEO" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Performance Monitoring" } }
      ]
    }
  }
}
              ]
            }
          `}
        </script>
        {/* End of Schema Markup */}
      </Helmet>

      <Navbar />
      <div
        className={`pt-16 md:pt-32 font-bricolage pb-14 transition-scrolling ${
          isScrolled ? "bg-[#1a1a1a] text-white" : ""
        }`}
      >
        <div className="font-bricolage text-[16px] lg:text-[18px] lg:px-20 px-5 max-container pt-7">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <Ourservices />
        <ServiceLabeling />
      </div>
      <WorkSummaryForServices />
      <Clientele clients={clientsDesktop} />
      <Partnered images={images} />
      <ContentPartners images={imagesPartner} />
      <ServiceFaq/>
      <Footer />
    </div>
  );
};

export default Services;