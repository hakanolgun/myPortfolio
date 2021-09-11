import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

function Websites() {
  return (
    <article className={styles.jsandreactContainer}>
      <h1>Websites & Templates</h1>
      <ul className={styles.cards}>
        <li className={styles.cards_item}>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <Image
                width={400}
                height={260} loading="lazy" src="/images/grid-hilalay-giris-renk.webp" />
            </div>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Yachting Website</h2>
              <p className={styles.card_text}>
                Developed with HTML, CSS and Vanilla JS
              </p>
              <a
                className={`${styles.btn} ${styles.card_btn}`}
                href="https://hakanolgun.github.io/yachtingwebsite/index.html"
              >
                Visit Project
              </a>
            </div>
          </div>
        </li>
        <li className={styles.cards_item}>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <Image
                width={400}
                height={260} loading="lazy" src="/images/samsunpdr-renk.webp" />
            </div>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Psychologist Website</h2>
              <p className={styles.card_text}>Developed with WIX</p>
              <a
                className={`${styles.btn} ${styles.card_btn}`}
                href="https://samsunpsikolojikdanismanlik.com"
              >
                Visit Project
              </a>
            </div>
          </div>
        </li>
        <li className={styles.cards_item}>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <Image
                width={400}
                height={260} loading="lazy" src="/images/psikolog_tema.png" />
            </div>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>
                Wordpress Psychologist Theme
              </h2>
              <p className={styles.card_text}>
                Landing page & Blog & Online Reservation
              </p>
              <a
                className={`${styles.btn} ${styles.card_btn}`}
                href="https://deneme1.cf/"
              >
                Visit Project
              </a>
            </div>
          </div>
        </li>
      </ul>
    </article>
  );
}

export default Websites;
