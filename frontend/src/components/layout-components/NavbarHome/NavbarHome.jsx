import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import logo from "../../../assets/logo.png";
import "./NavbarHome.css";

export default function NavbarHome() {
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
        <div>
          <Link to="/" className="menu-item-bar">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <div>
          <Link to="/login">
            <button type="button" className="login_button">
              Company Space
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
