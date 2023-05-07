import React from "react";
import CV from "../../assets/CV.pdf";
import { motion } from "framer-motion";

function CTA() {
  const button = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="cta">
      <motion.a variants={button} href={CV} download className="btn">
        Download CV
      </motion.a>
      <motion.a variants={button} href="#contact" className="btn btn-primary">
        Let's Talk
      </motion.a>
    </div>
  );
}

export default CTA;
