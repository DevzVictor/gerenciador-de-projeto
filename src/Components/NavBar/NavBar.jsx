import { Link } from "react-router-dom";
import "./NavBar.css"

import logo from "../../img/logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        {" "}
        <img src={logo} alt="Logo" />
      </Link>
      <ul className="list">
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="projects">Projetos</Link>
        </li>
        <li className="item">
          <Link to="company">Sobre</Link>
        </li>
        <li className="item">
          <Link to="contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
