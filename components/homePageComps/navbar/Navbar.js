import React from "react";
import Link from "next/link";
import styles from ".//styles.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/about">About</Link>
      <Link href="/works">Works</Link>
      <Link href="/posts">Blog</Link>
    </nav>
  );
}

export default Navbar;
