import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../pages/details";
import Home from "../pages/home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  );
};

export default Routing;
