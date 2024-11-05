import prev from "../../../images/prev.png";
import next from "../../../images/next.png";
import { useDispatch, useSelector } from "react-redux";
import { selectData, setPage } from "../../../store/reducers/data";

import { useCallback } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Pagination = () => {
  const { pages, currentPage } = useSelector(selectData);
  const dispatch = useDispatch();

  const setCurrentPage = useCallback(
    (page) => {
      dispatch(setPage(page));
    },
    [dispatch]
  );

  const firstPage = currentPage === 1;
  const lastPage = currentPage === pages.length;

  const prevPage = useCallback(() => {
    if (!firstPage) dispatch(setPage(currentPage - 1));
  }, [currentPage, dispatch, firstPage]);

  const nextPage = useCallback(() => {
    if (!lastPage) dispatch(setPage(currentPage + 1));
  }, [currentPage, dispatch, lastPage]);

  return (
    <div className={styles.container}>
      <button className={styles.iconBtn} onClick={prevPage} disabled={firstPage}>
        <img src={prev} alt="prev" className={styles.icon} />
      </button>
      <div className={styles.buttons}>
        {pages.map(({ page, id }) => {
          const isActive = currentPage === page;
          return (
            <button
              key={id}
              onClick={() => setCurrentPage(page)}
              className={classNames(styles.btn, isActive && styles.current)}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button className={styles.iconBtn} onClick={nextPage} disabled={lastPage}>
        <img src={next} alt="next" className={styles.icon} />
      </button>
    </div>
  );
};
export default Pagination;
