import Button from '../Button/Button'
import styles from './Card.module.css'

const Card = ({title}) => {
    return(
        <article className={styles.card}>
            <h3>{title}</h3>
            <div classname={styles.buttons}>
            <Button name="Ver"/>
            <Button name="Estado"/>
            <Button name="E"/>
            <Button name="E"/>
            </div>
            
        </article>
    )
    
    
}

export default Card