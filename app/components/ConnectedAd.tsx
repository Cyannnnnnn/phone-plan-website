"use client"
import styles from "@/app/styles/connectedAd.module.css"
import type { ConnectedAds } from "../types/type";

import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { useState, useEffect } from "react";
import { supabase } from "../lib/superbase";
import Image from "next/image"
import Link from "next/link"


export default function ConnectedAd() {

    const [rawData, setRawData] = useState<ConnectedAds[]>([]);

    const [position, setPosition] = useState(0);



    useEffect(() => {

        async function fetchData() {
            const {data, error} = await supabase
                                        .from("connectedAd")
                                        .select();
            if(error) {
                console.error("Error fetching the data", error)
                return
            }

            setRawData(data);

        }

        fetchData();
    }, [])


    const allCards = rawData.map((card) => {
        return(
            <div className={styles.card} key={card.id}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} alt="The picture of an Ad" height={500} width={900} src={card.src} />
                </div>

                <div className={styles.textContainer}>
                    <p>{card.title}</p>
                    <p>{card.bigText}</p>
                    <p>{card.medText}</p>
                    <p>{card.smallText}</p>
                </div>

                <Link href="/" className={styles.button}>
                    {card.title === "Accessories" ? "Shop now" : "Learn more"}
                </Link>
                
            </div>
        )
    })

    const range = allCards.length - 4;
    const leftgrey = position === 0;
    const rightgrey = position === range;

    const circleGroup = [];

    for(let i=0; i<(range + 1); i++) {
        circleGroup.push(
            <input 
                type="radio" 
                name="card"
                value={i}
                className={styles.radio}
                checked={position === i}
                onChange={() => {setPosition(i)}} 
            />
        )
    }


    return (
        <section className={styles.mainContainer}>
            <h1>Let&apos;s get you connected</h1>

            <div className={styles.mainContentContainer}>
                <TfiArrowCircleLeft 
                    className={styles.arrows}
                    style={{
                        color: leftgrey ? "grey" : "#1E90FF",
                        pointerEvents: leftgrey ? "none" : "auto" 
                    }}
                    onClick={() => {

                        if(position === 0) {
                            return
                        }
                        else {
                            setPosition((prev) => prev - 1);
                            
                        }
                    }} 
                />

                <div className={styles.mainContent} >

                    <div 
                        className={styles.longContent}
                        style={{left: `${-position * 25.5}%`}}
                    >
                        {allCards}
                    </div>
                    
                </div>

                <TfiArrowCircleRight 
                    className={styles.arrows}
                    style={{
                        color: rightgrey ? "grey" : "#1E90FF",
                        pointerEvents: rightgrey ? "none" : "auto" 
                    }}
                    onClick={() => {

                        if(position === range) {
                            return
                        }
                        else {
                            setPosition((prev) => prev + 1);
                            
                        }
                    }} 
                />
            </div>

            <div className={styles.circleControl}>
                    {circleGroup}
            </div>

            
        </section>
    )
}