import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Logo</h1>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/wishlist"}>Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
