import { React, useState } from "react";

import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <div className="navbar">
      <img src="/images/logo.svg" alt="tesla" className="navbar__logo" />
      <div className="navbar__menu-links">
        <a href="#model">Model S</a>
        <a href="#model">Model 3</a>
        <a href="#model">Model X</a>
        <a href="#model">Model Y</a>
        <a href="#model">Solar roof</a>
        <a href="#model">Solar panel</a>
      </div>
      <div className="navbar__menu-right">
        <a href="#model">shop</a>
        <a href="#model">account</a>
        <a href="#model">
          <MdMenu
            className="navbar__menu-icon"
            onClick={() => {
              setShowSideNav(true);
            }}
          />
        </a>
      </div>
      <div
        className={`navbar__side-nav ${showSideNav ? "side-nav__show " : ""}`}
      >
        <div>
          <MdClose
            className="navbar__side-nav__icon"
            onClick={() => {
              setShowSideNav(false);
            }}
          />
        </div>
        <a href="#model">Existing</a>
        <a href="#model">Inventory</a>
        <a href="#model">Used Inventory</a>
        <a href="#model">Trade-In</a>
        <a href="#model">Test Drive</a>
        <a href="#model">Insurance</a>
        <a href="#model">Cybertruck </a>
        <a href="#model">Roadster</a>
        <a href="#model">Powerwall</a>
        <a href="#model">Commercial Energy Utilities </a>
        <a href="#model">Support</a>
      </div>
    </div>
  );
};

export default Navbar;
