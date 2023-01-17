import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import addToCart from "../slice/addToCart";
import getDataById from "../slice/getDataById";
import getDataFromAPI from "../slice/getDataFromAPI";

export const store = configureStore({
  reducer: {
    getDataFromAPIs: getDataFromAPI,
    getDataByIds: getDataById,
    addToCart: addToCart,
  },
  middleware: [thunk],
});
