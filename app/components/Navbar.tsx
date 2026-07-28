"use client"
import Link from 'next/link';
import styles from "../styles/navbar-page.module.css"
import { Bebas_Neue } from "next/font/google";
import Image from "next/image"
import { usePathname } from 'next/navigation';

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {

    const pathname = usePathname();


    return (
        <nav className={styles.navContainer}>

            <Link href="/" className={`${styles.logo}`}>
                    <Image src="/company.png" height={50} width={50} alt="Company's logo" />
                </Link>

            <section className={`${styles.leftSection} ${bebas.className}`}>
                

                <li 
                    className={pathname.startsWith("/shop") ? styles.active : ""}
                >
                    SHOP
                </li>

                <Link href="/plans" 
                    className={pathname === "/plans" ? styles.active : ""}
                >
                    MOBILE PLANS
                </Link>

                <Link href="/about" 
                    className={pathname === "/about" ? styles.active : ""}
                >
                    ABOUT
                </Link>
            </section>
            
            <section className={styles.rightSection}>
                <span>SIGN IN</span>
                <span>Don't have an account?</span>
            </section>
            
        </nav>
    );
}