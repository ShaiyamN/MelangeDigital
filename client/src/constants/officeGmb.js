/** Google Business Profile links for each Melange office. */
export const INDIA_OFFICE = {
  label: "India",
  href: "https://maps.app.goo.gl/FSfiMEP7C4n4CMQTA",
};

export const FOOTER_OFFICES = [
  {
    label: "United Kingdom",
    href: "https://www.google.com/search?q=M%C3%A9lange+Digital+-+Digital+Marketing+Agency+in+United+Kingdom&stick=H4sIAAAAAAAA_-NgU1I1qDBJSzVPtkg0NDIxSkkyt7C0MqhINTE3STUxNjUxSEtNMTIwXMRq63t4ZU5iXnqqgktmemZJYo6CLpzlm1iUnVqSmZeu4JiempdcqZCZpxCal1mSmqLgDRRNyc8FANT9lOZpAAAA&hl=en&mat=CX8owslq2k0pElYBTVDHnm-NhFjmSo-V6S8R81AdPlgHLF0Kpoy01jkJXDWmPyJEWF0nxEPUGKbSr3We0u8oyKXz_BGQIPr65XGX5JwHqBdAWNDRGq2hs5deTetn-b79JQ&authuser=0",
  },
  {
    label: "United Arab Emirates",
    href: "https://www.google.com/search?q=Melange+Digital+FZE&stick=H4sIAAAAAAAA_-NgU1I1qEhMtLAwMDFLS0w1SzRNMk2zMqiwME5MTTFPS0lOTjE3MDIwXcQq7Juak5iXnqrgkpmeWZKYo-AW5QoAceOjEj8AAAA&hl=en&mat=CRx5A0_Sekm2ElYBTVDHni1ERTRD6poMtBcS_iFoK9L-oNxxfsy1Y02ohpOq06pvDWhZfRKVxpeD4BCnrL1af5URQ3FWIFHmaj-zyvd30acipXv2pVaDuy2L8214lw9F0A&authuser=0",
  },
  {
    label: "Singapore",
    href: "https://www.google.com/search?q=MELANGE+DIGITAL+PTE.+LTD.&stick=H4sIAAAAAAAA_-NgU1I1qDA2TEk0tLQwMTE1s0gzSrK0MqhINbYwTjMyszBITTG0TDM1W8Qq6evq4-jn7qrg4unuGeLooxAQ4qqn4BPiogcAyWX5C0UAAAA&hl=en&mat=CVKJ58F_zJeDElYBTVDHniK3LW54ibQQkNlBN0r5dy93PQImQSnSABny6grSXEp7-eTU8FbhDpwt5WaVrG1WDWDTs05ukqA4FcAoFoEVLvQYZf3QS9kBza1ECLrko0a9PA&authuser=0",
  },
  {
    label: "Zambia",
    href: "https://www.google.com/search?q=Melange+Digital+Zambia+Limited&stick=H4sIAAAAAAAA_-NgU1I1qDC0NDGwSDIwS05MtDRKNTK1MqhIMjG1MDC3SLIwSjU3T0uyXMQq55uak5iXnqrgkpmeWZKYoxCVmJuUmajgk5mbWZKaAgCUzw7SSgAAAA&hl=en&mat=CeJKO4PjPRYaElcBTVDHnogff8Oyop7N7KV1GM92mWWy1e-aIi2Z0CA2V1utDtSB5vWI8V1wtcWjNvPtOkdio8SrXvAXWfrRA85ur7QHqFcnT-JRdavnGMcCgiN8XvvSqLA&authuser=0",
  },
];

/** India + footer Global Presence offices (contact glass box). */
export const CONTACT_OFFICES = [INDIA_OFFICE, ...FOOTER_OFFICES];

export function officeShortLabel(label) {
  return label === "United Arab Emirates" ? "UAE" : label;
}
