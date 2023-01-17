import React from "react";
import { Route, Routes } from "react-router-dom";
import Wishlist from "../components/wishlist";
import Home from "../pages/home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<Wishlist />} />
      {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  );
};

export default Routing;
