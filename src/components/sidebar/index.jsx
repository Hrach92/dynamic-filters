import { useSelector } from "react-redux";
import Slider from "../_shared/slider";
import styles from "./styles.module.scss";
import { selectData } from "../../store/reducers/data";

const Sidebar = () => {

  const { categories } = useSelector(selectData)

  return (
    <div className={styles.sidebar}>
      <div className={styles.actions}>
        Categories
        <div className={styles.categories}>
          {categories.map(({ id, category }) => (
            <label key={id} className={styles.label}>
              <input type="checkbox" />
              {category}
            </label>
          ))}
        </div>
        <Slider min={1} max={5} step={0.5} initial={3} title="Rating"/>
        <Slider min={0} max={1000} step={50} initial={250} title="Price"/>
      </div>
    </div>
  );
};
export default Sidebar;
