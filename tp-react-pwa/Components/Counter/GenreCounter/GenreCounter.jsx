import styles from './GenreCounter.module.css'

const GenreCounter = ({ list1,list2 }) => {

    const mergedList = [...list1, ...list2];

    const genreCount = mergedList.reduce((acc, item) =>{

        acc[item.genre] = (acc[item.genre] || 0) +1

        return acc
    }, {})

    return(
        
        <div className={styles.container}>
            {Object.entries(genreCount).map(([genre, count]) => (
                <div className={styles.genreContainer}>
                    <h5>{genre}: {count}</h5>
                </div>
                
            ))}
        </div>
       
    )
}

export default GenreCounter;