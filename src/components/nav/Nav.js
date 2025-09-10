import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiHeartsFill } from "react-icons/ri";

function Nav({ viewHeader, viewAbout, viewPort, viewExp, viewContact }) {
  const [activeNav, setActiveNav] = useState("#home");

  const handleNavClickLocal = (e, section) => {
    e.preventDefault();
    setActiveNav(section);

    // Get the target element
    const targetElement = document.querySelector(section);
    if (targetElement) {
      // Calculate the offset to account for any fixed header
      const offsetTop = targetElement.offsetTop - 80; // Adjust 80px offset as needed

      // Smooth scroll to the target element
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Update active nav based on scroll position with a small delay
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (viewHeader) setActiveNav("#home");
      else if (viewAbout) setActiveNav("#about");
      else if (viewExp) setActiveNav("#experience");
      else if (viewPort) setActiveNav("#portfolio");
      else if (viewContact) setActiveNav("#contact");
    }, 100); // Small delay to prevent conflicts with manual clicks

    return () => clearTimeout(timeoutId);
  }, [viewHeader, viewAbout, viewExp, viewPort, viewContact]);

  return (
    <nav>
      <a
        href="#home"
        onClick={(e) => handleNavClickLocal(e, "#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <div className={viewHeader === true ? "active" : ""}>
          <AiOutlineHome />
        </div>
      </a>
      <a
        href="#about"
        onClick={(e) => handleNavClickLocal(e, "#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <div className={viewAbout === true ? "active" : ""}>
          <AiOutlineUser />
        </div>
      </a>
      <a
        href="#experience"
        onClick={(e) => handleNavClickLocal(e, "#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <div className={viewExp === true ? "active" : ""}>
          <BiBook />
        </div>
      </a>
      <a
        href="#portfolio"
        onClick={(e) => handleNavClickLocal(e, "#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <div className={viewPort === true ? "active" : ""}>
          <RiHeartsFill />
        </div>
      </a>
      <a
        href="#contact"
        onClick={(e) => handleNavClickLocal(e, "#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <div className={viewContact === true ? "active" : ""}>
          <BiMessageSquareDetail />
        </div>
      </a>
    </nav>
  );
}

export default Nav;
