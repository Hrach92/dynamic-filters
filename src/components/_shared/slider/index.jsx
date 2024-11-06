import React from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";

function Slider({ title, min, max, step, initial, setValue }) {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(setValue(event.target.value));
  };

  return (
    <div className={styles.container}>
      <label>
        {title}: {initial}
        <div className={styles.slider}>
          <span>{min}</span>
          <input
            type="range"
            min={min}
            max={max}
            step={step || 1}
            value={initial}
            onChange={handleChange}
          />
          <span>{max}</span>
        </div>
      </label>
    </div>
  );
}

export default Slider;
