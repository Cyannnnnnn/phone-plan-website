import styles from "../styles/bottomMenu.module.css"
import { AiOutlineGlobal } from "react-icons/ai";
import { MdPhonelinkRing } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineDiscount } from "react-icons/md";


import Link from "next/link"





export default function BottomMenu() {

    return (
        <section className={styles.bottomMenuContainer}>
            <h1>Explore more of CMoblie</h1>
            <ul className={styles.submenu}>
                <li>
                    <AiOutlineGlobal className={styles.allLogos} />
                    <Link href="/">Explore internet</Link>
                </li>
                <li>
                    <MdPhonelinkRing className={styles.allLogos}  />
                    <Link href="/">Shop phones</Link>
                </li>
                <li>
                    <LuShoppingBag className={styles.allLogos} />
                    <Link href="/">Shop phone plans</Link>
                </li>
                <li>
                    <MdOutlineDiscount className={styles.allLogos}  />
                    <Link href="/">Deals</Link>
                </li>
            </ul>
        </section>
    )
}