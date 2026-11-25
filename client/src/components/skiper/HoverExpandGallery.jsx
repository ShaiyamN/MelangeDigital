import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Hover-expand case-study gallery for the home page "See Us in Action" section.
 *
 * Adapted from Skiper UI — Skiper 52 HoverExpand_001 (horizontal) and
 * Skiper 53 HoverExpand_002 (vertical, used on mobile). React + Framer Motion.
 * https://skiper-ui.com/v1/skiper52 · https://skiper-ui.com/v1/skiper53
 *
 * License (Skiper UI free tier): free to use and modify in personal and commercial
 * projects; attribution to Skiper UI is required when using the free version.
 * Original author: @gurvinder-singh02 — https://gxuri.me
 *
 * Changes from the original: JSX instead of TSX, flex-grow sizing so it fits any
 * container width, one component that switches to the vertical variant below 768px,
 * each tile is a link to its case study with a client/title caption, keyboard focus
 * expands a tile, and reduced-motion users get instant transitions.
 */

const BASE = "/destination-marketing-agency/images/work";

const CASE_STUDIES = [
  {
    src: `${BASE}/singapore-stb.webp`,
    client: "Singapore Tourism Board",
    title: "“Is This Even Singapore?”",
    href: "/work/singapore-tourism-board-isthisevensingapore",
    alt: "Singapore Tourism Board “Is This Even Singapore?” influencer marketing campaign by Mélange Digital",
  },
  {
    src: `${BASE}/her-hong-kong-hktb.webp`,
    client: "Hong Kong Tourism Board",
    title: "#HerHongKong",
    href: "/work/hong-kong-tourism-board-herhongkong",
    alt: "Hong Kong Tourism Board #HerHongKong destination marketing campaign for Indian women travellers by Mélange Digital",
  },
  {
    src: `${BASE}/zambia-tourism.webp`,
    client: "Zambia Tourism Authority",
    title: "OTM Mumbai 2026",
    href: "/work/zambia-tourism-otm-mumbai-2026",
    alt: "Zambia Tourism Authority at OTM Mumbai 2026, a travel trade activation by Mélange Digital",
  },
  {
    src: `${BASE}/jigra-stb.webp`,
    client: "Singapore Tourism Board x Dharma Productions",
    title: "Jigra",
    href: "/work/dharma-productions-x-singapore-tourism-board-jigra",
    alt: "Singapore Tourism Board × Dharma Productions film partnership for Jigra, shot in Singapore, by Mélange Digital",
  },
  {
    src: `${BASE}/costa-cruises.webp`,
    client: "Costa Cruises",
    title: "#NamasteFromCosta",
    href: "/work/costa-cruises-introducing-luxury-cruising-to-india",
    alt: "Costa Cruises ship for #NamasteFromCosta, introducing luxury cruising to India, by Mélange Digital",
  },
  {
    src: `${BASE}/resorts-world-sentosa.webp`,
    client: "Resorts World Sentosa",
    title: "“Go Bananas in Minion Land”",
    href: "/work/resorts-world-sentosa-go-bananas-in-minion-land",
    alt: "Minion Land at Resorts World Sentosa for the “Go Bananas in Minion Land” campaign by Mélange Digital",
  },
  {
    src: `${BASE}/ram-charan-hktb.webp`,
    client: "Hong Kong Tourism Board x Esquire India",
    title: "Ram Charan Esquire Cover",
    href: "/work/hong-kong-tourism-board-x-ram-charan-esquire-india-cover",
    alt: "Ram Charan in Hong Kong for the Hong Kong Tourism Board × Esquire India cover by Mélange Digital",
  },
  {
    src: `${BASE}/resorts-world-cruises.webp`,
    client: "Dream Cruises",
    title: "Maiden GCC Launch",
    href: "/work/resorts-world-cruises-premium-cruise-launch-dubai",
    alt: "Dream Cruises ship for its maiden GCC launch in Dubai, a cruise marketing campaign by Mélange Digital",
  },
  {
    src: `${BASE}/divine-stb.webp`,
    client: "Singapore Tourism Board x DIVINE",
    title: "“Saucy” Music Video",
    href: "/work/singapore-tourism-board-x-divine-saucy-music-video",
    alt: "DIVINE's “Saucy” music video shot in Singapore, a Singapore Tourism Board music partnership by Mélange Digital",
  },
];

const MOBILE_QUERY = "(max-width: 767px)";

function useIsMobile() {
  const [mobile, setMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = () => setMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return mobile;
}

const ArrowIcon = () => (
  <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false">
    <path
      d="M3 9l6-6M4 3h5v5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HoverExpandGallery = ({ items = CASE_STUDIES }) => {
  const [active, setActive] = useState(0);
  const vertical = useIsMobile();
  const reduce = useReducedMotion();
  const ease = { duration: reduce ? 0 : 0.35, ease: "easeInOut" };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <ul
        className={`m-0 flex w-full list-none gap-1.5 p-0 ${
          vertical ? "flex-col" : "h-[26rem] flex-row lg:h-[30rem]"
        }`}
      >
        {items.map((item, index) => {
          const isActive = active === index;
          return (
            <motion.li
              key={item.href}
              className="relative min-w-0 overflow-hidden rounded-3xl bg-[#1b1d1e]"
              style={vertical ? undefined : { flexBasis: 0 }}
              initial={false}
              animate={
                vertical
                  ? { height: isActive ? "22rem" : "3rem" }
                  : { flexGrow: isActive ? 8 : 1 }
              }
              transition={ease}
              onHoverStart={() => setActive(index)}
            >
              <a
                href={item.href}
                className="group absolute inset-0 block text-white no-underline outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#7123ee]"
                aria-label={`${item.client}: ${item.title} — view case study`}
                onFocus={() => setActive(index)}
                onClick={(e) => {
                  // Touch: first tap opens the tile, second tap follows the link.
                  if (!isActive) {
                    e.preventDefault();
                    setActive(index);
                  }
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${
                    isActive ? "scale-100" : "scale-110"
                  }`}
                />
                <AnimatePresence>
                  {isActive ? (
                    <motion.span
                      key="shade"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                    />
                  ) : (
                    <motion.span
                      key="dim"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.3 }}
                      className="absolute inset-0 bg-[#0f0330]/35"
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={reduce ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{ duration: reduce ? 0 : 0.3, delay: reduce ? 0 : 0.15 }}
                      className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6"
                    >
                      <span className="min-w-0 text-left">
                        <span className="line-clamp-2 block text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/70 sm:line-clamp-1">
                          {item.client}
                        </span>
                        <span className="mt-1 block font-bricolage text-lg font-semibold leading-tight text-white sm:text-2xl">
                          {item.title}
                        </span>
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#7123ee] transition-transform duration-300 group-hover:rotate-45">
                        <ArrowIcon />
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default HoverExpandGallery;
