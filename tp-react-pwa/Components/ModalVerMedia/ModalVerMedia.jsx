
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
                <p>Rating: ⭐ {mediaItem.rating}</p>
                <p>Tipo: {mediaItem.type}</p>
              </div>
              
          

        </div>
        

    )


}
export default ModalVerMedia;