import React from "react";

import styles from "./styles.module.scss";

const Product = ({ product }) => {
  const { name, category, price, rating, imageUrl } = product;

  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="product" className={styles.img} />
      <div className={styles.desc}>
        <span>{name}</span>
        <span>{category}</span>
        <span>{price} $</span>
        <span>Rating : {rating}</span>
      </div>
    </div>
  );
};
export default Product;
