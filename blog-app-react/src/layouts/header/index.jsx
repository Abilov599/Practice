import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <nav>
      <div id="logo">
        <h1>The Blog Website</h1>
      </div>
      <div id="links">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/new-blog">New Blog</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
