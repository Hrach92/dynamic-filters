import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectData } from "../store/reducers/data";

const useFilteredData = () => {
  const {
    initialData,
    filteredCategories,
    filteredBrands,
    filterRate,
    filterPrice,
    maxPrice,
    minPrice,
    searchText,
  } = useSelector(selectData);

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
    (products) => {
      return products.filter(({ name, category }) => {
        return (
          name.toLowerCase().includes(searchText.toLowerCase()) ||
          category.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    },
    [searchText]
  );

  const filteredProducts = useMemo(() => {
    const firstFiltration = filterByCategories(initialData);
    const secondFiltration = filterByBrand(firstFiltration);
    const thirdFiltration = filterByPrice(secondFiltration);
    const fourthFiltration = searchByText(thirdFiltration);
    return filterByRate(fourthFiltration);
  }, [
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
  };
};
export default useFilteredData;
