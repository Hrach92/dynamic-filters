import { createSlice } from "@reduxjs/toolkit";
import { generatePage } from "../../utils";

const dataSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    pages: [],
    currentPage: 1,
  },
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
      state.pages = generatePage(payload);
    },
    setPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const { setData, setPage } = dataSlice.actions;
export const selectData = (state) => state.dataSlice;
export default dataSlice.reducer;
