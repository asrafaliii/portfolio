import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer footer-center text-center p-5 ">
      <div className="flex justify-center text-3xl text-white mb-3">
        <a href="https://github.com/asrafaliii" target="_blank">
          <FaGithub size={30} style={{ marginRight: "1rem" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-asraf-ali/"
          target="_blank"
        >
          <FaLinkedin size={30} style={{ marginRight: "1rem" }} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100007892596739"
          target="_blank"
        >
          <FaFacebook href="" size={30} style={{ marginRight: "1rem" }} />
        </a>
      </div>
      <div className="text-white">
        <p>Copyright © 2022 - All right reserved by Asraf</p>
      </div>
    </footer>
  );
};

export default Footer;
