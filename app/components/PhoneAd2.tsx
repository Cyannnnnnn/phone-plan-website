"use client"
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";


import styles from '../styles/phoneA2.module.css'
import { supabase } from "../lib/superbase";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import type { PhoneAd2Left } from '../types/type';
import Link from 'next/link'


export default function PhoneAd2() {

    const [allData, setAllData] = useState<PhoneAd2Left[]>([]);

    const [current, setCurrent] = useState(0);

    const leftIndex = (current - 1 + allData.length) % allData.length;
    const rightIndex = (current + 1) % allData.length;
    

    // Fetching all the data from Table PopularPhone
    useEffect(() => {

        async function fetchFromTable() {
            const { data, error } = await supabase
                            .from("PopularPhone")
                            .select()
            if(error) {
                console.error("Failed to fetch from PopularPhone: ", error);
                return;
            }
            // console.log(data);

            setAllData(data);
        }

        fetchFromTable();
    }, [])
    

    function leftArrow() {
        setCurrent((prev) => {return (prev - 1 + allData.length) % allData.length})
    }

    function rightArrow() {
        setCurrent((prev) => {return (prev + 1) % allData.length})
    }

    
    // The left and right section's data
    const left = allData.map((phone) => {
        return (
            <div key={phone.id}>
                <p>{phone.title1}</p>
                <p>{phone.titleBig}</p>
                <p>{phone.titleSmall}</p>
                <p>{phone.titleXs}</p>
                <Link className={styles.preorder} href="/">Preorder</Link>
            </div>
        );
    })

    const right = allData.map((phone) => {
        return (
            <div key={phone.id} className={styles.imgContainer}>
                <Image src={phone.src} alt={phone.titleBig} fill sizes="50vw" className={styles.pic} />
            </div>
        )
    })


    return(
        <section className={`${styles.phoneAd2}`}>
            <section className={`${styles.leftSection}`}>
                {left[current]}
            </section>

            <section className={`${styles.rightSection}`}>

                <div onClick={leftArrow}>
                    <IoIosArrowDropleft className={styles.buttons} />
                </div>
                
                {right[current]}
                
                <div onClick={rightArrow}>
                    <IoIosArrowDropright className={styles.buttons} />
                </div>

                <p>{leftIndex}</p>
                <p>{current}</p>
                <p>{rightIndex}</p>

            </section>
        </section>
    );
}