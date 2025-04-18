import Button from '../Button/Button'
import Styles from "./Modal.module.css"

const Modal = ({isOpen, onClose, children}) =>{
    
        if (!isOpen) return null;

return (
    <div className={Styles.modalContainer}>
      <div className={Styles.buttonClose}>
        <Button name="Cerrar" onclick={onClose} />
      </div>
      <div className={Styles.modalContent}>{children}</div>
    </div>
  );
}

export default Modal