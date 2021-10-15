import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header-main">
      <ul className="nav-ul">
        <li className="nav-item">Logo</li>
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
