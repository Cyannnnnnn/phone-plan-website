"use client"

import styles from "@/app/styles/backtoSchool.module.css"
import Image from "next/image"
import { supabase } from "../lib/superbase"
import { useEffect, useState } from "react";
import type { CopyScrollAds } from "../types/type";

export default function BacktoSchool() {

    const [data, setData] = useState<CopyScrollAds[]>([]);
    const [activeNum, setActiveNum] = useState(1);
    const [transition, setTransition] = useState(true);

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
    

    function handleClick(dir:string) {
        
        
        if(dir === "left") {
            setActiveNum(prev => (prev - 1 + total) % total)
        }
        else if(dir === "right") {
            setActiveNum(prev => (prev + 1) % total)
        }

    }

    return (
        <section className={styles.mainContainer}>
            <Image 
                className={styles.img} 
                src="/backtoSchoolAd.webp" fill 
                alt="Back to school Ad Pic" 
            />
            <div className={styles.outsideContainer}>

                <div className={`${styles.cardContainer}`} 
                    style={{
                            left: `calc(-${activeNum * 100}% - ${activeNum}rem)`,
                            transition: transition
                                        ? "left 0.5s ease"
                                        : "none"
                        }}
                    
                    onTransitionEnd={() => {
                        if (activeNum === 0 || activeNum === 5) {
                            setTransition(false);
                            
                            if(activeNum === 0)
                                setActiveNum(4);
                            else if(activeNum === 5)
                                setActiveNum(1);

                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    setTransition(true);
                                });
                            });
                        }

                    }}
                >
                    {allCards}
                </div>

            </div>

            <button onClick={() => handleClick("left")}>{`<`}</button>
            <button onClick={() => handleClick("right")}>{`>`}</button>
        </section>
    )
}