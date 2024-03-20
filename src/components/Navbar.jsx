import React, { useState, useEffect } from "react";
import logo from "../assets/v_logo.png";
import { HiMenu } from "react-icons/hi";
import { Link as ScrollLink, Events, animateScroll as scroll } from "react-scroll";

// ... (import statements)

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    Events.scrollEvent.register("begin", () => { });
    Events.scrollEvent.register("end", () => { });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleSetInactive = () => {
    if (activeSection !== "home") {
      setActiveSection("");
    }
  };



  const getLinkStyle = (section) => {
    return `${activeSection === section ? "text-teal-500 font-bold" : "hover:text-teal-500"} cursor-pointer px-4 py-2`;
  };



  return (
    <header className={`w-full fixed top-0 left-0 right-0 ${isSticky ? "bg-white shadow-md" : ""}`}>
      <nav className="py-4 md:px-12 px-4 bg-white">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg cursor-pointer">
            <img src={logo} width={50} height={50} alt="" className="h-10" />
          </div>

          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body">
            <ScrollLink
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={handleSetActive}
              onSetInactive={handleSetInactive}
              className={getLinkStyle("home")}
            >
              Home
            </ScrollLink>

            <ScrollLink
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={handleSetActive}
              onSetInactive={handleSetInactive}
              className={getLinkStyle("skills")}
            >
              Expertise
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={handleSetActive}
              onSetInactive={handleSetInactive}
              className={getLinkStyle("portfolio")}
            >
              Portfolio
            </ScrollLink>
          </div>

          {/* contact me btn */}
          <div className="lg:block hidden">
            <button className="px-4 py-2 bg-transparent border border-black text-black rounded hover:bg-teal-500 hover:text-white hover:font-bold transition-all duration-300">
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
                className={`${activeSection === "contact" ? "text-black-400 cursor-pointer px-4 py-2" : "hover:text-black-400"
                  }`}
              >
                Contact Me
              </ScrollLink>
            </button>
          </div>

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-body p-4 rounded-lg text-white">
            <ScrollLink
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={handleSetActive}
              onSetInactive={handleSetInactive}
              className={getLinkStyle("home")}
            >
              Home
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={handleSetActive}
              onSetInactive={handleSetInactive}
              className={getLinkStyle("skills")}
            >
              Expertise
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={handleSetActive}
              onSetInactive={handleSetInactive}
              className={getLinkStyle("portfolio")}
            >
              Portfolio
            </ScrollLink>
            
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
