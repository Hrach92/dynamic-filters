import React, { Fragment, useEffect } from "react";

import { selectData, setDefaultData } from "../../store/reducers/data";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, getItemsByPage } from "../../utils";
import Product from "./product";
import styles from "./styles.module.scss";
import Pagination from "../_shared/pagination";
import Dropdown from "../_shared/dropdown";

const HomePage = () => {
  const { data, currentPage, sortBy } = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setDefaultData(fetchData));
    }, 3000);

    return () => clearTimeout(timer);
  }, [data, dispatch]);

  const filteredData = getItemsByPage(data, currentPage, sortBy);

  return (
    <div className={styles.main}>
      <Dropdown />
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
