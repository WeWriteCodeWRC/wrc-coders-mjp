import React from "react";
import "../styles/header.css";
import logo from "./Logo.png";

const Header = () => {
  return (
    <div className="header-main">
      <ul className="nav-ul">
        <li className="nav-item">
          <img className="logo" src={logo} alt="Logo"></img>
        </li>
        <li className="hacktober">
          <a
            className="hacktober"
            href="https://hacktoberfest.digitalocean.com/"
          >
            <b>HacktoberFest</b> 2021
          </a>
        </li>
        <li className="nav-item">
          <a
            className="github-logo"
            href="https://github.com/rosekamallove/wrc-coders-mjp"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
