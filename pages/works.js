import React from "react";
import JsandReact from "../components/worksPageComps/jsandreactprojects/JsandReact";
import Websites from "../components/worksPageComps/websites/Websites";
import styles from "../styles/Works.module.css";
import Link from "next/link";
import Image from "next/image";

function Works() {
  return (
    <div className={styles.worksPageContainer}>
      <Link href="/">
        <a className={styles.linkComp}>
          <Image
            className={styles.backHomeArrow}
            src="/images/arrow-left-circle.svg"
            alt="left arrow symbol"
            width={40}
            height={40}
          />
        </a>
      </Link>
      <JsandReact />
      <Websites />
    </div>
  );
}

export default Works;
