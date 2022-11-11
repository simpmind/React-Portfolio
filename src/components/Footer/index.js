import React from "react";


import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.github.com/simpmind/">
          <VscGithubAlt />
        </a>
        <a href="https://instagram.com/elonmusk">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/">
          <AiOutlineLinkedin />
        </a>
      </div>
      <p> &copy; 2022 DUC DANG</p>
    </div>
  );
}

export default Footer;
