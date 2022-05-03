import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrSnapchat } from "react-icons/gr";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <a href="" className="footer__logo">
        ThankYou
      </a>
      <ul className="permalinks">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="http://">About</a>
        </li>
        <li>
          <a href="http://">Experience</a>
        </li>
        <li>
          <a href="http://">Services</a>
        </li>
        <li>
          <a href="http://">Portfolio</a>
        </li>
        <li>
          <a href="http://">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="">
          <AiOutlineInstagram />
        </a>
        <a href="">
          <GrSnapchat />
        </a>
        <a href="">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Abhishek.All rights Reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
