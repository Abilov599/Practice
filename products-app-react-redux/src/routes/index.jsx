import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProductsPage from "../pages/add-products";
import ProductsPage from "../pages/products-pages";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="add-products" element={<AddProductsPage />} />
      {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  );
};

export default Routing;
