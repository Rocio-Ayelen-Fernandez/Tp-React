import styles from'./Button.module.css'

const Button = ({name, onclick}) =>{
    return (
        <button className={styles.button} onClick={onclick}>{name}</button>
    )
}

export default Button;