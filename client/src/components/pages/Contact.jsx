import React from "react";
import { Navbar, ContactForm, BreadCrumbs, Footer } from "../layout";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Contact Us", url: "/contact" },
  ];

  return (
    <div>
      <Helmet>
        {/* Meta Tags */}
        <meta
          name="title"
          content="Contact Us & Let's Work Together | Mélange Digital"
          data-react-helmet="true"
        />
        <meta
          name="description"
          content="Get in touch with Mélange Digital today. Our team is ready to craft the perfect digital marketing strategy to grow your brand globally"
        />
        <link rel="canonical" href="https://melangedigital.co/contact" />
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
    "logo": { "@type": "ImageObject", "url": "https://melangedigital.co/assets/mainLogo-8756aff9.png" },
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
      { "@type": "Place", "name": "Mélange Digital — UAE", "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" } },
      { "@type": "Place", "name": "Mélange Digital — Singapore", "address": { "@type": "PostalAddress", "addressLocality": "Singapore", "addressCountry": "SG" } },
      { "@type": "Place", "name": "Mélange Digital — United Kingdom", "address": { "@type": "PostalAddress", "addressLocality": "London", "addressCountry": "GB" } },
      { "@type": "Place", "name": "Mélange Digital — Africa", "address": { "@type": "PostalAddress", "addressCountry": "ZM" } }
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
  "image": "https://melangedigital.co/assets/mainLogo-8756aff9.png",
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
  "description": "Contact Mélange Digital — your dedicated digital growth partner. Book a call, email us, or reach out to our global offices in India, UAE, Singapore, UK, and Africa.",
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
      <div className="font-nunito text-[16px] lg:text-[18px] lg:px-20 px-5 pt-28 mb-6 lg:mb-0 lg:pt-32 lg:pb-16 pb-8 max-container">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="max-container">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;