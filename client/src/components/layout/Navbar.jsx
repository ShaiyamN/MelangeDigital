import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { logo } from "../../assets/images";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";

// FlagImg: renders a proper flag image from flagcdn.com — works on all OS including Windows
const FlagImg = ({ code, size = 20 }) => (
  <img
    src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
    srcSet={`https://flagcdn.com/w80/${code.toLowerCase()}.png 2x`}
    width={size}
    height={Math.round(size * 0.75)}
    alt=""
    style={{
      borderRadius: "3px",
      objectFit: "cover",
      flexShrink: 0,
      display: "inline-block",
      verticalAlign: "middle",
    }}
  />
);

const globalRegions = [
  {
    continent: "Asia",
    countries: [
      {
        label: "India",
        code: "in",
        href: "https://melangedigital.co/india",
        cities: [
          { label: "Goa", href: "https://melangedigital.co/india/digital-marketing-agency-goa/" },
          { label: "Mumbai", href: "https://melangedigital.co/india/digital-marketing-agency-mumbai/" },
          { label: "Delhi", href: "https://melangedigital.co/india/digital-marketing-agency-delhi/" },
        ],
      },
      {
        label: "UAE",
        code: "ae",
        href: "https://melangedigital.co/uae",
        cities: [
          { label: "Dubai", href: "https://melangedigital.co/uae/digital-marketing-agency-dubai/" },
        ],
      },
      {
        label: "Zambia",
        code: "zm",
        href: "https://melangedigital.co/zambia",
        cities: [
          { label: "Lusaka", href: "https://melangedigital.co/zambia/digital-marketing-agency-lusaka/" },
        ],
      }
      ,
      {
        label: "Singapore",
        code: "sg",
        href: "https://melangedigital.co/singapore",
        cities: [
          { label: "Singapore", href: "https://melangedigital.co/singapore/digital-marketing-agency-singapore/" },
        ],
      },
      {
        label: "United Kingdom",
        code: "gb",
        href: "https://melangedigital.co/uk",
        cities: [
          { label: "London", href: "https://melangedigital.co/uk/digital-marketing-agency-london/" },
        ],
      }
    ],
  },
];

const allCountries = globalRegions.flatMap((r) => r.countries);

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About Us" },
  { href: "/tourism/", label: "Tourism", external: true },
];

