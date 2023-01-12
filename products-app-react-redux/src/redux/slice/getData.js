import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const fetchData = createAsyncThunk("getData", async () => {
  const response = await axios("http://localhost:3000/products");
  return response.data;
});

const getProductsData = createSlice({
  name: "getData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(fetchData.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default getProductsData.reducer;
