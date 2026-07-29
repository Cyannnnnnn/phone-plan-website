import styles from './styles/home-page.module.css'
import PhoneAd1 from './components/PhoneAd1'

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

    </div>
  );
}
