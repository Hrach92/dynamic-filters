import styles from "./styles.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.bottomActions}>
        <div>language</div>
        <div>get help</div>
        <div>exit</div>
      </div>
    </div>
  );
};
export default Sidebar;
