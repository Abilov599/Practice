import React from "react";

const Header = () => {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Movie App</h1>
        <i className="fa-solid fa-user fa-2x"></i>
      </nav>
    </header>
  );
};

export default Header;
