import Card from '../Card/Card'
import styles from './List.module.css'
import ListCounter from '../Counter/ListCounter/ListCounter'

const List = ({title, array, arrayTotal, buttons}) =>{
    return (
        
        <section className={styles.list}>
            <div className={styles.counter}>
                <ListCounter list={arrayTotal}/>
            </div>
            <h2>{title}</h2>
            <div>
                {array && array.length>0?
                array.map((media, index) => (
                    <Card mediaItem={media} key={index} buttons={buttons} />
                )) :  (<p>No hay peliculas para mostrar</p>)}
            </div>
        </section>
    )
}
export default List