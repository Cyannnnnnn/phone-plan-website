import styles from "../styles/youtuAd.module.css"
import Link from "next/link"

export default function YoutuAd() {
    return (
        <section className={styles.youtuAd}>

            <section className={`${styles.leftSection}`}>
                <p>Special offer in your area</p>
                <h1>Get 3 months of YouTube TV on us</h1>
                <p>Enjoy live sports, news, and shows when you sign up for AT&T Fiber® with speeds starting at 300Mbps.</p>
                <p>New customers in select markets only. After 3mos., YouTube TV renews at then current price unless canceled. Terms apply. AT&T Fiber: Limited availability areas. See offer details</p>
                <Link href="/">Shop AT&T Fiber</Link>
            </section>

            <section className={`${styles.rightSection}`}>

            </section>

        </section>
    );



}