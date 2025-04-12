import Card from '../Card/Card'
import styles from './List.module.css'

const List = () =>{
    return (
        <section className={styles.list}>
             <Card title={"Serie"}/>  
            <Card title={"Peli1"}/>  
            <Card title={"Serie"}/>  
        </section>
    )
}
export default List