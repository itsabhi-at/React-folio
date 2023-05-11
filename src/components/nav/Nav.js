import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiHeartsFill } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";

function Nav({ viewHeader, viewAbout, viewPort, viewExp, viewContact }) {
  const [activeNave, setActiveNave] = useState("#");

  return (
    <nav>
      <div
        // href="#"

        className={viewHeader === false ? "" : "active"}
      >
        <AiOutlineHome />
      </div>
      <div
        // href="#about"

        className={viewAbout === true ? "active" : ""}
      >
        <AiOutlineUser />
      </div>
      <div
        // href="#experience"

        className={viewExp === true ? "active" : ""}
      >
        <BiBook />
      </div>
      <div
        // href="#portfolio"

        className={
          viewAbout || viewContact || viewExp || viewHeader === true
            ? ""
            : "active"
        }
      >
        <RiHeartsFill />
      </div>
      <div
        // href="#contact"
        // onClick={() => setActiveNave("#contact")}
        className={viewContact === true ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </div>
    </nav>
  );
}

export default Nav;
