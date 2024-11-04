import React from "react";

import styles from './styles.module.scss'

const Product = ({ product }) => {
  const { name, category, price, rating, imageUrl } = product

  return <div>
    {name},{category},{price},{rating}
  </div>;
};
export default Product;
