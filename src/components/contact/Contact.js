import React from "react";
import "./contact.css";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useScroll } from "../scrollAnimationHook";
import { scrollReveal } from "../animation";

function Contact({ element, controls }) {
  // const [controls, element] = useScroll();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3fbjtae",
      "template_tgo1f5g",
      form.current,
      "fm75NUEytQErQLJ4y"
    );
    e.target.reset();
  };

  return (
    <motion.section
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      id="contact"
    >
      <h5>Get In Touch</h5>
      <h2 className="center-align">Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAlternateEmail className="contact__option-icon" />
            <h4>Email</h4>
            {/* <h5></h5> */}
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:itsabhi.at@gmail.com"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            {/* <h5></h5> */}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://wa.me/918570967590?text="
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIN</h4>
            {/* <h5></h5> */}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/abhishek-tomar-iiit/"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
