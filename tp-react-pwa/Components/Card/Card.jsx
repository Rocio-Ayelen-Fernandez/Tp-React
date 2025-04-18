import Button from '../Button/Button'
import styles from './Card.module.css'


//Array de botones
let buttons=["Ver", "Estado", "E", "E"];

const Card = ({mediaItem}) => {
    

    return(
        <article className={styles.card}>
            <div className={styles.image}><img src={mediaItem.url} /></div>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{mediaItem.title}</h3> 
            </div>
            <p>{mediaItem.director}</p>
            <p>⭐ {mediaItem.rating}</p>
            <div className={styles.buttonsContainer}>
                {/* Renderiza los botones del array */}
                {buttons.map((buttonName, index) => (
                <Button key={index} name={buttonName} className={styles.button} />
            ))}
            </div> 
                        
        </article>
    )
}

export default Card