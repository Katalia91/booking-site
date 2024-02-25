import React from "react";
import { NavLink } from "react-router-dom";

function MainMenu() {
  return (
    <nav className="main-menu">
      <a href="/">
        <div className="logo">Home</div>
      </a>
      <ul>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/about">Practical info</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
