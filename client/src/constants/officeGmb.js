/** Melange office countries — single source; always alphabetical, full names only. */

const byLabel = (a, b) => a.label.localeCompare(b.label);

const MELANGE_OFFICES = [
  {
    label: "India",
    code: "in",
    siteHref: "https://melangedigital.co/india",
    mapsHref: "https://maps.app.goo.gl/FSfiMEP7C4n4CMQTA",
    cities: [
      { label: "Delhi", href: "https://melangedigital.co/india/digital-marketing-agency-delhi/" },
      { label: "Goa", href: "https://melangedigital.co/india/digital-marketing-agency-goa/" },
      { label: "Mumbai", href: "https://melangedigital.co/india/digital-marketing-agency-mumbai/" },
    ],
  },
  {
    label: "Singapore",
    code: "sg",
    siteHref: "https://melangedigital.co/singapore",
    mapsHref:
      "https://www.google.com/search?q=MELANGE+DIGITAL+PTE.+LTD.&stick=H4sIAAAAAAAA_-NgU1I1qDA2TEk0tLQwMTE1s0gzSrK0MqhINbYwTjMyszBITTG0TDM1W8Qq6evq4-jn7qrg4unuGeLooxAQ4qqn4BPiogcAyWX5C0UAAAA&hl=en&mat=CVKJ58F_zJeDElYBTVDHniK3LW54ibQQkNlBN0r5dy93PQImQSnSABny6grSXEp7-eTU8FbhDpwt5WaVrG1WDWDTs05ukqA4FcAoFoEVLvQYZf3QS9kBza1ECLrko0a9PA&authuser=0",
    cities: [
      {
        label: "Singapore",
        href: "https://melangedigital.co/singapore/digital-marketing-agency-singapore/",
      },
    ],
  },
  {
    label: "United Arab Emirates",
    code: "ae",
    siteHref: "https://melangedigital.co/uae",
    mapsHref:
      "https://www.google.com/search?q=Melange+Digital+FZE&stick=H4sIAAAAAAAA_-NgU1I1qEhMtLAwMDFLS0w1SzRNMk2zMqiwME5MTTFPS0lOTjE3MDIwXcQq7Juak5iXnqrgkpmeWZKYo-AW5QoAceOjEj8AAAA&hl=en&mat=CRx5A0_Sekm2ElYBTVDHni1ERTRD6poMtBcS_iFoK9L-oNxxfsy1Y02ohpOq06pvDWhZfRKVxpeD4BCnrL1af5URQ3FWIFHmaj-zyvd30acipXv2pVaDuy2L8214lw9F0A&authuser=0",
    cities: [
      { label: "Dubai", href: "https://melangedigital.co/uae/digital-marketing-agency-dubai/" },
    ],
  },
  {
    label: "United Kingdom",
    code: "gb",
    siteHref: "https://melangedigital.co/uk",
    mapsHref:
      "https://www.google.com/search?q=M%C3%A9lange+Digital+-+Digital+Marketing+Agency+in+United+Kingdom&stick=H4sIAAAAAAAA_-NgU1I1qDBJSzVPtkg0NDIxSkkyt7C0MqhINTE3STUxNjUxSEtNMTIwXMRq63t4ZU5iXnqqgktmemZJYo6CLpzlm1iUnVqSmZeu4JiempdcqZCZpxCal1mSmqLgDRRNyc8FANT9lOZpAAAA&hl=en&mat=CX8owslq2k0pElYBTVDHnm-NhFjmSo-V6S8R81AdPlgHLF0Kpoy01jkJXDWmPyJEWF0nxEPUGKbSr3We0u8oyKXz_BGQIPr65XGX5JwHqBdAWNDRGq2hs5deTetn-b79JQ&authuser=0",
    cities: [
      { label: "London", href: "https://melangedigital.co/uk/digital-marketing-agency-london/" },
    ],
  },
  {
    label: "Zambia",
    code: "zm",
    siteHref: "https://melangedigital.co/zambia",
    mapsHref:
      "https://www.google.com/search?q=Melange+Digital+Zambia+Limited&stick=H4sIAAAAAAAA_-NgU1I1qDC0NDGwSDIwS05MtDRKNTK1MqhIMjG1MDC3SLIwSjU3T0uyXMQq55uak5iXnqrgkpmeWZKYoxCVmJuUmajgk5mbWZKaAgCUzw7SSgAAAA&hl=en&mat=CeJKO4PjPRYaElcBTVDHnogff8Oyop7N7KV1GM92mWWy1e-aIi2Z0CA2V1utDtSB5vWI8V1wtcWjNvPtOkdio8SrXvAXWfrRA85ur7QHqFcnT-JRdavnGMcCgiN8XvvSqLA&authuser=0",
    cities: [
      { label: "Lusaka", href: "https://melangedigital.co/zambia/digital-marketing-agency-lusaka/" },
    ],
  },
].sort(byLabel);

/** Nav Global dropdown — countries A→Z, cities A→Z within each. */
export const GLOBAL_NAV_COUNTRIES = MELANGE_OFFICES.map(({ label, code, siteHref, cities }) => ({
  label,
  code,
  href: siteHref,
  cities: [...cities].sort(byLabel),
}));

export const INDIA_OFFICE = {
  label: "India",
  href: MELANGE_OFFICES.find((o) => o.label === "India").mapsHref,
};

/** Footer Global Presence (excludes India — contact glass lists India separately). */
export const FOOTER_OFFICES = MELANGE_OFFICES.filter((o) => o.label !== "India").map(
  ({ label, mapsHref }) => ({ label, href: mapsHref }),
);

/** Contact page location links (all offices, A→Z). */
export const CONTACT_OFFICES = MELANGE_OFFICES.map(({ label, mapsHref }) => ({
  label,
  href: mapsHref,
}));
