import styles from "../styles/scrollAds.module.css"

export default function CircleSelector({ selected, handleClick }:{selected: boolean, handleClick: () => void}) {

    return (
        <div className={styles.circle}>
                <div className={`${selected ? styles.selected : null} ${styles.outterCircle}`}></div> 
                <div onClick={handleClick} className={styles.innerCircle}></div>
        </div>
    );
}