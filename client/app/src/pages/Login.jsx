import { Link } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <div className={styles.center}>
          <h1 className={styles.title}>HANDSHAKE</h1>
          <p className={styles.sub_title}>Welcome back</p>
        </div>
        <div className={styles.input_box}>
          <div className={styles.input_box}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className={styles.input_box}>
            <div className={styles.forgot_container}>
              <label htmlFor="password">Password</label>
              <Link className={styles.forgot} href="#">
                Forgot your password?
              </Link>
            </div>
            <input id="password" required type="password" />
          </div>
          <button className={styles.button}>Login</button>
        </div>
        <div className={styles.pass}>
          Don't have an account? &nbsp;
          <Link className={styles.underline} href="#">
            Sign up
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
