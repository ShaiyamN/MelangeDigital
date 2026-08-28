import { Link } from "react-router-dom";
import { FOOTER_OFFICES } from "../../constants/officeGmb";
import { openEmail, openPhone } from "../../utils/openContactLink";
import "./footer.css";

const IMG = "/about";

const Footer = () => (
  <footer className="site-foot">
    <div className="site-foot__wrap site-foot__grid">
      <div className="site-foot__brand">
        <img
          className="site-foot__logo"
          src={`${IMG}/logo-footer.png`}
          alt="Mélange Digital"
          width="220"
          height="40"
        />
        <p className="site-foot__follow">Follow us</p>
        <div className="site-foot__social">
          <a
            href="https://www.linkedin.com/company/melangedigital"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={`${IMG}/si-linkedin.svg`} alt="" />
          </a>
          <a
            href="https://www.instagram.com/melangedigital.co"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @melangedigital.co"
          >
            <img src={`${IMG}/si-insta.svg`} alt="" />
          </a>
        </div>
      </div>
      <div>
        <h3>Our Services</h3>
        <ul>
          <li>
            <Link to="/services/influencer-marketing">Influencer &amp; Celebrity Marketing</Link>
          </li>
          <li>
            <Link to="/services/pr-and-outreach">Branded Content &amp; IP</Link>
          </li>
          <li>
            <Link to="/services/immersive-brand-storytelling">Experiential Marketing</Link>
          </li>
          <li>
            <Link to="/services/pr-and-outreach">FAM Trips + PR</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/work">Our Work</Link>
          </li>
          <li>
            <Link to="/indian-outbound-tourism-report">Travel Reports</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Global Presence</h3>
        <ul>
          {FOOTER_OFFICES.map((office) => (
            <li key={office.label}>
              <a href={office.href} target="_blank" rel="noopener noreferrer">
                {office.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@melangedigital.co"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                openEmail("hello@melangedigital.co");
              }}
            >
              hello@melangedigital.co
            </a>
          </li>
          <li>
            <a
              href="tel:+917700974123"
              onClick={(e) => {
                e.preventDefault();
                openPhone("+917700974123");
              }}
            >
              +91 7700974123
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="site-foot__wrap site-foot__legal">
      <span>&copy; {new Date().getFullYear()} Melange Digital. All rights reserved.</span>
      <div className="site-foot__legal-links">
        <Link to="/terms-of-service">Terms of Service</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/cookie-policy">Cookie Policy</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
