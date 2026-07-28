import styles from "../styles/plan-page.module.css";
import type { PlaneTableTypes } from "../types/type";
import { CiCircleCheck } from "react-icons/ci";
import { GoDash } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";



export default function PlanTableUnit({price, tag, websiteNum, storage, database, bandwidth, ssd, vcpus, worldpress, serverSpeed, header=false}: PlaneTableTypes) {
    return (
        <ul className={`${styles.tableColumn} ${styles.columns}`} >
            <li>{price!=undefined ? (
                    <>
                        <span className={styles.tag}>{tag}</span>
                        <span>{`$ ${price}`}</span>
                        <span>Per month</span>
                    </>
                ) : ""}
            </li>

            <li>{websiteNum}</li>
            <li>{storage}</li>
            <li>{database}</li>
            <li>{bandwidth ? <CiCircleCheck size={30} /> : <GoDash size={30} />}</li>
            <li>{ssd ? <CiCircleCheck size={30} /> : <GoDash size={30} /> }</li>
            <li>{vcpus ? <CiCircleCheck size={30} /> : <GoDash size={30} />}</li>
            <li>{worldpress ? <CiCircleCheck size={30} /> : <GoDash size={30} />}</li>
            <li>{serverSpeed ? <CiCircleCheck size={30} /> : <GoDash size={30} />}</li>
            <li>Get Started  <FaArrowRight className={styles.arrow} size={17} /></li>
        </ul>
    );
}

