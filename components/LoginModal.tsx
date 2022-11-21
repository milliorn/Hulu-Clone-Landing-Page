import Modal, { Styles } from "react-modal";
import { ModalBox } from "./ModalBox";

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
        <ModalBox
          modalIsOpen={props.modalIsOpen}
          closeModal={props.closeModal}
        />
      </div>
    </Modal>
  );
}
