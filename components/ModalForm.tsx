import styles from "../styles/Home.module.css";

// container holding the form found in modal
export function ModalForm(): JSX.Element {
  return (
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
  );
}
