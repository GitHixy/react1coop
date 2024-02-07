import styles from "./Card.module.css"

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.title} src="https://placehold.it/50x50" alt="" />
            <p className={styles.paragraph}>{props.title}</p>
        </div>
    )
}

export default Card;