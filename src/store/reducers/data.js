import { createSlice } from "@reduxjs/toolkit";
import {
  filterByCategories,
  filterByBrands,
  generatePage,
  getCategories,
  setLocalStorage,
  getStorageData,
} from "../../utils";

const initialState = {
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
  filterRate: 1,
  searchText: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDefaultData: (state, { payload }) => {
      const storageData = getStorageData("filters");
      const minPrice = Math.min(...payload.map((item) => item.price));

      state.data = payload;
      state.initialData = payload;
      state.categories = filterByCategories(payload);
      state.brands = filterByBrands(payload);
      state.maxPrice = Math.max(...payload.map((item) => item.price));
      state.minPrice = minPrice;
      state.filterPrice = storageData.price || minPrice;
      state.filteredCategories = storageData.category || [];
      state.filteredBrands = storageData.brand || [];
      state.filterRate = storageData.rating || 1;
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
      const { checked, category } = payload;
      const filters = getCategories(
        checked,
        category,
        state.filteredCategories
      );
      state.filteredCategories = filters;
      setLocalStorage("filters", "category", filters);
    },
    setBrandFilters: (state, { payload }) => {
      const { checked, brand } = payload;
      const filters = getCategories(checked, brand, state.filteredBrands);
      state.filteredBrands = filters;
      setLocalStorage("filters", "brand", filters);
    },
    setPriceFilters: (state, { payload }) => {
      state.filterPrice = payload;
      setLocalStorage("filters", "price", payload);
    },
    setRateFilters: (state, { payload }) => {
      state.filterRate = payload;
      setLocalStorage("filters", "rating", payload);
    },
    resetFilters: (state) => {
      localStorage.removeItem("filters");
      state.filterPrice = state.minPrice;
      state.filteredCategories = [];
      state.filteredBrands = [];
      state.filterRate = 1;
      state.searchText = "";
    },
    setSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
  },
});

export const {
  setDefaultData,
  setPage,
  setSortBy,
  setData,
  setCategoryFilters,
  setBrandFilters,
  setPriceFilters,
  setRateFilters,
  setSearchText,
  resetFilters,
} = dataSlice.actions;
export const selectData = (state) => state.dataSlice;
export default dataSlice.reducer;
