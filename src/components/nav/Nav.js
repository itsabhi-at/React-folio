import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";

function Nav() {
  const [activeNave, setActiveNave] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNave("#")}
        className={activeNave == "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNave("#about")}
        className={activeNave == "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNave("#experience")}
        className={activeNave == "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNave("#contact")}
        className={activeNave == "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
