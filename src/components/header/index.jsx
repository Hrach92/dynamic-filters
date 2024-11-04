import { memo } from "react";
import styles from './styles.module.scss'
import Search from "./search";

const Header = () => {

  return <div className={styles.container}>
    <Search />
  </div>
};
export default memo(Header);
