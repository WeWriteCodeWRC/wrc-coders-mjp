import React from "react";
import "../styles/contributorcard.css";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="center">
          <div className="avatar">
            <img
              className="avatarImage"
              src="https://avatars.githubusercontent.com/u/69139607?v=4"
              alt="avatar"
            />
          </div>
        </div>
        <ul className="card-list">
          <li className="github">
            <i class="fab fa-github"></i>
            {"  "} rosekamallove
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
