import Header from "../components/Header/Header";
import Footer from "../Footer/Footer";
import styles from "./MainApp.module.css";
import { Outlet } from "react-router-dom";

function MainApp() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default MainApp;
