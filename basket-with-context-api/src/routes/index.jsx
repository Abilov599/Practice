import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../components/product-details";
import Home from "../pages/home-page";
import ProductsInBasket from "../pages/products-in-basket";
import ProductsList from "../pages/products-list";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products-list" element={<ProductsList />} />
      <Route path="products-in-basket" element={<ProductsInBasket />} />
      <Route path="product/:id" element={<ProductDetails />} />
      {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  );
};

export default Routing;
