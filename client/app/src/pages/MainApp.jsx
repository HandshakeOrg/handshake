import Header from "../components/Header/Header";
import BodySection from "../components/BodySection/BodySection";
import Footer from "../Footer/Footer";
import styles from "./MainApp.module.css";

function MainApp() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <BodySection />
        <Footer />
      </main>
    </>
  );
}

export default MainApp;
