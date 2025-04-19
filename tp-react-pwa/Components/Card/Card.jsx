import Button from '../Button/Button'
import styles from './Card.module.css'


//Array de botones

const Card = ({mediaItem, button, buttonAction}) => {
    

    return(
        <article className={styles.card}>
            <div className={styles.image}><img src={mediaItem.url} /></div>
            <div className={styles.info}>
               
                <h2>{mediaItem.title}</h2>
                <p>Director: {mediaItem.director}</p>
                {/* <p>Año: {mediaItem.year}</p> */}
                {/* <p>Género: {mediaItem.genre}</p> */}
                <p>Rating: ⭐ {mediaItem.rating}</p>
                {/* <p>Tipo: {mediaItem.type}</p> */}
                              
            </div>
            <div className={styles.buttonsContainer}>
                {/* Renderiza los botones del array */}
                {button.map((button, index) => (
                <Button key={index} name={button.name} onclick={() => buttonAction[button.action](mediaItem)} className={styles.button.name} />
            ))}
            </div> 
                        
        </article>
    )
}

export default Card