import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectData, setData } from "../store/reducers/data";

const useFilteredData = () => {
  const { initialData } = useSelector(selectData);
  const dispatch = useDispatch();
  const [filteredByCategories, setFilteredByCategories] = useState([]);
  const [filteredByBrands, setFilteredByBrands] = useState([]);

  const filterByCategories = useCallback((categories, products) => {
    if (categories.length === 0) return products;
    return products.filter(({ category }) => {
      return categories.some((v) => v === category);
    });
  }, []);

  const filterByBrand = useCallback((brands, products) => {
    if (brands.length === 0) return products;
    return products.filter(({ brand }) => {
      return brands.some((v) => v === brand);
    });
  }, []);

  const checkByCategory = useCallback(
    (checked, category) => {
      let filters = [];
      if (checked) {
        filters = [...filteredByCategories, category];
      } else {
        filters = filteredByCategories.filter((c) => c !== category);
      }

      const filteredByBrandData = filterByBrand(
        filteredByCategories,
        initialData
      );
      const categoryData = filterByCategories(filters, filteredByBrandData);
      setFilteredByCategories(filters);
      dispatch(setData(categoryData));
    },
    [
      dispatch,
      filterByBrand,
      filterByCategories,
      filteredByCategories,
      initialData,
    ]
  );

  const checkByBrand = useCallback(
    (checked, brand) => {
      let filters = [];
      if (checked) {
        filters = [...filteredByBrands, brand];
      } else {
        filters = filteredByBrands.filter((c) => c !== brand);
      }

      const filteredByCategoriesData = filterByBrand(
        filteredByBrands,
        initialData
      );
      const categoryData = filterByCategories(
        filters,
        filteredByCategoriesData
      );
      setFilteredByBrands(filters);
      dispatch(setData(categoryData));
    },
    [dispatch, filterByBrand, filterByCategories, filteredByBrands, initialData]
  );

  const searchByText = useCallback(
    (value) => {
      return initialData.filter(({ name }) => {
        return name.toLowerCase().includes(value.toLowerCase());
      });
    },
    [initialData]
  );

  return {
    checkByCategory,
    checkByBrand,
    searchByText,
  };
};
export default useFilteredData;
