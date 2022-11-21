import styles from "../styles/Home.module.css";

// inner modal footer
export function ModalFooter(): JSX.Element {
  return (
    <div className={styles.modal_footer}>
      <p>Don&apos;t have an account?</p>
      <a
        href="#"
        style={{
          lineHeight: "2rem",
        }}
      >
        Start your free trial
      </a>
    </div>
  );
}
