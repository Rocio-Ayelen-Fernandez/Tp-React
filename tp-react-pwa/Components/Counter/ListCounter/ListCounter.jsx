import styles from "./ListCounter.module.css";

const ListCounter = ({list}) =>{
    return(
        
        <div className={styles.container}>
            <p className={styles.number} >{list.length}</p>
        </div>
    )
}
export default ListCounter;