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
  "@type": "Organization",
  "name": "Mélange Digital",
  "url": "https://melangedigital.co",
  "logo": "https://melangedigital.co/logo.png",
  "description": "Mélange Digital is a global digital marketing agency specializing in travel, tourism, hospitality, and high-growth brands.",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9988776655",
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
