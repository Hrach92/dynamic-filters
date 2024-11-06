import { memo } from "react";
import styles from "./styles.module.scss";
import Search from "./search";
import Dropdown from "../_shared/dropdown";

const Header = () => {
  return (
    <div className={styles.container}>
      <Dropdown />
      <Search />
    </div>
  );
};
export default memo(Header);
