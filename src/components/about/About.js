import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
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
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
