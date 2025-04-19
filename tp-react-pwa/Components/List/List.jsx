import Card from '../Card/Card'
import styles from './List.module.css'
import ListCounter from '../Counter/ListCounter/ListCounter'



const List = ({title, array, button, buttonAction}) =>{

    
    return (
        <section className={styles.list}>
            <div className={styles.counter}>
                <ListCounter list={array}/>
            </div>
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>
            <div>
                
                {array && array.length>0?
                array.map((media, index) => (
                    
                    <Card mediaItem={media} key={index} button={button} buttonAction={buttonAction}/>
                )) :  (<p>No hay peliculas para mostrar</p>)}
            </div>
            
        </section>
    )
}
export default List