import Image from "next/image";
import close from "../public/img/close.svg";
import styles from "../styles/Home.module.css";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";

// outer modal body
export function ModalBox(props: {
  modalIsOpen: boolean;
  closeModal: () => void;
}): JSX.Element {
  return (
    <div className={styles.modal_box}>
      <ModalBody />
      <ModalFooter />
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
  );
}
