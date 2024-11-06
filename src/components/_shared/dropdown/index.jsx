import React from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectData, setSortBy } from "../../../store/reducers/data";

const Dropdown = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector(selectData);

  const handleSortChange = (event) => {
    dispatch(setSortBy(event.target.value));
  };

  return (
    <div className={styles.container}>
      <label htmlFor="sortDropdown" className={styles.label}>
        Sort by:
      </label>
      <select
        id="sortDropdown"
        value={sortBy}
        onChange={handleSortChange}
        className={styles.dropdown}
      >
        <option value="off">Off</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default Dropdown;
