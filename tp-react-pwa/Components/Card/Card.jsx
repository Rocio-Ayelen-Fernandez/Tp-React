import Button from '../Button/Button'
import styles from './Card.module.css'


//Array de botones

const Card = ({mediaItem, button, buttonAction}) => {
    

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
                {button.map((button, index) => (
                <Button key={index} name={button.name} onclick={() => buttonAction[button.action](mediaItem)} className={styles.button.name} />
            ))}
            </div> 
                        
        </article>
    )
}

export default Card