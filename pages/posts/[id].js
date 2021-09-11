import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";
import Image from "next/image";
import styles from "../../styles/Post.module.css";
import Link from "next/link";
const { API_URL } = process.env;
function PostPage({ post }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.content);
  return (
    <article className={styles.postPageContainer}>
      <Link href="/posts">
        <img
          className={styles.backHomeArrow}
          src="/images/arrow-left-circle.svg"
          alt="left arrow symbol"
        />
      </Link>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postDescription}>{post.description}</p>
      <Image
        className={styles.postCoverImage}
        src={API_URL + post.coverimage.url}
        alt="coverimage"
        width={600}
        height={400}
        layout="responsive"
      />
      <section
        className={styles.postMarkdownSection}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></section>
    </article>
  );
}

export default PostPage;

export async function getStaticProps({ params }) {
  const postRes = await axios.get(`${API_URL}/posts/${params.id}`);
  return {
    props: {
      post: postRes.data,
    },
  };
}

export async function getStaticPaths() {
  const postRes = await axios.get(`${API_URL}/posts`);
  const paths = postRes.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
