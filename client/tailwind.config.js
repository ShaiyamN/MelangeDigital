/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Alan Sans", "sans-serif"],
        accent: ['"Baskervville"', '"Libre Baskerville"', "serif"],
        body: ["Lato", "sans-serif"],
        nunito: ["Bricolage Grotesque", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["var(--type-body)", { lineHeight: "var(--lh-eyebrow)", letterSpacing: "0.06em", fontWeight: "500" }],
        hero: [
          "var(--type-hero)",
          { lineHeight: "var(--lh-hero)", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        display: [
          "var(--type-display)",
          { lineHeight: "var(--lh-display)", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        title: ["var(--type-title)", { lineHeight: "var(--lh-title)", fontWeight: "600" }],
        body: ["var(--type-body)", { lineHeight: "var(--lh-body)" }],
      },
      spacing: {
        "section-y": "var(--section-pad-y)",
        "section-y-sm": "var(--section-pad-y-sm)",
        "section-y-xs": "var(--section-pad-y-xs)",
        "section-header": "var(--section-header-gap)",
        "section-title": "var(--section-title-gap)",
        "hero-top": "var(--hero-pad-top)",
        "hero-bottom": "var(--hero-pad-bottom)",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        scale: "scale 0.5s ease-in-out",
      },
      screens: {
        xxs: "300px",
        xss: "390px",
        xs: "400px",
        xxl: "1400px",
        xl1: "1460px",
        xl2: "1500px",
        xxxl: "1561px",
        xll2: "1601px",
        xl5: "1650px",
        xll4: "1690px",
        xl6: "1700px",
        xl7: "1740px",
      },
    },
  },
  plugins: [],
};
