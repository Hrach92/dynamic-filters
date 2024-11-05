import { createSlice } from "@reduxjs/toolkit";
import { filterByCategories, generatePage } from "../../utils";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    pages: [],
    categories: [],
    currentPage: 1,
  },
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
      state.pages = generatePage(payload);
      state.categories = filterByCategories(payload)
    },
    setPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const { setData, setPage } = dataSlice.actions;
export const selectData = (state) => state.dataSlice;
export default dataSlice.reducer;
