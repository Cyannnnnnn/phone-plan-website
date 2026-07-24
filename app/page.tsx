import styles from "./plan-page.module.css";
import { Roboto_Slab } from "next/font/google";
import PlanTableUnit from "./components/PlanTableUnit";
import { allPlans } from "./data/plans"

const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: ["400","700"],
    fallback: ["Georgia", "serif"],
  });

export default function Home() {

  const listOfPlans = allPlans.map((plan) => {
      return <PlanTableUnit 
        key={plan.id} 
        price={plan.price} 
        tag={plan.tag} 
        websiteNum={plan.websiteNum} 
        storage={plan.storage} 
        database={plan.database} 
        bandwidth={plan.bandwidth} 
        ssd={plan.ssd} vcpus={plan.vcpus} 
        worldpress={plan.worldpress} 
        serverSpeed={plan.serverSpeed}  
      />
  })



  
  return (
    <main className={`${styles.planMain} ${robotoSlab.className}`}>


      {/* This is the Header of the price page */}
      <section className={styles.planHeader}>

        <header className={styles.planH}>
          Pricing & Plans
        </header>

        <p className={styles.planP}>
          Discover the plan that unlocks the transformative power of digital art and join our vibrant community today.
        </p>

      </section>


      {/* This is the table of plans */}
      <section className={styles.planTable}>

        <ul className={`${styles.tableColumn} ${styles.header}`} >
            <li></li>

            <li>Website number</li>
            <li>Server storage</li>
            <li>Database</li>
            <li>Unmetered Bandwidth</li>
            <li>SSD Disk</li>
            <li>VCPUS Frontworld</li>
            <li>Worldpress install</li>
            <li>Server speed</li>
            <li></li>
        </ul>

        {listOfPlans}

        



      </section>


    </main>
  );
}
