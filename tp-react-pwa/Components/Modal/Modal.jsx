import Button from '../Button/Button'
import Styles from "./Modal.module.css"

const Modal = ({ isOpen, onClose, children }) => {

  if (!isOpen) return null

  return (
    <div className={Styles.modal}>
      <div className={Styles.modalContainer}>
        <div className={Styles.buttonClose}>
          <Button name="Cerrar" onclick={onClose}>Cerrar</Button>
        </div>
        <div className={Styles.modalContent}>{children}</div>
      </div>
    </div>
  );
}

export default Modal