import styles from'./Button.module.css'

const Button = ({name}) =>{
    return (
        <button className={styles.button}>{name}</button>
    )
}


export default Button;