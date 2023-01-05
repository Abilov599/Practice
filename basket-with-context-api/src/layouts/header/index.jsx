import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>
        <h1>Products</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products-list">Products List</NavLink>
        </li>
        <li>
          <NavLink to="/products-in-basket">Products in Basket</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
