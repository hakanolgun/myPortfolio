import React from "react";
import styles from ".//styles.module.css";
import Image from "next/image";

function HomeLinks() {
  return (
    <div className={styles.homeLinksContainer}>
      <a href="https://github.com/hakanolgun">
        <Image
          width={24}
          height={24}
          src="/images/github.svg"
          alt="github logo"
        ></Image>
      </a>
      <a href="https://hakanolgun.com/www.linkedin.com/in/hknlgn">
        <Image
          width={24}
          height={24}
          src="/images/linkedin.svg"
          alt="linkedin logo"
        ></Image>
      </a>
      <a href="https://twitter.com/kpthknlgn">
        <Image
          width={24}
          height={24}
          src="/images/twitter.svg"
          alt="twitter logo"
        ></Image>
      </a>
      <a href="https://www.instagram.com/hakan.lgn/">
        <Image
          width={24}
          height={24}
          src="/images/instagram.svg"
          alt="instagram logo"
        ></Image>
      </a>
      <a href="hakan@hakanolgun.com">
        <Image
          width={24}
          height={24}
          src="/images/email.svg"
          alt="mail logo"
        ></Image>
      </a>
    </div>
  );
}

export default HomeLinks;
