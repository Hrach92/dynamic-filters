import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Auth = ({ title, link }) => {
  return (
    <Link to={link}>
      <button className={styles.btn}>{title}</button>
    </Link>
  );
};
export default Auth;
