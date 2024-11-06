import { useDispatch, useSelector } from "react-redux";
import Slider from "../_shared/slider";
import styles from "./styles.module.scss";
import { selectData, setBrandFilters, setCategoryFilters, setPriceFilters, setRateFilters } from "../../store/reducers/data";

const Sidebar = () => {
  const { categories, brands, minPrice, maxPrice, filterPrice, filterRate } = useSelector(selectData);
  const dispatch = useDispatch()

  return (
    <div className={styles.sidebar}>
      <div className={styles.actions}>
        <span>Categories</span>
        <div className={styles.categories}>
          {categories.map(({ id, category }) => (
            <label key={id} className={styles.label}>
              <input
                type="checkbox"
                onChange={(e) => dispatch(setCategoryFilters({ checked: e.target.checked, category }))}
              />
              {category}
            </label>
          ))}
        </div>
        <span>Brands</span>
        <div className={styles.categories}>
          {brands.map(({ id, brand }) => (
            <label key={id} className={styles.label}>
              <input
                type="checkbox"
                onChange={(e) => dispatch(setBrandFilters({ checked: e.target.checked, brand }))}
              />
              {brand}
            </label>
          ))}
        </div>
        <Slider min={1} max={5} step={0.1} initial={filterRate} title="Rating" setValue={setRateFilters} />
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
