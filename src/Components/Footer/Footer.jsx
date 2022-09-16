import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import { FiMail } from "react-icons/fi";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FiMail />
        </li>
      </ul>
      <p className="copy_right">
        <span> Project Manager </span> &copy; 2022
      </p>
    </footer>
  );
}

export default Footer;
