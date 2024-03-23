import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input_box}>
            <div className={styles.forgot_container}>
              <label htmlFor="password">Password</label>
              <Link className={styles.forgot} to="#">
                Forgot your password?
              </Link>
            </div>
            <input
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.button}>Login</button>
        </div>
        <div className={styles.pass}>
          Don&apos;t have an account? &nbsp;
          <Link className={styles.underline} to="/signup">
            Sign up
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
