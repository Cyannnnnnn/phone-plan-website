import styles from './styles/home-page.module.css'
import PhoneAd1 from './components/PhoneAd1'
import PhoneAd2 from './components/PhoneAd2'
import YoutuAd from './components/YoutuAd';
import ScrollAds from './components/ScrollAds';
import BottomMenu from './components/BottomMenu';

import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});





export default function Home() {


  return (
    <div className={`${robotoMono.className} ${styles.home}`}>

      <h1 className={`${robotoMono.className} ${styles.header}`}>C-MOBILE, WE CONNECT EACH OTHER</h1>

      <PhoneAd1 />

      <PhoneAd2 />

      <YoutuAd />

      <ScrollAds />

      <BottomMenu />

    </div>
  );
}
