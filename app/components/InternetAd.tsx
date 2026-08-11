import styles from "@/app/styles/internetAd.module.css"
import Image from "next/image"
import Link from "next/link"

export default function InternetAd() {
    return(
        <section className={styles.mainContainer}>

            <section className={styles.leftSection}>

                <Image 
                    src="/internetAd.webp" 
                    alt="A picture of a woman browsing internet"
                    className={styles.img}
                    width={1000}
                    height={1000}
                />

            </section>

            <section className={styles.rightSection}>
                <p>C-Fiber<sup className={styles.tradeMark}>&reg;</sup></p>
                <p>Home internet with 99% reliability</p>
                <p>Stream, study, and share—with fast speeds.</p>
                <p>Based on network availability.</p>
                <Link href="/" className={styles.button}>Check availability</Link>
            </section>

        </section>
    );
}