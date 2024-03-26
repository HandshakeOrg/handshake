import LandingHero from "./Hero/LandingHero";
import styles from "./Landing.module.css";
import LandNav from "./Nav/LandNav";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <main className={styles.main}>
      <LandNav />
      <LandingHero />
      <Footer />
    </main>
  );
}

export default Landing;
