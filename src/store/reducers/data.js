import { createSlice } from "@reduxjs/toolkit";
import { filterByCategories, filterByBrands, generatePage } from "../../utils";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    initialData: [],
    data: [],
    pages: [],
    categories: [],
    brands: [],
    minPrice: 0,
    maxPrice: 0,
    currentPage: 1,
    sortBy: "off",
    filteredCategories: [],
    filteredBrands: [],
  },
  reducers: {
    setDefaultData: (state, { payload }) => {
      state.data = payload;
      state.initialData = payload;
      state.pages = generatePage(payload);
      state.categories = filterByCategories(payload);
      state.brands = filterByBrands(payload);
      state.minPrice = Math.min(...payload.map((item) => item.price));
      state.maxPrice = Math.max(...payload.map((item) => item.price));
    },
    setData: (state, { payload }) => {
      state.data = payload;
      state.pages = generatePage(payload);
    },
    setPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setSortBy: (state, { payload }) => {
      state.sortBy = payload;
    },
  },
});

export const { setDefaultData, setPage, setSortBy, setData } =
  dataSlice.actions;
export const selectData = (state) => state.dataSlice;
export default dataSlice.reducer;
