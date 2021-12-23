import React from "react";
import styles from "../styles/ContactPage.module.scss";

import Contact from "../Components/Contact";

function ContactPage() {
  return (
    <div className={styles.contact}>
      {/* Main Section */}

      <div className={styles.main}>
        <div className={styles.text}>
          <h1 className={styles.outline}>CONTACT</h1>
          <h1>ME</h1>
        </div>
      </div>

      {/* Form Section */}
      <Contact title="GET IN TOUCH" />
    </div>
  );
}

export default ContactPage;
