import { useDispatch } from "react-redux";
import useFilteredData from "../../../hooks/useFilteredData";
import useOnChange from "../../../hooks/useOnChange";
import styles from "./styles.module.scss";
import { setData } from "../../../store/reducers/data";

const Search = () => {
  const { value, onChange } = useOnChange();
  const { searchByText } = useFilteredData();
  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && value) {
      const data = searchByText(value);
      dispatch(setData(data));
    }
  };

  return (
    <div className={styles.container}>
      <input
        value={value}
        className={styles.input}
        onChange={onChange}
        onKeyDown={handleKeyPress}
      />
      <button className={styles.button}>Search</button>
    </div>
  );
};
export default Search;
