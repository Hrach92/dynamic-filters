import { createSlice } from "@reduxjs/toolkit";
import { filterByCategories, filterByBrands, generatePage, getCategories, setLocalStorage } from "../../utils";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    initialData: [],
    data: [],
    categories: [],
    brands: [],
    minPrice: 0,
    maxPrice: 0,
    currentPage: 1,
    sortBy: "off",
    filteredCategories: [],
    filteredBrands: [],
    filterPrice: 0,
    filterRate: 1
  },
  reducers: {
    setDefaultData: (state, { payload }) => {
      state.data = payload;
      state.initialData = payload;
      state.categories = filterByCategories(payload);
      state.brands = filterByBrands(payload);
      const minPrice = Math.min(...payload.map((item) => item.price));
      state.minPrice = minPrice
      state.filterPrice = minPrice
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
    setCategoryFilters: (state, { payload }) => {
      const { checked, category } = payload
      const filters = getCategories(checked, category, state.filteredCategories)
      state.filteredCategories = filters
      setLocalStorage("filters", "category", filters)
    },
    setBrandFilters: (state, { payload }) => {
      const { checked, brand } = payload
      const filters = getCategories(checked, brand, state.filteredBrands)
      state.filteredBrands = filters
      setLocalStorage("filters", "brand", filters)
    },
    setPriceFilters: (state, { payload }) => {
      state.filterPrice = payload
      setLocalStorage("filters", "price", payload)

    },
    setRateFilters: (state, { payload }) => {
      state.filterRate = payload
      setLocalStorage("filters", "rating", payload)
    },
  },
});

export const { setDefaultData, setPage, setSortBy, setData, setCategoryFilters, setBrandFilters, setPriceFilters, setRateFilters } =
  dataSlice.actions;
export const selectData = (state) => state.dataSlice;
export default dataSlice.reducer;
