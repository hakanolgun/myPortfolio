import React from "react";
import styles from ".//styles.module.css";
import Image from "next/image";

function JsandReact() {
  return (
    <article className={styles.jsandreactContainer}>
      <h1>JavaScript & React Projects</h1>
      <ul className={styles.cards}>
        <li className={styles.cards_item}>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <Image
                width={400}
                height={260}
                loading="lazy"
                src="/images/ecommercepage.png"
              />
            </div>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>E-Commerce App</h2>
              <p className={styles.card_text}>ReactJs & Mockapi & Chakra-UI</p>
              <a
                className={`${styles.btn} ${styles.card_btn}`}
                href="https://ecommerce-hakan.netlify.app/"
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
                height={260}
                loading="lazy"
                src="/images/react-weather.png"
              />
            </div>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Weather Forecast App</h2>
              <p className={styles.card_text}>ReactJS Weather Forecast App</p>
              <a
                className={`${styles.btn} ${styles.card_btn}`}
                href="https://react-weather-hakan.netlify.app/"
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
                height={260}
                loading="lazy"
                src="/images/crypto.png"
              />
            </div>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Crypto Currency App</h2>
              <p className={styles.card_text}>ReactJS Crypto Currency App</p>
              <a
                className={`${styles.btn} ${styles.card_btn}`}
                href="https://patika-proje-crypto.netlify.app/"
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
                height={260}
                loading="lazy"
                src="/images/flipcard.png"
              />
            </div>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Flip Card Game</h2>
              <p className={styles.card_text}>ReactJS Flip Card Memory Game</p>
              <a
                className={`${styles.btn} ${styles.card_btn}`}
                href="https://flipcard-hakan.netlify.app/"
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
                height={260}
                loading="lazy"
                src="/images/gamephoto.png"
              />
            </div>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Rock Paper Game</h2>
              <p className={styles.card_text}>
                ReactJS Rock,Paper & Scissor Game
              </p>
              <a
                className={`${styles.btn} ${styles.card_btn}`}
                href="https://rockpapergame-hakan.netlify.app/"
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
                height={260}
                loading="lazy"
                src="/images/reduxnotesapp.png"
              />
            </div>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Notes App</h2>
              <p className={styles.card_text}>Notes App with ReactJS & Redux</p>
              <a
                className={`${styles.btn} ${styles.card_btn}`}
                href="https://redux-notesapp.netlify.app"
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

export default JsandReact;
