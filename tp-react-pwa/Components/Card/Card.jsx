import Button from '../Button/Button'
import styles from './Card.module.css'

// const buttons = (arrayButtons) =>{
//     arrayButtons.map((name)=>{
//     return <Button name={name}/>
// })}

const Card = ({title}) => {
    //Array de botones
    let buttons=["Ver", "Estado", "E", "E"];

    return(
        <article className={styles.card}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{title}</h3> 
            </div>
            <div className={styles.buttonsContainer}>
                {/* Renderiza los botones del array */}
                {buttons.map((buttonName, index) => (
                <Button key={index} name={buttonName} calssName={styles.button} />
            ))}
            </div> 
                        
        </article>
    )
}

export default Card