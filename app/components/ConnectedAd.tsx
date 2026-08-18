import styles from "@/app/styles/connectedAd.module.css"

import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";


export default function ConnectedAd() {

    return (
        <section className={styles.mainContainer}>
            <h1>Let&apos;s get you connected</h1>

            <div className={styles.mainContentContainer}>
                <TfiArrowCircleLeft 
                    className={styles.arrows} 
                />

                <div className={styles.mainContent} >

                </div>

                <TfiArrowCircleRight 
                    className={styles.arrows} 
                />
            </div>

            <div className={styles.circleControl}></div>
        </section>
    )
}