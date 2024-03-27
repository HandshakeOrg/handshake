import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.loadingSpinnerContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default Spinner;
