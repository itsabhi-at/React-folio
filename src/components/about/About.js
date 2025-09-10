import React from "react";
import "./about.css";
import ME from "../../assets/about.svg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";
import {
  scrollReveal,
  staggerContainer,
  fadeInUp,
  scaleIn,
} from "../animation";
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
      <motion.h2
        className="center-align"
        variants={titleAnim}
        initial="hidden"
        animate="show"
      >
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
          <motion.div
            className="about__cards"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.article className="about__card" variants={scaleIn}>
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </motion.article>
            <motion.article className="about__card" variants={scaleIn}>
              <FiUsers className="about__icon" />
              <h5>Certifications</h5>
              <small>5+</small>
            </motion.article>
            <motion.article className="about__card" variants={scaleIn}>
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </motion.article>
          </motion.div>
          <motion.p variants={fadeInUp}>
            Hey,Firstly Thankyou for visiting.I am a self-taught front-end
            developer based out of a small town named Roorkee.I am interested in
            working with new technologies and to improve those skills everyday.
            Till now I have gained experience and worked with technologies like
            ReactJs, VanillaJS, Bootstrap, Flutter and more.Also I do
            wireframing and UI Design as a hobby as well.
          </motion.p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => handleNavClick(e, "#contact")}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
