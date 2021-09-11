import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

function HomeCenter() {
  return (
    <div className={styles.homecenterContainer}>
      <Image
        className={styles.homeCenterImage}
        src="/images/hakan.png"
        alt="Hakan Olgun"
        width={200}
        height={200}
      />
      <h1 className={styles.homeCenterH1}>Hakan Olgun</h1>
      <h2 className={styles.homeCenterH2} data-text="Web Developer...">Web Developer...</h2>
    </div>
  );
}

export default HomeCenter;
