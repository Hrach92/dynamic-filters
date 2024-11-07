import { useDispatch } from "react-redux";
import useOnChange from "../../../hooks/useOnChange";
import styles from "./styles.module.scss";
import { setSearchText } from "../../../store/reducers/data";
import { useCallback } from "react";

const Search = () => {
  const { value, onChange } = useOnChange();
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(setSearchText(value));
  }, [dispatch, value]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && value) {
      onClick();
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
      <button className={styles.button} onClick={onClick}>
        Search
      </button>
    </div>
  );
};
export default Search;
