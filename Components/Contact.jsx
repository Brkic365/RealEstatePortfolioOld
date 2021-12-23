import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";

import { useRouter } from "next/router";

export default function Contact({ title }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Confirmation message seen on success page after filling the contact form out
  const ConfirmationMessage = (
    <div className={styles.confirmed}>
      <p>
        Thank you for submitting this form. You should receive response within
        24-48 hours.
      </p>

      <button onClick={() => setSubmitted(false)}>
        Submit Another Response
      </button>
    </div>
  );

  const ContactForm = (
    <form
      className="container"
      method="POST"
      name="contact-form"
      action="/"
      onSubmit={() => setSubmitted(true)}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        type="hidden"
        name="subject"
        value={`You've got mail from ${name}`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className={styles.group}>
        <div className={styles.one}>
          <input
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className={styles.two}>
          <input
            id="company"
            name="company"
            required
            type="text"
            placeholder="Your E-mail"
          />
        </div>
      </div>

      <div className={`${styles.group} ${styles.budgetGroup}`}>
        <div className={styles.one}>
          <label htmlFor="budget">Your budget:</label>
        </div>
        <div className={styles.two}>
          <select name="budget" id="budget">
            <option value="1">$100 - $500</option>
            <option value="2">$500 - $1000</option>
            <option value="3">$1000 - $2000</option>
            <option value="4">$2000+</option>
          </select>
        </div>
      </div>

      <textarea
        id="message"
        name="message"
        required
        placeholder="Briefly explain your project"
        rows="5"
      />

      <button type="submit" className={styles.empty}>
        Submit
      </button>
    </form>
  );

  return (
    <div className={styles.contact}>
      <h2>{title}</h2>
      <p>
        Or contact me through my <a>email</a>
      </p>

      {!submitted ? ContactForm : ConfirmationMessage}
    </div>
  );
}
