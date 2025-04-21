import styles from'./Button.module.css'

const Button = ({name, onclick, children}) =>{
    return (
        <button className={styles[`button${name}`]} onClick={onclick}>
            {children}
        </button>
    )
}

export default Button;