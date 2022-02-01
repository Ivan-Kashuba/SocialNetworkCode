import React from "react";
import styles from "./NotFoundError.module.css";

const NotFoundError = () => {
  return (
    <div className={styles.main}>
      <section className={styles.error_container}>
        <span>4</span>
        <span>
          <span className={styles.screen_reader_text}>0</span>
        </span>
        <span>4</span>
        <br />
        <div className={styles.text}>Page not Found</div>
      </section>
    </div>
  );
};

export default NotFoundError;
