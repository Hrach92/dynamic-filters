import React, { Fragment, useEffect } from "react";

import { selectData, setData } from "../../store/reducers/data";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../utils";
import Product from "./product";
import styles from './styles.module.scss'

const HomePage = () => {
  const { data } = useSelector(selectData)
  const dispatch = useDispatch()


  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setData(fetchData));
    }, 3000);

    return () => clearTimeout(timer);
  }, [data, dispatch]);

  return <div className={styles.main}>
    {data.map(({ id, ...product }) => {
      return <Fragment key={id}><Product product={product} /></Fragment>
    })}
  </div>;
};
export default HomePage;
