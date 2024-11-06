import React, { useState } from "react";
import styles from "./styles.module.scss";

function Slider({ title, min, max, step, initial }) {
  const [value, setValue] = useState(initial || min);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label>
        {title}: {value}
        <div className={styles.slider}>
          <span>{min}</span>
          <input
            type="range"
            min={min}
            max={max}
            step={step || 1}
            value={value}
            onChange={handleChange}
          />
          <span>{max}</span>
        </div>
      </label>
    </div>
  );
}

export default Slider;
