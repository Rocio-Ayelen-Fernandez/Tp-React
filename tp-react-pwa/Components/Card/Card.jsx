import { EyeClosed, Star } from 'lucide-react'
import Button from '../Button/Button'
import styles from './Card.module.css'
import { Trash2, BookmarkCheck, Expand, BookmarkX, SquarePen } from 'lucide-react';



const buttons = [
    { name: "Expand", icon: <Expand />, type: "Button" },
    {
        name: "State",
        icon: (item) =>
            item.isSeen ? (
                <BookmarkX />
            ) : (
                <BookmarkCheck />
            ),
        type: "Button"
    },
    { name: "Delete", icon: <Trash2 />, type: "Button" },
    { name: "Edit", type: "Button", icon: <SquarePen /> },
];


//Array de botones
const Card = ({ mediaItem, actions }) => {
    return (
        <article className={styles.card}>
            <div className={styles.movieContainer}>
                <div className={styles.imgContainer}>
                    <img src={mediaItem.url} />
                </div>
                <div className={styles.detailsContainer}>
                    <p className={styles.title}>{mediaItem.title}</p>
                    {/* es necesario el p si tienen b? */}
                    <p><b>Director:</b> {mediaItem.director}</p>
                    <div className={styles.ratingContainer}>
                        {mediaItem.isSeen ? (
                            <>
                                <div>
                                    {/* buena repetitiva aca! */}
                                    {Array(5).fill().map((_, index) => (
                                        <Star
                                            className={index < Number(mediaItem.rating) ? styles.starIcon : ''}
                                            key={index}
                                        />
                                    ))}
                                </div>
                                <b>{mediaItem.rating}</b>
                            </>
                        ) : (
                            <p className={styles.notSeen}><EyeClosed/></p>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                {/* Renderiza los botones del array */}
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        name={button.name}
                        onclick={() => actions[button.name](mediaItem)}
                        className={styles[`button${button.name}`]}>

                        {typeof button.icon === 'function' ? button.icon(mediaItem) : button.icon}
                    </Button>
                ))}
            </div>
        </article>
    )
}

export default Card