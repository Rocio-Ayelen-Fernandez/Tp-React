import styles from './GenreCounter.module.css'

//En vez de list1, list2 le pondria nombres de que se espera en estas listas. Es menos generico, pero ayudaria a autodocumentar.
const GenreCounter = ({ list1,list2 }) => {

    const mergedList = [...list1, ...list2];

    const genreCount = mergedList.reduce((acc, item) =>{

        acc[item.genre] = (acc[item.genre] || 0) +1

        return acc
    }, {})

    return(
        
        <div className={styles.container}>
            {Object.entries(genreCount).map(([genre, count]) => (
                <div key={genre} className={styles.genreContainer}>
                    <h5>{genre}: {count}</h5>
                </div>
                
            ))}
        </div>
       
    )
}

export default GenreCounter;