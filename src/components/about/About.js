import React from "react";
import "./about.css";
import ME from "../../assets/about.svg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { scrollReveal } from "../animation";
import { handleNavClick } from "../../utils/scrollUtils";

function About({ element, controls }) {
  const titleAnim = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.section
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      id="about"
    >
      <motion.h5
        // variants={titleAnim}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        Get to Know
      </motion.h5>
      <motion.h2 variants={titleAnim} initial="hidden" animate="show">
        About Me
      </motion.h2>
      <motion.div
        variants={titleAnim}
        initial="hidden"
        animate="show"
        className="container about__container"
      >
        <div className="about__me">
          <div className="about__me">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Certifications</h5>
              <small>5+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Hey,Firstly Thankyou for visiting.I am a self-taught front-end
            developer based out of a small town named Roorkee.I am interested in
            working with new technologies and to improve those skills everyday.
            Till now I have gained experience and worked with technologies like
            ReactJs, VanillaJS, Bootstrap, Flutter and more.Also I do
            wireframing and UI Design as a hobby as well.
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Let's Talk
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
