import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import getProductsData from "../slice/getData";
import getProductDataById from "../slice/getDataById";

export const store = configureStore({
  reducer: {
    getData: getProductsData,
    getProductDataById: getProductDataById,
  },
  middleware: [thunk],
});
