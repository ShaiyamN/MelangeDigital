import { useEffect } from "react";
import { Navbar, Footer } from "../../layout";
import { Helmet } from "react-helmet-async";
import ContactBody from "./ContactBody";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Contact a Tourism Board Marketing Agency in India | Mélange Digital</title>
        <meta
          name="description"
          content="Ready to grow your career in digital marketing? Explore exciting opportunities at Mélange Digital. Join a creative, ambitious & globally driven team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://melangedigital.co/contact" />
        <meta property="og:title" content="Contact a Tourism Board Marketing Agency in India | Mélange Digital" />
        <meta
          property="og:description"
          content="Ready to grow your career in digital marketing? Explore exciting opportunities at Mélange Digital. Join a creative, ambitious & globally driven team."
        />
        <meta property="og:image" content="https://melangedigital.co/contact-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Tourism Board Marketing Agency – Mélange Digital" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact a Tourism Board Marketing Agency in India | Mélange Digital" />
        <meta
          name="twitter:description"
          content="Ready to grow your career in digital marketing? Explore exciting opportunities at Mélange Digital. Join a creative, ambitious & globally driven team."
        />
        <meta name="twitter:image" content="https://melangedigital.co/contact-og.jpg" />
        <link rel="canonical" href="https://melangedigital.co/contact" data-rh="true" />
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
  "@type": "Organization",
  "name": "Mélange Digital",
  "alternateName": ["Melange Digital", "Mélange", "Melange"],
  "url": "https://melangedigital.co",
  "logo": "https://melangedigital.co/logo.png",
  "description": "Mélange Digital is a global digital marketing agency specializing in travel, tourism, hospitality, and high-growth brands.",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9372567722",
      "contactType": "sales",
      "areaServed": "Global",
      "availableLanguage": ["English", "Hindi"]
    }
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "India"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Singapore",
      "addressCountry": "Singapore"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "United Arab Emirates"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "United Kingdom"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Lusaka",
      "addressCountry": "Zambia"
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
  "name": "Contact a Tourism Board Marketing Agency in India | Mélange Digital",
  "url": "https://melangedigital.co/contact",
  "description": "Contact our tourism board marketing agency. We assist DMOs, NTOs, and tourism brands in increasing their organic visibility worldwide. Schedule a call.",
  "inLanguage": "en",
  "isPartOf": { "@type": "WebSite", "name": "Mélange Digital", "url": "https://melangedigital.co" },
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
