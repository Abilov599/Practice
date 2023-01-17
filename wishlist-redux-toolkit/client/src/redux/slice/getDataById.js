import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const fetchDataById = createAsyncThunk("fetchDataById", async (id) => {
  const response = await axios(`http://localhost:3000/users/${id}/`);
  return response.data;
});

const getDataById = createSlice({
  name: "getDataByIds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataById.pending, (state, action) => {
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

export default getDataById.reducer;
