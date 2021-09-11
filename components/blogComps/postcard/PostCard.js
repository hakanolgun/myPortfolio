import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

function PostCard({ post }) {
  const { API_URL } = process.env;
  return (
    <Link href={`/posts/${post.id}`}>
      <a>
        <div className={styles.gridCard}>
          <Image
            className={styles.postImage}
            src={API_URL + post.coverimage.formats.small.url}
            alt={post.title}
            width={300}
            height={200}
          />
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.postDescription}>{post.description}</p>
          <p className={styles.postDate}>{post.date}</p>
        </div>
      </a>
    </Link>
  );
}

export default PostCard;
