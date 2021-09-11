import React from "react";
import styles from "./styles.module.css";

function HomeCenter() {
  return (
    <div className={styles.homecenterContainer}>
      <img
        className={styles.homeCenterImage}
        src="/images/hakan.png"
        alt="Hakan Olgun"
      />
      <h1 className={styles.homeCenterH1}>Hakan Olgun</h1>
      <h2 className={styles.homeCenterH2} data-text="Web Developer...">Web Developer...</h2>
    </div>
  );
}

export default HomeCenter;
