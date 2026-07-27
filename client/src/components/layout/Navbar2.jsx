import React, { useState, useEffect } from "react";
import { logo } from "../../assets/images";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";

const Navbar2 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed bg-white z-20 shadow-md w-full transition-transform duration-300 font-bricolage ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center px-4 md:px-12 lg:px-20 h-16 sm:h-[5.3rem] font-bricolage">
          <div
            style={{
              width: "176px",
              height: "45px",
              overflow: "hidden",
            }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="w-[100%] md:w-auto h-[100%]  md:h-auto "
              />
            </Link>
          </div>

          <div className="hidden">
            <button
              onClick={toggleMenu}
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

         
        </div>

       
      </div>
    </div>
  );
};

export default Navbar2;
