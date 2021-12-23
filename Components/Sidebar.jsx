import React from "react";
import styles from "../styles/Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src="/icons/menu.svg" className={styles.menu} />
    </div>
  );
}

export default Sidebar;
