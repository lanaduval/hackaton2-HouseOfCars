import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import logo from "../../../assets/logo.png";
import "./NavbarOtherPages.css";

export default function NavbarOtherPages() {
  return (
    <div id="outer-container">
      <header className="header">
        <Menu outerContainerId="outer-container">
          <Link to="/" className="menu-item">
            Accueil
          </Link>
          <Link to="/about" className="menu-item">
            About
          </Link>
          <Link to="/contact" className="menu-item">
            Contact
          </Link>
        </Menu>
        <img className="logo" src={logo} alt="Logo" />
      </header>
    </div>
  );
}
