import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectData } from "../store/reducers/data";
import useOnChange from "./useOnChange";

const useFilteredData = () => {
  const {
    initialData,
    filteredCategories,
    filteredBrands,
    filterRate,
    filterPrice,
    maxPrice,
    minPrice,
  } = useSelector(selectData);

  const { value, setValue } = useOnChange();

  const filterByCategories = useCallback(
    (products) => {
      if (filteredCategories.length === 0) return products;
      return products.filter(({ category }) => {
        return filteredCategories.some((v) => v === category);
      });
    },
    [filteredCategories]
  );

  const filterByBrand = useCallback(
    (products) => {
      if (filteredBrands.length === 0) return products;
      return products.filter(({ brand }) => {
        return filteredBrands.some((v) => v === brand);
      });
    },
    [filteredBrands]
  );

  const filterByPrice = useCallback(
    (products) => {
      if (filterPrice === minPrice) return products;
      return products.filter(({ price }) => {
        return price >= filterPrice && price <= maxPrice;
      });
    },
    [filterPrice, minPrice, maxPrice]
  );

  const filterByRate = useCallback(
    (products) => {
      return products.filter(({ rating }) => {
        return rating >= filterRate && rating <= 5;
      });
    },
    [filterRate]
  );

  const searchByText = useCallback(
    (value) => {
      return initialData.filter(({ name, category }) => {
        return (
          name.toLowerCase().includes(value.toLowerCase()) ||
          category.toLowerCase().includes(value.toLowerCase())
        );
      });
    },
    [initialData]
  );

  const filteredProducts = useMemo(() => {
    if (value) return searchByText(value);
    const firstFiltration = filterByCategories(initialData);
    const secondFiltration = filterByBrand(firstFiltration);
    const thirdFiltration = filterByPrice(secondFiltration);
    return filterByRate(thirdFiltration);
  }, [
    value,
    searchByText,
    filterByCategories,
    initialData,
    filterByBrand,
    filterByPrice,
    filterByRate,
  ]);

  return {
    searchByText,
    filteredProducts,
    setValue,
  };
};
export default useFilteredData;
