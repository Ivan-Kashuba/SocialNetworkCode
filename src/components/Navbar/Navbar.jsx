import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <a className={styles.item} href="!">
          Profile
        </a>
      </div>
      <div>
        <a className={styles.item} href="!">
          Messages
        </a>
      </div>
      <div>
        <a className={styles.item} href="!">
          News
        </a>
      </div>
      <div>
        <a className={styles.item} href="!">
          Music
        </a>
      </div>
      <div>
        <a className={styles.item} href="!">
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
