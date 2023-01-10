import { stack as Menu } from "react-burger-menu";
import logo from "../../../assets/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="outer-container">
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        {/* <a className="bm-item" href="/">
          Accueil
        </a>
        <a className="bm-item" href="/trucs">
          Trucs de machins
        </a>
        <a className="bm-item" href="/contact">
          Nous contacter
        </a> */}
      </header>
      <Menu outerContainerId="outer-container">
        <a className="menu-item" href="/">
          Accueil
        </a>
        <a className="menu-item" href="/trucs">
          Trucs de machins
        </a>
        <a className="menu-item" href="/contact">
          Nous contacter
        </a>
      </Menu>
    </div>
  );
}