const mobileNavLinks = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About Us" },
  { href: "/tourism/", label: "Tourism", external: true },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isGlobalOpen, setGlobalOpen] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [isMobileGlobalOpen, setMobileGlobalOpen] = useState(false);
  const [openCountry, setOpenCountry] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const globalWrapRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hoverTimeout = useRef(null);

  const openGlobal = () => {
    clearTimeout(hoverTimeout.current);
    setGlobalOpen(true);
  };

  const closeGlobal = () => {
    hoverTimeout.current = setTimeout(() => {
      setGlobalOpen(false);
      setHoveredCountry(null);
    }, 150);
  };

  const toggleCountry = (label) => {
    setOpenCountry((prev) => (prev === label ? null : label));
  };

  // Close mobile Global dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileGlobalOpen(false);
        setOpenCountry(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    return () => clearTimeout(hoverTimeout.current);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeCitiesIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nb-global-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          font-weight: 800;
          font-size: 17px;
          color: #1a1a1a;
          background: none;
          border: none;
          padding: 0;
          font-family: inherit;
          transition: color 0.2s ease;
          line-height: 1;
        }

        .nb-global-btn:hover,
        .nb-global-btn.nb-active {
          color: #d940ff;
        }

        .nb-chevron {
          width: 11px;
          height: 11px;
          transition: transform 0.25s ease;
          opacity: 0.45;
        }

        .nb-global-btn.nb-active .nb-chevron {
          transform: rotate(180deg);
          opacity: 1;
        }

        /* The outer wrap covers button + gap + dropdown so mouse never leaves */
        .nb-global-outer {
          position: relative;
        }

        /* Invisible bridge fills the gap between button and dropdown */
        .nb-hover-bridge {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: min(900px, calc(100vw - 40px));
          height: 18px; /* covers the gap */
          z-index: 299;
        }

        .nb-dropdown-wrap {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%);
          width: min(900px, calc(100vw - 40px));
          z-index: 300;
        }

        .nb-dropdown {
          width: 100%;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(24px) saturate(1.6);
          -webkit-backdrop-filter: blur(24px) saturate(1.6);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0,0,0,0.04);
          padding: 12px 10px;
          animation: fadeSlideIn 0.18s ease forwards;
        }

        .nb-country-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 4px;
          align-items: center;
        }

        .nb-country-col {
          min-width: 0;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid transparent;
          transition: background 0.18s ease, border-color 0.18s ease;
          position: relative;
          cursor: pointer;
          /* Ensure all cols are same height baseline */
          display: flex;
          align-items: center;
        }

        .nb-country-col:hover {
          background: rgba(217, 64, 255, 0.05);
          border-color: rgba(217, 64, 255, 0.12);
        }

        /* FIX: Country link is now fully clickable (removed pointer-events: none) */
        .nb-country-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
          color: #1a1a1a;
          font-weight: 800;
          font-size: 14px;
          line-height: 1.2;
        }

        .nb-country-link:hover {
          text-decoration: none;
        }

        .nb-country-col:hover .nb-country-link {
          color: #d940ff;
        }

        .nb-country-flag {
          font-size: 18px;
          line-height: 1;
        }

        .nb-country-name {
          white-space: nowrap;
        }

        /* Cities float as absolute popover — never affect bar height */
        .nb-city-popover {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          min-width: 160px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(217, 64, 255, 0.12);
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.10);
          padding: 6px;
          z-index: 400;
          animation: fadeCitiesIn 0.14s ease forwards;
        }

        .nb-city-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          text-decoration: none;
          color: #333;
          font-size: 13px;
          font-weight: 600;
          padding: 7px 10px;
          border-radius: 8px;
          transition: all 0.15s ease;
          white-space: nowrap;
        }

        .nb-city-link:hover {
          text-decoration: none;
          color: #d940ff;
          background: rgba(217, 64, 255, 0.07);
        }

        .nb-city-arrow {
          font-size: 9px;
          color: #ccc;
          transition: color 0.15s ease;
        }

        .nb-city-link:hover .nb-city-arrow {
          color: #d940ff;
        }

        /* Mobile */
        .mb-g-chev {
          width: 13px;
          height: 13px;
          color: #1a1a1a;
          opacity: 0.3;
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .mb-g-chev.open {
          transform: rotate(180deg);
          opacity: 0.5;
        }

        .mb-country-list {
          padding-left: 14px;
        }

        .mb-country-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding: 9px 0;
          cursor: pointer;
          font-family: inherit;
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          text-align: left;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }

        .mb-country-btn:last-of-type {
          border-bottom: none;
        }

        .mb-c-left {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #1a1a1a !important;
          text-decoration: none !important;
          font-size: 18px;
          font-weight: 700;
          flex: 1;
        }

        .mb-c-left:hover {
          color: #d940ff !important;
        }

        .mb-c-flag {
          font-size: 17px;
          line-height: 1;
        }

        .mb-c-chev {
          width: 11px;
          height: 11px;
          color: #1a1a1a;
          opacity: 0.25;
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .mb-c-chev.open {
          transform: rotate(180deg);
          opacity: 0.5;
        }

        .mb-city-list {
          padding-left: 28px;
          padding-bottom: 4px;
        }

        .mb-city-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 0;
          font-size: 15px;
          font-weight: 500;
          color: #1a1a1a;
          text-decoration: none;
          border-bottom: 1px solid rgba(0,0,0,0.04);
        }

        .mb-city-link:last-child {
          border-bottom: none;
        }

        .mb-city-link:hover {
          color: #d940ff;
          text-decoration: none;
        }

        .mb-city-arr {
          font-size: 10px;
          color: #ccc;
        }

        .mb-city-link:hover .mb-city-arr {
          color: #d940ff;
        }

        @media (max-width: 1200px) {
          .nb-country-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .nb-country-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .nb-dropdown-wrap {
            width: calc(100vw - 20px);
          }
          .nb-country-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div
        className={`fixed z-20 w-full transition-transform duration-300 font-bricolage mb-5 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-white shadow-md">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-center px-4 md:px-12 lg:px-20 h-16 sm:h-[5.3rem]">
              <div style={{ width: "176px", height: "45px", overflow: "hidden" }}>
                <Link to="/">
                  <img src={logo} alt="Logo" className="w-full md:w-auto h-full md:h-auto" />
                </Link>
              </div>

              {/* Hamburger — mobile only */}
              <div className="sm:hidden">
                <button
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
                  aria-label="Toggle Menu"
                >
                  {isMenuOpen ? (
                    <RiCloseLine className="hamburger-icon w-10 h-8" />
                  ) : (
                    <RiMenu3Line className="hamburger-icon w-10 h-8" />
                  )}
                </button>
              </div>

              {/* Desktop nav */}
              <div className="hidden sm:flex font-extrabold text-[17px] justify-around items-center w-2/3 md:w-[60%] lg:w-[65%]">

                {/* Global dropdown — hover with bridge to prevent flicker */}
                <div
                  className="nb-global-outer hidden"
                  ref={globalWrapRef}
                  onMouseEnter={openGlobal}
                  onMouseLeave={closeGlobal}
                >
                  <button className={`nb-global-btn ${isGlobalOpen ? "nb-active" : ""}`}>
                    Global
                    <svg className="nb-chevron" viewBox="0 0 10 6" fill="none">
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isGlobalOpen && (
                    <>
                      {/* Invisible bridge covers the gap so hover doesn't break */}
                      <div className="nb-hover-bridge" />

                      <div className="nb-dropdown-wrap">
                        <div className="nb-dropdown">
                          <div className="nb-country-row">
                            {allCountries.map((country) => (
                              <div
                                key={country.label}
                                className="nb-country-col"
                                onMouseEnter={() => setHoveredCountry(country.label)}
                                onMouseLeave={() => setHoveredCountry(null)}
                              >
                                {/* FIX: Country name is now a real clickable link */}
                                <a href={country.href} className="nb-country-link">
                                  <FlagImg code={country.code} size={22} />
                                  <span className="nb-country-name">{country.label}</span>
                                </a>

                                {hoveredCountry === country.label && (
                                  <div className="nb-city-popover">
                                    {country.cities.map((city) => (
                                      <a key={city.label} href={city.href} className="nb-city-link">
                                        <span>{city.label}</span>
                                        <span className="nb-city-arrow">↗</span>
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {navLinks.map((link) => (
                  <div key={link.to || link.href} className="navbar-link cursor-pointer">
                    {link.href ? (
                      <a
                        href={link.href}
                        className="nav-link"
                        onClick={
                          link.external
                            ? (e) => {
                                e.preventDefault();
                                window.location.assign(link.href);
                              }
                            : undefined
                        }
                      >
                        {link.label}
                      </a>
                    ) : (
                      <NavLink
                        to={link.to}
                        className={({ isActive }) => `nav-link ${isActive ? "activePath" : ""}`}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </div>
                ))}

                <Link to="/contact">
                  <div className="contact-btn w-[177px] h-[56px] flex items-center justify-center rounded-2xl cursor-pointer bg-[#1A1A1A] font-medium text-[17px]">
                    <span>Contact Us</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile menu — portaled to document.body so it's never a child of the fixed navbar */}
      {isMenuOpen && createPortal(
        <div
          ref={mobileMenuRef}
          className="font-bricolage"
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "#fff",
            overflowY: "auto",
            overflowX: "hidden",
            WebkitOverflowScrolling: "touch",
            zIndex: 9998,
          }}
        >
          <div className="flex flex-col items-start pt-6 pl-4 pr-4 pb-6 gap-1 font-medium">
            {mobileNavLinks.map((link) => (
              <div key={link.to || link.href} className="navbar-link cursor-pointer">
                {link.href ? (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      setMenuOpen(false);
                      if (link.external) {
                        e.preventDefault();
                        window.location.assign(link.href);
                      }
                    }}
                    className="nav-link text-[25px] py-3"
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `nav-link text-[25px] py-3 ${isActive ? "activePath" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}

            {/* Mobile Global — click to toggle, stays open on scroll */}
            <div className="hidden" style={{ width: "100%" }}>
              <button
                className="nav-link text-[25px] py-3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textAlign: "left",
                  outline: "none",
                  WebkitTapHighlightColor: "transparent",
                  paddingLeft: "8px",
                }}
                onClick={() => setMobileGlobalOpen((prev) => !prev)}
              >
                Global
                <svg
                  className={`mb-g-chev ${isMobileGlobalOpen ? "open" : ""}`}
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isMobileGlobalOpen && (
                <div className="mb-country-list">
                  {allCountries.map((country) => (
                    <div key={country.label}>
                      <div className="mb-country-btn">
                        <a href={country.href} className="mb-c-left">
                          <FlagImg code={country.code} size={20} />
                          {country.label}
                        </a>
                        <svg
                          className={`mb-c-chev ${openCountry === country.label ? "open" : ""}`}
                          viewBox="0 0 10 6"
                          fill="none"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleCountry(country.label);
                          }}
                          style={{ cursor: "pointer", padding: "4px" }}
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {openCountry === country.label && (
                        <div className="mb-city-list">
                          {country.cities.map((city) => (
                            <a key={city.label} href={city.href} className="mb-city-link">
                              {city.label}
                              <span className="mb-city-arr">↗</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navbar;
