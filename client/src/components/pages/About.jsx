import { useEffect } from "react";
import { Navbar, Footer } from "../layout";
import { Helmet } from "react-helmet-async";
import AboutBody from "./About/AboutBody";
import "./About/about.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
  <title>About Mélange Digital: Our Story, Mission & Vision</title>
  <meta name="title" content="About Mélange Digital: Our Story, Mission & Vision" data-react-helmet="true" />
  <meta name="description" content="Meet the team behind Mélange Digital. Passionate global agency driven by strategy, creativity & a mission to grow brands that matter. Discover our story" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="About Mélange Digital: Our Story, Mission & Vision" />
  <meta property="og:description" content="Meet the team behind Mélange Digital. Passionate global agency driven by strategy, creativity & a mission to grow brands that matter. Discover our story" />
  <meta property="og:image" content="https://melangedigital.co/logo.png" />
  <meta property="og:url" content="https://melangedigital.co/about" />
  <link rel="canonical" href="https://melangedigital.co/about" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@400;500;600;700;800&family=Lato:wght@400;700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
      "name": "About Us",
      "item": "https://melangedigital.co/about"
    }
  ]
}`}
        </script>

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Mélange Digital: Our Story, Mission & Vision",
  "url": "https://melangedigital.co/about",
  "description": "Meet the team behind Mélange Digital. Passionate global agency driven by strategy, creativity & a mission to grow brands that matter. Discover our story",
  "inLanguage": "en",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Mélange Digital",
    "url": "https://melangedigital.co"
  },
  "about": {
    "@type": "LocalBusiness",
    "name": "Mélange Digital",
    "url": "https://melangedigital.co",
    "logo": "https://melangedigital.co/logo.png",
    "foundingDate": "2021",
    "description": "Mélange Digital is a data-driven digital marketing agency that crafts emotionally resonant campaigns using AI-powered insights, cultural understanding, and performance strategies.",
    "mission": "To fuel digital transformation through creativity and innovation, helping brands and startups seize new opportunities and drive growth.",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 30,
      "maxValue": 50
    },
"areaServed": [
  { "@type": "Country", "name": "India" }
],
"address": [
  {
    "@type": "PostalAddress",
    "streetAddress": "B12, 7th Floor, Silvio Heights, St. Inez Road, Santa Inez",
    "addressLocality": "Panaji",
    "addressRegion": "Goa",
    "postalCode": "403001",
    "addressCountry": "IN"
  }
]
    ]
  }
}`}
        </script>

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Mélange Digital Leadership Team",
  "url": "https://melangedigital.co/about",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Person",
        "name": "Sanket Bolinjkar",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Person",
        "name": "Julien Cordon",
        "jobTitle": "Regional Director, GCC",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Person",
        "name": "Mihir Shah",
        "jobTitle": "Regional Director, UK & EU",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Person",
        "name": "Maria Masiri",
        "jobTitle": "Regional Director, Africa",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Person",
        "name": "Jason Dias",
        "jobTitle": "Director of Growth & Strategy",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Person",
        "name": "Rakesh Mittapelly",
        "jobTitle": "Performance Marketing Strategist",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Person",
        "name": "Siddharth Jadhav",
        "jobTitle": "Head of Client Servicing and Operations",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "Person",
        "name": "Ekaterina Bolinjkar",
        "jobTitle": "Head of HR & Finance",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },
    {
      "@type": "ListItem",
      "position": 9,
      "item": {
        "@type": "Person",
        "name": "Sheefa Tonse",
        "jobTitle": "Copywriter",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },

    {
      "@type": "ListItem",
      "position": 10,
      "item": {
        "@type": "Person",
        "name": "Souvik Bhattacharjee",
        "jobTitle": "Senior Manager Content & Copy",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },
    {
      "@type": "ListItem",
      "position": 11,
      "item": {
        "@type": "Person",
        "name": "Siffa Shaikh",
        "jobTitle": "Account Manager",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },
    {
      "@type": "ListItem",
      "position": 12,
      "item": {
        "@type": "Person",
        "name": "Dylan Fernandes",
        "jobTitle": "HR & Admin Executive",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
        }
    },
      {
        "@type": "ListItem",
        "position": 13,
        "item": {
          "@type": "Person",
          "name": "Shaiyam Neupane",
          "jobTitle": "Tech Executive",
          "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
          "url": "https://melangedigital.co/about"
        }
      },
      {
        "@type": "ListItem",
        "position": 14,
        "item": {
          "@type": "Person",
          "name": "Shrutitnya Dhargalkar",
          "jobTitle": "SEO Executive",
          "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
          "url": "https://melangedigital.co/about"
          }
      },
      {
        "@type": "ListItem",
        "position": 15,
        "item": {
          "@type": "Person",
          "name": "Amardeep Singh",
          "jobTitle": "Associate Director, Client Servicing and Operations",
          "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
          "url": "https://melangedigital.co/about"
          }
    },
    {
      "@type": "ListItem",
      "position": 16,
      "item": {
        "@type": "Person",
        "name": "Ashna Colaco",
        "jobTitle": "Design Intern",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
        } 
    },
    {
      "@type": "ListItem",
      "position": 17,
      "item": {
        "@type": "Person",
        "name": "Sneha Naik",
        "jobTitle": "Associate Manager: Social Media",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },
    {
      "@type": "ListItem",
      "position": 18,
      "item": {
        "@type": "Person",
        "name": "Ayusha Bandiwdekar",
        "jobTitle": "Creative Strategist",
        "worksFor": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
        "url": "https://melangedigital.co/about"
      }
    },
  ]
}`}
        </script>

        <script type="application/ld+json">
  {`{
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Mélange Digital Company Milestones",
    "url": "https://melangedigital.co/about",
    "itemListElement": [
      {
  "@type": "ListItem",
  "position": 1,
  "item": {
    "@type": "Event",
    "name": "Mélange Digital Founded",
    "startDate": "2021-01-01",
    "endDate": "2021-01-01",
    "eventStatus": "https://schema.org/EventScheduled",
    "description": "Mélange Digital was founded with a vision to unite strategy, creativity, and performance into meaningful campaigns.",
    "image": "https://melangedigital.co/logo.png",
    "location": { "@type": "Place", "name": "Goa, India", "address": { "@type": "PostalAddress", "streetAddress": "B12, 7th Floor, Silvio Heights, St. Inez Road, Santa Inez", "addressLocality": "Panaji", "addressRegion": "Goa", "postalCode": "403001", "addressCountry": "IN" } },
    "organizer": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
    "performer": { "@type": "Person", "name": "Sanket Bolinjkar", "jobTitle": "Founder & CEO" },
    "offers": { "@type": "Offer", "price": "75,000 ", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://melangedigital.co/about" }
  }
},
    {
  "@type": "ListItem",
  "position": 2,
  "item": {
    "@type": "Event",
    "name": "First International Expansion — Singapore",
    "startDate": "2022-01-01",
    "endDate": "2022-01-01",
    "eventStatus": "https://schema.org/EventScheduled",
    "description": "Mélange Digital established its first international presence in Singapore, growing to a team of 15 and expanding into the APAC region.",
    "image": "https://melangedigital.co/logo.png",
    "location": { "@type": "Place", "name": "International Plaza, Singapore", "address": { "@type": "PostalAddress", "streetAddress": "10 Anson Road, #22-02A International Plaza", "addressLocality": "Singapore", "postalCode": "079903", "addressCountry": "SG" } },
    "organizer": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
    "performer": { "@type": "Person", "name": "Sanket Bolinjkar", "jobTitle": "Founder & CEO" },
    "offers": { "@type": "Offer", "price": "1200", "priceCurrency": "SGD", "availability": "https://schema.org/InStock", "url": "https://melangedigital.co/about" }
  }
},
    {
  "@type": "ListItem",
  "position": 3,
  "item": {
    "@type": "Event",
    "name": "UAE Office Launch — Dubai",
    "startDate": "2023-01-01",
    "endDate": "2023-01-01",
    "eventStatus": "https://schema.org/EventScheduled",
    "description": "Mélange Digital expanded into the UAE market with a team of 20, delivering bold campaigns for the Middle Eastern market.",
    "image": "https://melangedigital.co/logo.png",
    "location": { "@type": "Place", "name": "Sharjah Publishing City Free Zone, UAE", "address": { "@type": "PostalAddress", "streetAddress": "Business Centre, Sharjah Publishing City Free Zone", "addressLocality": "Sharjah", "addressCountry": "AE" } },
    "organizer": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
    "performer": { "@type": "Person", "name": "Julien R.R. Cordon", "jobTitle": "Regional Director GCC" },
    "offers": { "@type": "Offer", "price": "5000", "priceCurrency": "AED", "availability": "https://schema.org/InStock", "url": "https://melangedigital.co/about" }
  }
},
{
  "@type": "ListItem",
  "position": 4,
  "item": {
    "@type": "Event",
    "name": "London Office Launch",
    "startDate": "2024-01-01",
    "endDate": "2024-01-01",
    "eventStatus": "https://schema.org/EventScheduled",
    "description": "Mélange Digital launched its European operations in London with a team of 30, building creative systems for UK brands.",
    "image": "https://melangedigital.co/logo.png",
    "location": { "@type": "Place", "name": "London, United Kingdom", "address": { "@type": "PostalAddress", "streetAddress": "22-6 Millennium Drive", "addressLocality": "London", "postalCode": "E14 3GF", "addressRegion": "England", "addressCountry": "GB" } },
    "organizer": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
    "performer": { "@type": "Person", "name": "Mihir Shah", "jobTitle": "Regional Director UK & EU" },
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://melangedigital.co/about" }
  }
},
{
  "@type": "ListItem",
  "position": 5,
  "item": {
    "@type": "Event",
    "name": "Africa Expansion — Zambia",
    "startDate": "2025-01-01",
    "endDate": "2025-01-01",
    "eventStatus": "https://schema.org/EventScheduled",
    "description": "Mélange Digital expanded into the African market, bringing global digital marketing expertise to Zambia.",
    "image": "https://melangedigital.co/logo.png",
    "location": { "@type": "Place", "name": "Lusaka, Zambia", "address": { "@type": "PostalAddress", "streetAddress": "6078A, Great East Road, Northmead", "addressLocality": "Lusaka", "addressRegion": "Lusaka Province", "postalCode": "10101", "addressCountry": "ZM" } },
    "organizer": { "@type": "Organization", "name": "Mélange Digital", "url": "https://melangedigital.co" },
    "performer": { "@type": "Person", "name": "Maria Masiri", "jobTitle": "Regional Director Africa" },
    "offers": { "@type": "Offer", "price": "800", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://melangedigital.co/about" }
  }
}
  ]
}`}
        </script>
        {/* End of Schema Markup */}
      </Helmet>
      <a className="about-skip" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="pt-24 sm:pt-[6.75rem]">
        <AboutBody />
      </main>
      <Footer />
    </div>
  );
};
export default About;
