import { Helmet } from "react-helmet-async";
import {
  TOURISM_ASSET as ASSET,
  TourismShell,
  tourismNavCss,
  useTourismBoot,
} from "../tourismPage";
import markup from "./markup.html?raw";

const CSS = [
  `${ASSET}/css/melange-shared.css?v=20260724e`,
  `${ASSET}/css/melange.css?v=20260824az`,
];
const SCRIPT_BASES = [`${ASSET}/js/services.js?v=20260824w`];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Melange Digital specialise in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Melange is a travel and tourism marketing agency. We decode the culture, narrate the story, match the creator, and convert emotion into a booking. Success is measured in arrivals, not impressions.",
      },
    },
    {
      "@type": "Question",
      name: "How do you choose creators for a destination campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cast for credibility inside a subculture, not follower count. Every creator is pressure-tested against audience data before a contract is signed, and casting, negotiation, content and reporting run under one roof.",
      },
    },
    {
      "@type": "Question",
      name: "Can a destination live inside film or music IP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We land the production or the track, not just a placement. The destination lives inside the narrative, and our film and music network gets a destination cast, not just pitched.",
      },
    },
    {
      "@type": "Question",
      name: "What does an experiential activation actually deliver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We turn a booth, mall or trade-show floor into the highest-performing square foot in travel. Activations are designed, fabricated and staffed end to end, and engineered to capture a qualified enquiry, not just a photo.",
      },
    },
    {
      "@type": "Question",
      name: "How are FAM trips and PR different from a media buy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A cover story lands harder than a media buy. We host, negotiate and staff trips and stalls in person, and our publisher and journalist network is built over years, not rented per campaign.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure a campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By arrivals, enquiries, earned media and follow-on production. Every campaign is built around a specific, trackable outcome agreed before work begins.",
      },
    },
  ],
};

const ServicesTourism = () => {
  const cssReady = useTourismBoot("svc", CSS, SCRIPT_BASES);

  return (
    <>
      <Helmet>
        <title>Travel & Tourism Marketing Services | Melange Digital</title>
        <meta
          name="description"
          content="Influencer and celebrity marketing, branded content and IP, experiential activations, and FAM trips plus PR for tourism boards. How Melange engineers desire to arrivals."
        />
        <link rel="canonical" href="https://melangedigital.co/services" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@400;500;600;700;800&family=Lato:wght@400;500;600;700;800;900&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <base href="/destination-marketing-agency/" />
        <meta property="og:url" content="https://melangedigital.co/services" />
        <meta property="og:title" content="Travel & Tourism Marketing Services | Melange Digital" />
        <meta
          property="og:description"
          content="Influencer and celebrity marketing, branded content and IP, experiential activations, and FAM trips plus PR for tourism boards."
        />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Travel and Tourism Marketing",
            url: "https://melangedigital.co/services",
            provider: {
              "@type": "Organization",
              name: "Melange Digital",
              url: "https://melangedigital.co",
            },
            description:
              "Influencer and celebrity marketing, branded content and IP, experiential activations, and FAM trips plus PR for tourism boards.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Tourism marketing services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Influencer & Celebrity Marketing" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branded Content & IP" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Experiential Marketing" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "FAM Trips + PR" } },
              ],
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://melangedigital.co/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://melangedigital.co/services" },
            ],
          })}
        </script>
        <style type="text/css">{tourismNavCss("svc")}</style>
      </Helmet>

      <TourismShell slug="svc" cssReady={cssReady} markup={markup} />
    </>
  );
};

export default ServicesTourism;
