import React from "react";
import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <img src="/icons/socials/linkedin.svg" />
      <img src="/icons/socials/facebook.svg" />
      <p>Antonio 2021</p>
      <img src="/icons/socials/instagram.svg" />
      <img src="/icons/socials/github.svg" />
    </div>
  );
}

export default Footer;
