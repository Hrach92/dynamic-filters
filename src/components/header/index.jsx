import { memo } from "react";
import styles from "./styles.module.scss";
import Dropdown from "../_shared/dropdown";

const Header = () => {
  return (
    <div className={styles.container}>
      <button>HOme</button>
      <Dropdown />
    </div>
  );
};
export default memo(Header);
