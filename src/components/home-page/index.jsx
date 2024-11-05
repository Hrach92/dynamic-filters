import React, { Fragment, useEffect } from "react";

import { selectData, setData } from "../../store/reducers/data";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, itemsByPage } from "../../utils";
import Product from "./product";
import styles from "./styles.module.scss";
import Pagination from "../_shared/pagination";

const HomePage = () => {
  const { data } = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setData(fetchData));
    }, 3000);

    return () => clearTimeout(timer);
  }, [data, dispatch]);

  const filteredData = itemsByPage(data, 1);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {filteredData.map(({ id, ...product }) => {
          return (
            <Fragment key={id}>
              <Product product={product} />
            </Fragment>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
};
export default HomePage;
