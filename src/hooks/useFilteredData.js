import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectData } from "../store/reducers/data";

const useFilteredData = () => {
  const { initialData, filteredCategories, filteredBrands, filterRate, filterPrice, maxPrice, minPrice } = useSelector(selectData);
  console.log(filteredCategories, filteredBrands, filterRate, filterPrice);

  const filterByCategories = useCallback((products) => {
    if (filteredCategories.length === 0) return products;
    return products.filter(({ category }) => {
      return filteredCategories.some((v) => v === category);
    });
  }, [filteredCategories]);

  const filterByBrand = useCallback((products) => {
    if (filteredBrands.length === 0) return products;
    return products.filter(({ brand }) => {
      return filteredBrands.some((v) => v === brand);
    });
  }, [filteredBrands]);

  const filterByPrice = useCallback((products) => {
    if (filterPrice === minPrice) return products;
    return products.filter(({ price }) => {
      return price >= filterPrice && price <= maxPrice;
    });
  }, [filterPrice, minPrice, maxPrice]);

  const filterByRate = useCallback((products) => {
    return products.filter(({ rating }) => {
      return rating >= filterRate && rating <= 5
    });
  }, [filterRate]);

  const filteredProducts = useMemo(() => {
    const firstFiltration = filterByCategories(initialData);
    const secondFiltration = filterByBrand(firstFiltration);
    const thirdFiltration = filterByPrice(secondFiltration);
    return filterByRate(thirdFiltration);
  }, [filterByCategories, filterByBrand, filterByPrice, filterByRate, initialData]);


  const searchByText = useCallback(
    (value) => {
      return initialData.filter(({ name }) => {
        return name.toLowerCase().includes(value.toLowerCase());
      });
    },
    [initialData]
  );

  return {
    searchByText,
    filteredProducts
  };
};
export default useFilteredData;
