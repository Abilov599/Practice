import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import getProductsData from "../slice/getData.js";

export const store = configureStore({
  reducer: {
    getData: getProductsData,
  },
  middleware: [thunk],
});
