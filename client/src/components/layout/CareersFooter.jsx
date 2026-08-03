import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CareersFooter = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const serviceLinks = [
    { to: "/services/brand-strategy", text: "Brand Strategy & Planning" },
    { to: "/services/influencer-marketing", text: "Influencer Marketing" },
    { to: "/services/immersive-brand-storytelling", text: "Immersive brand storytelling" },
    { to: "/services/design-and-development", text: "Design & Development" },
    { to: "/services/content-strategy-and-production", text: "Content Strategy & Production" },
    { to: "/services/pr-and-outreach", text: "PR, IPs & Outreach" },
  ];

  const companyLinks = [
    { to: "/about", text: "About Us" },
    { to: "/work", text: "Our Work" },
    { href: "/destination-marketing-agency/", text: "Tourism", external: true },
    { to: "/blogs", text: "Blogs" },
    { to: "/careers", text: "Careers" },
  ];

  const locations = [
    { href: "https://melangedigital.co/india", label: "India" },
    { href: "https://melangedigital.co/uk", label: "United Kingdom" },
    { href: "https://melangedigital.co/uae", label: "United Arab Emirates" },
    { href: "https://melangedigital.co/singapore", label: "Singapore" },
    { href: "https://melangedigital.co/zambia", label: "Zambia" },
  ];

  const letsTalkText = "Let's Talk".split("");

  // Star/asterisk SVG (4-pointed)
  const StarIcon = () => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26 0 C26 14.359 26 26 26 26 C26 26 37.641 14.359 52 26 C37.641 26 26 26 26 26 C26 26 26 37.641 26 52 C26 37.641 26 26 26 26 C26 26 14.359 37.641 0 26 C14.359 26 26 26 26 26 C26 26 26 14.359 26 0Z"
        fill="white"
      />
    </svg>
  );

  // LinkedIn SVG icon
  const LinkedInIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  // Instagram SVG icon
  const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );

  return (
    <div className="bg-[#1a1a1a] text-white font-bricolage">
      <footer className="max-w-[1440px] mx-auto">

        {/* Let's Talk Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="lg:px-20 px-5 pt-14 pb-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <motion.div variants={staggerChildren} className="flex flex-wrap overflow-hidden">
            {letsTalkText.map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                className="text-white text-[73px] md:text-[224px] font-normal leading-none"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Purple pill "Get in Touch" button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="shrink-0 w-full lg:w-[25%] lg:flex lg:justify-center"
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)",
                  borderRadius: "999px",
                  padding: "12px 32px",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "white",
                  letterSpacing: "0.01em",
                }}
              >
                Get in Touch
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="lg:px-20 px-5">
          <div className="h-px bg-[#333333]" />
        </div>

        {/* Footer 4-column Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15 }}
          variants={staggerChildren}
          className="lg:px-20 px-5 pt-10 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >

          {/* Col 1: Mélange Digital */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-semibold text-[20px] md:text-[22px] mb-5 text-white">
              Mélange Digital
            </h2>

            {/* Follow Us */}
            <div className="mb-6">
              <p className="text-[#aaaaaa] text-sm uppercase tracking-widest mb-3">Follow us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/melangedigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #9333ea)" }}
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.instagram.com/melangedigital.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #9333ea)" }}
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <p className="text-[#aaaaaa] text-sm uppercase tracking-widest mb-2">Contact Us</p>
              <a
                href="mailto:hello@melangedigital.co"
                className="block text-[#dddddd] text-[15px] hover:text-white transition-colors"
              >
                hello@melangedigital.co
              </a>
            </div>
          </motion.div>

          {/* Col 2: Our Services */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-semibold text-[20px] md:text-[22px] mb-5 text-white">
              Our Services
            </h2>
            <div className="flex flex-col gap-[6px]">
              {serviceLinks.map((service, index) => (
                <motion.div key={index} whileHover={{ x: 6 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={service.to}
                    className="text-[#dddddd] text-[15px] hover:text-white transition-colors block"
                    state={{ reload: true }}
                  >
                    {service.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Col 3: Company */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-semibold text-[20px] md:text-[22px] mb-5 text-white">
              Company
            </h2>
            <div className="flex flex-col gap-[6px]">
              {companyLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ x: 6 }} transition={{ duration: 0.2 }}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className="text-[#dddddd] text-[15px] hover:text-white transition-colors block"
                      onClick={
                        link.external
                          ? (e) => {
                              e.preventDefault();
                              window.location.assign(link.href);
                            }
                          : undefined
                      }
                    >
                      {link.text}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-[#dddddd] text-[15px] hover:text-white transition-colors block"
                    >
                      {link.text}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Col 4: Our Global Presence */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-semibold text-[20px] md:text-[22px] mb-5 text-white">
              Our Global Presence
            </h2>
            <div className="flex flex-col gap-[6px]">
              {locations.map((loc, index) => (
                <motion.div key={index} whileHover={{ x: 6 }} transition={{ duration: 0.2 }}>
                  <a
                    href={loc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#dddddd] text-[15px] hover:text-white transition-colors block"
                  >
                    {loc.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* Copyright Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:px-20 px-5 pb-6"
        >
          <div className="h-px bg-[#333333] mb-5" />
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            {/* Legal links */}
            <div className="flex flex-wrap gap-x-7 gap-y-2">
              {[
                { to: "/terms-of-service", text: "Terms of Service" },
                { to: "/privacy-policy", text: "Privacy Policy" },
                { to: "/cancellation-and-refund-policy", text: "Cancellation & Refund Policy" },
                { to: "/cookie-policy", text: "Cookie Policy" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="text-[#aaaaaa] text-sm hover:text-white transition-colors"
                >
                  {item.text}
                </Link>
              ))}
            </div>

            {/* Copyright + Star */}
            <div className="flex items-center gap-4">
              <p className="text-[#aaaaaa] text-sm whitespace-nowrap">
                &copy; {new Date().getFullYear()} Mélange Digital. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>

      </footer>
    </div>
  );
};

export default CareersFooter;
