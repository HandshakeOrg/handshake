import { Link } from "react-router-dom";
import styles from "./LandingHero.module.css";

function LandingHero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.top}>
          <h1 className={styles.h1}>Find what you&apos;re looking for</h1>
          <p className={styles.sub_title}>
            The best place to find your next adventure. From job postings to
            real estate listings, we&apos;ve got you covered.
          </p>
          <Link to="/signup" className={styles.btns}>
            GET STARTED
          </Link>
        </div>
      </section>
      <section></section>
    </>
  );
}

export default LandingHero;
