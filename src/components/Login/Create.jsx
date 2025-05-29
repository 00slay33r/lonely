import React, { useState } from "react";
import styles from "../../components/styles/Create.module.css";

function PasswordInput({ id, name, placeholder }) {
  const [show, setShow] = useState(false);
  return (
    <div className={styles["password-wrapper"]}>
      <input
        type={show ? "text" : "password"}
        id={id}
        name={name}
        placeholder={placeholder}
        required
        className={styles.input}
      />
      <i
        className={`fa-solid ${styles.icon} ${show ? "fa-eye" : "fa-eye-slash"}`}
        onMouseDown={(e) => {
          e.preventDefault();
          setShow((s) => !s);
        }}
      ></i>
    </div>
  );
}

const CreateAccount = () => {
  return (
    <>
      <title>Shop | Create Account</title>
      <div className={styles["button-container"]}>
        <button className={styles["btn-login"]}>
          <a href="/profile">Sign in</a>
        </button>
        <button className={styles["btn-create"]}>
          <a href="/create">Create Account</a>
        </button>
      </div>

      <section className={styles.section}>
        <div className={styles["signup-container"]}>
          <h2>Create account</h2>
          <form method="POST">
            <label htmlFor="name">first name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="first name"
              required
              className={styles.input}
            />
            <label htmlFor="lastname">last name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="last name"
              required
              className={styles.input}
            />
            <label htmlFor="email2">email</label>
            <input
              type="email"
              id="email2"
              name="email"
              placeholder="email"
              required
              className={styles.input}
            />
            <label htmlFor="password2">password</label>
            <PasswordInput id="password2" name="password" placeholder="password" />
            <div className={styles.require}>
              <p>
                <i className="fa-solid fa-xmark"></i>Password must be at least 8 characters
              </p>
              <p>
                <i className="fa-solid fa-xmark"></i>Password must contain a number
              </p>
              <p>
                <i className="fa-solid fa-xmark"></i>Password must contain both upper &amp; lowercase characters
              </p>
            </div>
            <div className={styles.actions}>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateAccount;
