import React from "react";
import "./contact.css";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAlternateEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a target="_blank" href="mailto:itsabhi.at@gmail.com">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>dummyegator@gmail.com</h5>
            <a target="_blank" href="mailto:itsabhi.at@gmail.com">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIN</h4>
            <h5>dummyegator@gmail.com</h5>
            <a target="_blank" href="mailto:itsabhi.at@gmail.com">
              Send a Message
            </a>
          </article>
        </div>
        <form action="">
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
    </section>
  );
}

export default Contact;
