import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to <b>KhairiBlog</b>, your go-to platform for exploring
        creativity, innovation, and technology.
      </p>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Our Mission</h2>
          <p className={styles.text}>
            At KhairiBlog, our mission is to share inspiring stories, practical
            insights, and creative ideas that empower developers and creators
            worldwide.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Who We Are</h2>
          <p className={styles.text}>
            Founded by Khairi Dev, KhairiBlog is a digital hub where technology
            meets storytelling. We’re passionate about bridging the gap between
            creativity and tech, providing content that’s as informative as it
            is engaging.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Get in Touch</h2>
          <p className={styles.text}>
            We'd love to hear from you! Whether you have feedback, collaboration
            ideas, or just want to say hello, feel free to reach out.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
