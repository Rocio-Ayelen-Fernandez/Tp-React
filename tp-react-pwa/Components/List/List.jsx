import Card from '../Card/Card'
import styles from './List.module.css'


const List = ({title, array}) =>{

    
    return (
        <section className={styles.list}>
            <h2>{title}</h2>
            <div>
                {array.map((movie, index) => (
                     <Card title={movie} key={index}/>
                ))}
            </div>
        </section>
    )
}
export default List