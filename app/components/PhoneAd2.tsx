"use client"
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { IoPlayCircle } from "react-icons/io5";
import { IoStopCircleSharp } from "react-icons/io5";



import styles from '../styles/phoneA2.module.css'
import { supabase } from "../lib/superbase";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import type { PhoneAd2Left } from '../types/type';
import Link from 'next/link'


export default function PhoneAd2() {

    const [allData, setAllData] = useState<PhoneAd2Left[]>([]);

    const [current, setCurrent] = useState(0);

    const [isPlaying, setisPlaying] = useState(false);

    const leftIndex = (current - 1 + allData.length) % allData.length;
    const rightIndex = (current + 1) % allData.length;

    // Setting the autoplay Button

    useEffect(() => {
        if(isPlaying === false) {
            return
        }

        const interval = setInterval(() => {
            rightArrow();
        }, 2000)

        return () => clearInterval(interval);

    }, [isPlaying])



    

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

    const right = allData.map((phone, index) => {
        let position = "";

        if(index === leftIndex) {
            position = styles.leftPic;
        }
        else if(index === current) {
            position = styles.centerPic;
        }
        else if(index === rightIndex) {
            position = styles.rightPic;
        }

        return (
            <Link href="/about" key={phone.id} className={`${position} ${styles.imgContainer}`}>
                <Image src={phone.src} alt={phone.titleBig} fill className={styles.pic} />
            </Link>
        )
    })


    return(
        <section className={`${styles.phoneAd2}`}>
            <section className={`${styles.leftSection}`}>
                {left[current]}
            </section>

            <section className={`${styles.rightSection}`}>

                <div onClick={leftArrow} className={styles.LbuttonsContainer}>
                    <IoIosArrowDropleft className={styles.buttons} />
                </div>

                {right}
                
                <div onClick={rightArrow} className={styles.RbuttonsContainer}>
                    <IoIosArrowDropright className={styles.buttons} />
                </div>

                <div className={styles.autoButtonContainer}>
                    {isPlaying ? 
                        <IoStopCircleSharp onClick={() => setisPlaying(false)} 
                            className={styles.autoButton} /> 
                            : 
                            <IoPlayCircle onClick={() => setisPlaying(true)} 
                            className={styles.autoButton} />}

                    {isPlaying && <div className={styles.progressContainer}>
                                <div className={styles.progress}></div>
                            </div>}
                </div>
                
            </section>
        </section>
    );
}