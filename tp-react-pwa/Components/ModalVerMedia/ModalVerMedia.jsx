
import styles from "../Modal/Modal.module.css";

const ModalVerMedia = ({ mediaItem }) => {

  return (
    <div className={styles.ModalVerMedia}>
      <div className={styles.image}>
        <img src={mediaItem.url} alt={mediaItem.title} />
      </div>
      <div className={styles.info}>
        <h2>{mediaItem.title}</h2>
        <p>Director: {mediaItem.director}</p>
        <p>Año: {mediaItem.year}</p>
        <p>Género: {mediaItem.genre}</p>
        {mediaItem.isSeen ? (
          <p>Rating: ⭐ {mediaItem.rating}</p>
        ) : 
        <div>
          Rating: Aún no se ha visto ésta película 
        </div>}
        <p>Tipo: {mediaItem.type}</p>
      </div>
    </div>


  )


}
export default ModalVerMedia;