import React from "react";
import { Helmet } from "react-helmet-async";

const SchemaComponent = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Melange Digital",
    url: "https://www.melangedigital.co",
    // logo: "https://www.youragencywebsite.com/logo.png",
    description:
      "We are a digital marketing agency that helps startups, small & emerging businesses drive digital growth through new-age marketing strategies & execution. We are technology enabled & use AI to help brands stay ahead of their competitors.",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SchemaComponent;
