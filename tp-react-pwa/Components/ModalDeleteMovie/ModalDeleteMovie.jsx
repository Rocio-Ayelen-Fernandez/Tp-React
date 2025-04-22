import Button from "../Button/Button";
import styles from "../Modal/Modal.module.css";

const ModalDeleteMovie = ({ mediaItem, onConfirm }) => {
  console.log(mediaItem)
  return (
    <div className={styles.ModalDeleteMovie}>
      <h2>¿Eliminar "{mediaItem.title}"?</h2>
      <p>Esta acción no se puede deshacer.</p>
      <div className={styles.modalButtons}>
        <Button onclick={onConfirm}>Eliminar</Button>
      </div>
    </div>
  );
};

export default ModalDeleteMovie;
