import { memo } from "react";
import styles from "./styles.module.scss";
import Dropdown from "../_shared/dropdown";
import Auth from "../auth";

const Header = () => {
  return (
    <div className={styles.container}>
      <Dropdown />
      <Auth title="Sign in" link="sign-in" />
      <Auth title="Sign up" link="sign-up" />
    </div>
  );
};
export default memo(Header);
