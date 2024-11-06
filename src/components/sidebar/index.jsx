import { useSelector } from "react-redux";
import Slider from "../_shared/slider";
import styles from "./styles.module.scss";
import { selectData } from "../../store/reducers/data";
import useFilteredData from "../../hooks/useFilteredData";

const Sidebar = () => {
  const { categories, brands, minPrice, maxPrice } = useSelector(selectData);
  const { checkByCategory, checkByBrand } = useFilteredData();

  return (
    <div className={styles.sidebar}>
      <div className={styles.actions}>
        <span>Categories</span>
        <div className={styles.categories}>
          {categories.map(({ id, category }) => (
            <label key={id} className={styles.label}>
              <input
                type="checkbox"
                onChange={(e) => checkByCategory(e.target.checked, category)}
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
                onChange={(e) => checkByBrand(e.target.checked, brand)}
              />
              {brand}
            </label>
          ))}
        </div>
        <Slider min={1} max={5} step={0.1} initial={3} title="Rating" />
        <Slider
          min={minPrice}
          max={maxPrice}
          step={10}
          initial={50}
          title="Price"
        />
      </div>
    </div>
  );
};
export default Sidebar;
