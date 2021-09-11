import React from "react";
import axios from "axios";
import styles from "../../styles/Posts.module.css";
import Link from "next/link";
import PostCard from "../../components/blogComps/postcard/PostCard";
import Image from "next/image";

function Posts({ posts }) {
  function renderPostCards() {
    return posts.reverse().map((post) => {
      return <PostCard post={post} key={post.id} />;
    });
  }

  return (
    <div className={styles.blogPageContainer}>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.linkComp}>
            <Image
              src="/images/arrow-left-circle.svg"
              alt="left arrow symbol"
              loading="lazy"
              width={40}
              height={40}
            />
          </a>
        </Link>
        <h1>My Blog</h1>
      </nav>
      <main>{renderPostCards()}</main>
    </div>
  );
}

export default Posts;

export async function getStaticProps() {
  const { API_URL } = process.env;
  const postsRes = await axios.get(`${API_URL}/posts`);

  return {
    props: {
      posts: postsRes.data,
    },
  };
}
