"use client"

import styles from "@/app/styles/backtoSchool.module.css"
import Image from "next/image"
import { supabase } from "../lib/superbase"
import { useEffect, useState } from "react";
import type { ScrollAds } from "../types/type";

export default function BacktoSchool() {

    const [data, setData] = useState<ScrollAds[]>([]);
    const [activeNum, setActiveNum] = useState(0);

    useEffect(() => {

        async function fetchData() {
            const {data, error} = await supabase
                                        .from("scrollPhoneAd")
                                        .select();
            
            if(error) {
                console.error("Error when fetching data", error);
                return
            }

            setData(data);
            
        }

        fetchData();
    }, [])

    console.log("The fetched data is: ", data)

    const allCards = data.map((card) => {
        return (
            <div key={card.id} className={styles.card}>
                <div className={styles.topParagraph}>
                    <p>{card.firstTitle}</p>
                    <p>{card.bigTitle}</p>
                    <p>{card.medTitle}</p>
                    <p>{card.smallTitle}</p>
                </div>
                <Image 
                    className={styles.phonePic}
                    src={card.src} 
                    width={500} 
                    height={500}
                    alt="One of the phone Ad"
                />
            </div>
        )
    })
    

    return (
        <section className={styles.mainContainer}>
            <Image 
                className={styles.img} 
                src="/backtoSchoolAd.webp" fill 
                alt="Back to school Ad Pic" 
            />
            <div className={styles.outsideContainer}>

                <div className={`${styles.cardContainer}`} style={{left: `calc(-${activeNum * 100}% - ${activeNum}rem)`}}>
                    {allCards}
                </div>

            </div>

            <button onClick={() => setActiveNum(prev => prev - 1)}>{`<`}</button>
            <button onClick={() => setActiveNum(prev => prev + 1)}>{`>`}</button>
        </section>
    )
}