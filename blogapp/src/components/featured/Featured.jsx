"use client";
import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  const handleReadMoreClick = () => {
    const categorySection = document.getElementById("category-section");
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, khairi dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Welcome to Khairi's digital nook, where coding meets creativity.
          </h1>
          <p className={styles.postDesc}>
            Join me on a journey through the realms of technology and
            innovation. Here, you'll find a medley of personal anecdotes,
            insights into the latest tech trends, and a sprinkling of my own
            creative projects.
          </p>
          <button className={styles.button} onClick={handleReadMoreClick}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
