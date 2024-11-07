import { useDispatch, useSelector } from "react-redux";
import Slider from "../_shared/slider";
import styles from "./styles.module.scss";
import {
  resetFilters,
  selectData,
  setBrandFilters,
  setCategoryFilters,
  setPriceFilters,
  setRateFilters,
} from "../../store/reducers/data";
import { useCallback } from "react";

const Sidebar = () => {
  const {
    categories,
    brands,
    minPrice,
    maxPrice,
    filterPrice,
    filterRate,
    filteredCategories,
    filteredBrands,
  } = useSelector(selectData);
  const dispatch = useDispatch();

  const clearFilters = useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.actions}>
        <button className={styles.clear} onClick={clearFilters}>
          Clear Filters
        </button>
        <span>Categories</span>
        <div className={styles.categories}>
          {categories.map(({ id, category }) => {
            const checked = filteredCategories.some((c) => c === category);
            return (
              <label key={id} className={styles.label}>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    dispatch(
                      setCategoryFilters({
                        checked: e.target.checked,
                        category,
                      })
                    )
                  }
                  checked={checked}
                />
                {category}
              </label>
            );
          })}
        </div>
        <span>Brands</span>
        <div className={styles.categories}>
          {brands.map(({ id, brand }) => {
            const checked = filteredBrands.some((b) => b === brand);
            return (
              <label key={id} className={styles.label}>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    dispatch(
                      setBrandFilters({ checked: e.target.checked, brand })
                    )
                  }
                  defaultChecked={checked}
                />
                {brand}
              </label>
            );
          })}
        </div>
        <Slider
          min={1}
          max={5}
          step={0.1}
          initial={filterRate}
          title="Rating"
          setValue={setRateFilters}
        />
        <Slider
          min={minPrice}
          max={maxPrice}
          step={10}
          initial={filterPrice}
          title="Price"
          setValue={setPriceFilters}
        />
      </div>
    </div>
  );
};
export default Sidebar;
