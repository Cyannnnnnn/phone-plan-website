import styles from "@/app/styles/backtoSchool.module.css"
import Image from "next/image"

export default function BacktoSchool() {
    return (
        <section className={styles.mainContainer}>
            <Image 
                className={styles.img} 
                src="/backtoSchoolAd.webp" fill 
                alt="Back to school Ad Pic" 
            />
        </section>
    )
}