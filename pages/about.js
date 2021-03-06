import React from "react";
import Head from "next/head";
import styles from "../styles/About.module.css";
import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <div className={styles.aboutPageContainer}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link  href="/">
        <a className={styles.linkComp}>
          <Image
            src="/images/arrow-left-circle.svg"
            alt="left arrow symbol"
            width={40}
            height={40}
          />
        </a>
      </Link>
      <article className={styles.article}>
        <h1 className={styles.h1}>About Me</h1>
        <section className={styles.section}>
          <div>
            <p>
              After working as a second officer on commercial cargo ships for
              years, traveling the world, witnessing different lives and getting
              to know myself better, I decided to make a career change for a
              calmer and more peaceful life and become a software developer.
              I&apos;ve found that software development is a more enjoyable for
              me and suits better for my character.
            </p>
            <Image
              width={2500}
              height={2000}
              loading="lazy"
              src="/images/benin.jpg"
              alt=""
            />
          </div>
          <div>
            <p>
              As my path, I decided to go for the front-end web development
              firstly. I&apos;ve learned HTML, CSS, JavaScript and ReactJS.
              Currently, I&apos;ve been making projects with what I have learned
              and learning new subjects.
            </p>
            <Image
              width={1500}
              height={1000}
              loading="lazy"
              src="/images/codephoto.jpg"
              alt=""
            />
          </div>
          <div>
            <p>
              Beyond working life, I think establishing good friendships with
              nice people is one of the most valuable things in my life. So,
              don&apos;t hesitate to say a &quot;HELLO&quot; to me, even if you
              have no business with me.
            </p>
            <Image
              width={1500}
              height={1500}
              loading="lazy"
              src="/images/ivorycoastblurybg.png"
              alt=""
            />
          </div>
        </section>
      </article>
    </div>
  );
}

export default About;
