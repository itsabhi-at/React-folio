import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiHeartsFill } from "react-icons/ri";

function Nav({ viewHeader, viewAbout, viewPort, viewExp, viewContact }) {
  const [activeNav, setActiveNav] = useState("#home");
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNavClickLocal = (e, section) => {
    e.preventDefault();
    setActiveNav(section);
    setIsScrolling(true);

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

    // Reset scrolling flag after animation completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  // Update active nav based on scroll position (only when not manually scrolling)
  useEffect(() => {
    if (!isScrolling) {
      if (viewHeader) setActiveNav("#home");
      else if (viewAbout) setActiveNav("#about");
      else if (viewExp) setActiveNav("#experience");
      else if (viewPort) setActiveNav("#portfolio");
      else if (viewContact) setActiveNav("#contact");
    }
  }, [viewHeader, viewAbout, viewExp, viewPort, viewContact, isScrolling]);

  // Additional scroll listener for more reliable desktop detection
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = [
        "#home",
        "#about",
        "#experience",
        "#portfolio",
        "#contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveNav(sections[i]);
          break;
        }
      }
    };

    // Throttle scroll events for better performance
    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };

    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isScrolling]);

  return (
    <nav>
      <a
        href="#home"
        onClick={(e) => handleNavClickLocal(e, "#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <div>
          <AiOutlineHome />
        </div>
      </a>
      <a
        href="#about"
        onClick={(e) => handleNavClickLocal(e, "#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <div>
          <AiOutlineUser />
        </div>
      </a>
      <a
        href="#experience"
        onClick={(e) => handleNavClickLocal(e, "#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <div>
          <BiBook />
        </div>
      </a>
      <a
        href="#portfolio"
        onClick={(e) => handleNavClickLocal(e, "#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <div>
          <RiHeartsFill />
        </div>
      </a>
      <a
        href="#contact"
        onClick={(e) => handleNavClickLocal(e, "#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <div>
          <BiMessageSquareDetail />
        </div>
      </a>
    </nav>
  );
}

export default Nav;
