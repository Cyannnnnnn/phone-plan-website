"use client"

import styles from "@/app/styles/backtoSchool.module.css"
import Image from "next/image"
import { supabase } from "../lib/superbase"
import { useEffect, useState } from "react";
import type { CopyScrollAds } from "../types/type";

export default function BacktoSchool() {

    const [data, setData] = useState<CopyScrollAds[]>([]);
    const [activeNum, setActiveNum] = useState(1);

    useEffect(() => {

        async function fetchData() {
            const {data, error} = await supabase
                                        .from("scrollPhoneAd")
                                        .select();
            
            if(error) {
                console.error("Error when fetching data", error);
                return
            }

            const carouselData =
                    data.length > 0
                        ? [
                            {
                                ...data[data.length - 1],
                                reactKey: `last-copy-${data[data.length - 1].id}`
                            },

                            ...data.map(card => ({
                                ...card,
                                reactKey: `original-${card.id}`
                            })),

                            {
                                ...data[0],
                                reactKey: `first-copy-${data[0].id}`
                            }
                        ]
                        : [];

            setData(carouselData);
            
        }

        fetchData();
    }, [])

    console.log("The fetched data is: ", data)

    const allCards = data.map((card) => {
        return (
            <div key={card.reactKey} className={styles.card}>
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
    
    const total = allCards.length;
    

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

            <button onClick={() => setActiveNum(prev => (prev - 1 + total) % total)}>{`<`}</button>
            <button onClick={() => setActiveNum(prev => (prev + 1) % total)}>{`>`}</button>
        </section>
    )
}