import styles from "../styles/Home.module.css";

export function ModalBody(): JSX.Element {
  return (
    <div className={styles.modal_body}>
      <h3 className={styles.modal_body_h3}>Log In</h3>
      <form>
        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <p>
          <a href="#">Forgot your email or password</a>
        </p>
        <button type="button" className={styles.btn_dark}>
          Log In
        </button>
      </form>
    </div>
  );
}
