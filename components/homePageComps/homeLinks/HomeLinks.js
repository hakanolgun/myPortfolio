import React from "react";
import styles from ".//styles.module.css";

function HomeLinks() {
  return (
    <div className={styles.homeLinksContainer}>
      <a href="https://github.com/hakanolgun">
        <img src="/images/github.svg"></img>
      </a>
      <a href="https://hakanolgun.com/www.linkedin.com/in/hknlgn">
        <img src="/images/linkedin.svg"></img>
      </a>
      <a href="https://twitter.com/kpthknlgn">
        <img src="/images/twitter.svg"></img>
      </a>
      <a href="https://www.instagram.com/hakan.lgn/">
        <img src="/images/instagram.svg"></img>
      </a>
      <a href="hakan@hakanolgun.com">
        <img src="/images/email.svg"></img>
      </a>
    </div>
  );
}

export default HomeLinks;
