import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiHeartsFill } from "react-icons/ri";

function Nav({ viewHeader, viewAbout, viewPort, viewExp, viewContact }) {
  const [ActiveNave, setActiveNave] = useState("#");
  return (
    <nav>
      <a href="#">
        <div className={viewHeader === false ? "" : "active"}>
          <AiOutlineHome />
        </div>
      </a>
      <a href="#about">
        <div className={viewAbout === true ? "active" : ""}>
          <AiOutlineUser />
        </div>
      </a>
      <a href="#experience">
        <div className={viewExp === true ? "active" : ""}>
          <BiBook />
        </div>
      </a>

      <a href="#portfolio">
        <div
          className={
            viewAbout || viewContact || viewExp || viewHeader === true
              ? ""
              : "active"
          }
        >
          <RiHeartsFill />
        </div>
      </a>

      <a href="#contact" onClick={() => setActiveNave("#contact")}>
        <div className={viewContact === true ? "active" : ""}>
          <BiMessageSquareDetail />
        </div>
      </a>
    </nav>
  );
}

export default Nav;
