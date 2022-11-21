import styles from "../styles/Home.module.css";
import { ModalForm } from "./ModalForm";

// inner modal body with form and button
export function ModalBody(): JSX.Element {
  return (
    <div className={styles.modal_body}>
      <h3 className={styles.modal_body_h3}>Log In</h3>
      <ModalForm />
    </div>
  );
}
