import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiHeartsFill } from "react-icons/ri";

function Nav({ viewHeader, viewAbout, viewPort, viewExp, viewContact }) {
  const [activeNave, setActiveNave] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNave("#")}
        className={
          viewAbout || viewContact || viewExp || viewPort === true
            ? ""
            : "active"
        }
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNave("#about")}
        className={viewAbout === true ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNave("#experience")}
        className={viewExp === true ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNave("#portfolio")}
        className={viewPort === true ? "active" : ""}
      >
        <RiHeartsFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNave("#contact")}
        className={viewContact === true ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
