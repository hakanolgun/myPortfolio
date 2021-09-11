import React from "react";
import JsandReact from "../components/worksPageComps/jsandreactprojects/JsandReact";
import Websites from "../components/worksPageComps/websites/Websites";
import styles from "../styles/Works.module.css";
import Link from "next/link";

function Works() {
  return (
    <div className={styles.worksPageContainer}>
      <Link href="/">
        <img className={styles.backHomeArrow} src="/images/arrow-left-circle.svg" alt="left arrow symbol" />
      </Link>
      <JsandReact />
      <Websites />
    </div>
  );
}

export default Works;
