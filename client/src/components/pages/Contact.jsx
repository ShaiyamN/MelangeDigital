import { useEffect } from "react";
import { Navbar, Footer } from "../layout";
import { Helmet } from "react-helmet-async";
import ContactBody from "./Contact/ContactBody";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Contact Us & Let's Work Together | Mélange Digital</title>
        <meta
          name="description"
          content="Get in touch with Mélange Digital today. Our team is ready to craft the perfect digital marketing strategy to grow your brand globally"
        />
        <link rel="canonical" href="https://melangedigital.co/contact" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@400;500;600;700;800&family=Libre+Baskerville:ital@1&family=Lato:wght@400;700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        {/* End of Meta Tags */}

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://melangedigital.co" },
    { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://melangedigital.co/contact" }
  ]
}`}
        </script>

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Mélange Digital",
  "url": "https://melangedigital.co/contact",
  "description": "Get in touch with Mélange Digital today. Our team is ready to craft the perfect digital marketing strategy to grow your brand globally.",
  "inLanguage": "en",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Mélange Digital",
    "url": "https://melangedigital.co"
  },
  "about": {
    "@type": "MarketingAgency",
    "name": "Mélange Digital",
    "url": "https://melangedigital.co",
    "logo": { "@type": "ImageObject", "url": "https://melangedigital.co/logo.png" },
    "email": "hello@melangedigital.co",
    "telephone": "+919372567722",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "email": "hello@melangedigital.co",
        "telephone": "+919372567722",
        "availableLanguage": "English",
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "email": "julien@melangedigital.co",
        "telephone": "+919372567722",
        "availableLanguage": "English",
        "areaServed": "AE"
      }
    ],
    "location": [
      { "@type": "Place", "name": "Mélange Digital — India (Headquarters)", "address": { "@type": "PostalAddress", "addressLocality": "Mumbai", "addressRegion": "Maharashtra", "addressCountry": "IN" } },
      { "@type": "Place", "name": "Mélange Digital — Singapore", "address": { "@type": "PostalAddress", "addressLocality": "Singapore", "addressCountry": "SG" } },
      { "@type": "Place", "name": "Mélange Digital — United Arab Emirates", "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" } },
      { "@type": "Place", "name": "Mélange Digital — United Kingdom", "address": { "@type": "PostalAddress", "addressLocality": "London", "addressCountry": "GB" } },
      { "@type": "Place", "name": "Mélange Digital — Zambia", "address": { "@type": "PostalAddress", "addressCountry": "ZM" } }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/melangedigital/",
      "https://www.instagram.com/melangedigital.co"
    ]
  }
}`}
        </script>

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mélange Digital",
  "url": "https://melangedigital.co/contact",
  "image": "https://melangedigital.co/logo.png",
  "email": "hello@melangedigital.co",
  "telephone": "+919372567722",
  "priceRange": "$$",
  "currenciesAccepted": "INR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "L-302, The Trees Godrej, Vikhroli East Mumbai",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400079",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "19.0760", "longitude": "72.8777" },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/melangedigital/",
    "https://www.instagram.com/melangedigital.co",
    "https://www.facebook.com/melangedigital"
  ]
}`}
        </script>

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Contact Us — Mélange Digital",
  "url": "https://melangedigital.co/contact",
  "description": "Contact Mélange Digital — your dedicated digital growth partner. Book a call, email us, or reach out to our global offices in India, Singapore, the United Arab Emirates, the United Kingdom, and Zambia.",
  "inLanguage": "en",
  "isPartOf": { "@type": "WebSite", "name": "Melange Digital", "url": "https://melangedigital.co" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://melangedigital.co" },
      { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://melangedigital.co/contact" }
    ]
  }
}`}
        </script>
        {/* End of Schema Markup */}
      </Helmet>

      <Navbar />
      <main id="main-content" className="pt-24 sm:pt-[6.75rem]">
        <ContactBody />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;