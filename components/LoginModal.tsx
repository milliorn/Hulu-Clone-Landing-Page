// next.js
import Image from "next/image";
// react
import Modal, { Styles } from "react-modal";
// assets
import close from "../public/img/close.svg";
// css
import styles from "../styles/Home.module.css";

// container for index login modal
export function LoginModal(props: {
  modalIsOpen: boolean;
  closeModal: () => void;
}): JSX.Element {
  const customStyles = {
    content: {
      background: "rgba(0, 0, 0, 0.5)",
      height: "100%",
      left: 0,
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 0,
    },
  } as Styles;

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal} // skipcq: JS-0411
      style={customStyles}
      /** https://stackoverflow.com/a/50625073/11986604 */
      ariaHideApp={false}
    >
      <div className="modal" id="modal">
        <div className={styles.modal_box}>
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
          <Image
            alt="close"
            className={styles.close}
            onClick={props.closeModal} // skipcq: JS-0411
            src={close}
            style={{
              cursor: "pointer",
              position: "absolute",
              left: "0.5rem",
              bottom: "0.5rem",
            }}
          />
        </div>
      </div>
    </Modal>
  );
}
