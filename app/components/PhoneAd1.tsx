import styles from '../styles/phoneA1.module.css'


export default function PhoneAd1 () {
    return (
        <section className={`${styles.phoneAd1}`}>

        <section className={styles.leftSection}>

          <p>New & Exciting CPhone Is Here</p>
          <p>Get the ALL-NEW CPhone J12Xx for $0 when JOINED</p>

          <p>Learn how to get this offer with eligible trade-in. 
            <span style={{fontWeight: "bold"}}>
              Free shipping.
            </span>
          </p>

          <p>Req. trade-in of $290 or more & eligible plan. Terms and restrictions apply. Subject to change. See offer details</p>
          

        </section>

        <section className={`${styles.rightSection}`}>
          

          <button >Pre-Order</button>
        </section>
        
        
      </section>

    );
}