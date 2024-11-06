import React, { Fragment, useEffect } from "react";

import { selectData, setDefaultData } from "../../store/reducers/data";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, getItemsByPage } from "../../utils";
import Product from "./product";
import styles from "./styles.module.scss";
import Pagination from "../_shared/pagination";
import Search from "../_shared/search";

const HomePage = () => {
  const { data, currentPage, sortBy, pages } = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setDefaultData(fetchData));
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const filteredByPages = getItemsByPage(data, currentPage, sortBy);

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <Search />
        <div className={styles.container}>
          {filteredByPages.map(({ id, ...product }) => {
            return (
              <Fragment key={id}>
                <Product product={product} />
              </Fragment>
            );
          })}
        </div>
      </div>
      {pages.length > 1 && <Pagination />}
    </div>
  );
};
export default HomePage;
