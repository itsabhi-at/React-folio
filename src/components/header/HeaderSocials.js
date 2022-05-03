import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/abhishek-tomar-iiit/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/itsabhi-at" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.behance.net/abhishektomar-dev"
        target="_blank"
        rel="noreferrer"
      >
        <BsBehance />
      </a>
    </div>
  );
}

export default HeaderSocials;
