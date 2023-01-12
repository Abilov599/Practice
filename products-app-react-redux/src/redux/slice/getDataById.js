import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const fetchDataById = createAsyncThunk("fetchDataById", async (id) => {
  const response = await axios(`http://localhost:3000/products/${id}`);
  return response.data;
});

const getProductDataById = createSlice({
  name: "getProductDataById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDataById.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDataById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default getProductDataById.reducer;
