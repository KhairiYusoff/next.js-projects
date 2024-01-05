import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "About",
  description: "This is About Page",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            At the heart of every successful digital venture lies a story - a
            unique narrative that captures the essence of ideas and transforms
            them into captivating digital experiences. Our team specializes in
            weaving these narratives through cutting-edge technology and
            creative design. We believe in the power of storytelling to connect,
            engage, and inspire. Our journey began with a simple yet profound
            realization: in the digital world, stories are not just told; they
            are experienced. This understanding drives our approach to every
            project, whether it is developing visually stunning websites,
            crafting user-centric mobile applications, or creating interactive
            digital content. We do not just build digital solutions; we create
            digital experiences that tell your story in the most engaging way
            possible.
            <br />
            <br />
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Creative Storytelling: We do not just share your story; we bring it
            to life with compelling narratives and engaging content.
            <br />
            <br /> - Innovative Solutions: Our team constantly explores the
            latest technologies to deliver dynamic, user-friendly digital
            products.
            <br />
            <br /> - Quality and Precision: We pride ourselves on our attention
            to detail and our commitment to excellence.
            <br />
            <br /> - Client Partnership: Your vision is our mission. We
            collaborate closely with you at every step to ensure your goals are
            achieved.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
