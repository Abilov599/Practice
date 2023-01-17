import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addToCart = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) => [
      ...state.filter((el) => el.id !== action.payload),
    ],
  },
});

export const { add, remove } = addToCart.actions;

export default addToCart.reducer;
