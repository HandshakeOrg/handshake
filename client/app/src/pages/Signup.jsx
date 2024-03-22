import { Link } from 'react-router-dom';
import styles from './Signup.module.css';

function Signup() {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <div className={styles.title}>
          <h1 className={styles.h1}>Create an account</h1>
          <p className={styles.p}>Enter your information to get started</p>
        </div>
        <div className={styles.input_box}>
          <div className={styles.input_space}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              placeholder="Enter your username"
              type="text"
            />
          </div>
          <div className={styles.input_space}>
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className={styles.input_space}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="Enter your password"
              type="password"
            />
          </div>
          <button className={styles.button}>Sign Up</button>
          <div className={(styles.input_space, styles.center)}>
            <p className={styles.footer_p}>
              Already have an account? &nbsp;
              <Link to="#" className={styles.underline}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </main>
  );
}
export default Signup;
