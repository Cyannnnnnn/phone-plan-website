"use client"

import { FaPlay } from "react-icons/fa6";
import { IoPauseOutline } from "react-icons/io5";



import styles from "../styles/scrollAds.module.css"
import { supabase } from "../lib/superbase"
import { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import type { ScrollAds } from "../types/type";

import CircleSelector from "./CircleSelector";

export default function ScrollAds() {

    const [data, setData] = useState<ScrollAds[]>([]);
    const [play, setPlay] = useState(false);
    const [id, setId] = useState(0);
    const [dir, setDir] = useState("");
    const [leftMoving, setLeftMoving] = useState(true);
    

    //Fetching the data from database
    useEffect(() => {
        async function fetchData() {
            const {data, error} = await supabase
                                        .from ("scrollPhoneAd")
                                        .select();

            if(error) {
                console.error("Failed to fetch from scrollPhoneAd: ", error)
                return
            }

            setData(data);
            
        }

        fetchData();
        
        
    }, [])


    const allCircles = data.map((p, index) => {
        return <CircleSelector key={p.id} selected={id===index} handleClick={() => {
            setId(prev => {
                if(prev === 0 && index === 3) {
                    setDir("RIGHT")
                }
                else if(prev > index) {
                    setDir("RIGHT")
                }
                else if(prev < index) {
                    setDir("LEFT")
                }
                setLeftMoving(true)
                return index
            }
           
            )
        }} />
    })

    const total = data?.length ?? 0
    const index1 = (id + 1) % total;
    const index2 = (id + 2) % total;
    const left = (id + 3) % total;


    const allAds = data.map((p, index) => {

        let position = "";
        let picActive = "";
        
        

        if(index === id) {
            
            position = styles.active;
            picActive = styles.picActive
        }
        else if(index === index1) {
            position = styles.index1;
        }
        else if(index === index2) {
            position = (leftMoving && dir === "LEFT") ? styles.rightMove : styles.index2;
        }
        else if(index === left) {
            position = (leftMoving && dir==="RIGHT")? styles.leftMove : styles.left;
            
        }
        // if(index === 0)
        return (
               
                <div key={p.id} className={
                    `${position} ${styles.adContainer} 
                    ${(index === left && dir === "RIGHT") ? styles.leftContainer : ((index === index2 && dir === "LEFT") ? styles.index2Container : styles.regularContainer)}`}
                    onTransitionEnd={() => {setLeftMoving(false)}}    
                >
                    
                        <div className={styles.textContainer}>
                            <p>{p.firstTitle}</p>
                            <p>{p.bigTitle}</p>
                            <p>{p.medTitle}</p>
                            <p>{p.smallTitle}</p>
                            <Link className={styles.shopButton} href="/">Shop now</Link>
                        </div>

                        <Image className={`${picActive} ${styles.pic}`} src={p.src} width={500} height={500} alt="Some phone Ad"></Image>
                    

                    </div>
                
            
        );
    })


    

    return (
        <section className={`${styles.mainContainer}`}>

            <section className={styles.topSection}>

                {allAds}

            </section>

            <section className={styles.bottomSection}>
                {allCircles}
                


                {/* This is the playing button */}
                <div className={styles.progressContainer} >

                    <svg width="48" height="48">

                        <circle
                            cx="24"
                            cy="24"
                            r="20"
                            className={styles.background}
                        />
                        <circle
                            cx="24"
                            cy="24"
                            r="20"
                            className={`${play ? styles.playing : null} ${styles.progress}`}
                        />
                    </svg>
                        
                    {play ? 
                        <IoPauseOutline onClick={() => setPlay(false)} className={styles.buttons} /> : 
                        <FaPlay onClick={() => setPlay(true)} className={styles.buttons} />
                    }

                </div>
                
            </section>

            <span  className={`${styles.change} ${styles.test}`}>Current Id is: {id}</span>
            <span>Direction is: {dir}</span>
            <span>LeftMoving is: {leftMoving.toString()}</span>

        </section>
    );
}