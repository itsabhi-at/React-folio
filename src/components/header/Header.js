import ME from "../../assets/me.svg";
import "./header.css";
import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";
import { container, titleAnim } from "../animation";

function Header({ element }) {
  return (
    <header>
      <motion.div
        ref={element}
        variants={container}
        initial="hidden"
        animate="show"
        className="container header__container"
      >
        <motion.h5 variants={titleAnim}>Hello I'm</motion.h5>
        <motion.h2 variants={titleAnim}>Abhishek Tomar </motion.h2>
        <motion.h5 variants={titleAnim} className="text-light">
          Front End Developer
        </motion.h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
