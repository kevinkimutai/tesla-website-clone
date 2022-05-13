import React from "react";

import { MdMenu } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
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
          <MdMenu className="navbar__menu-icon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
