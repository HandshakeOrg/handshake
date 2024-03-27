import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      phone_number,
      password,
      confirm_password,
    };
    console.log(data);
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.title}>
          <h1 className={styles.h1}>Create an account</h1>
          <p className={styles.p}>Enter your information to get started</p>
        </div>
        <div className={styles.input_box}>
          <div className={styles.name_wrapper}>
            <div className={styles.input_space}>
              <label htmlFor="firstname">Firstname</label>
              <input
                id="firstname"
                placeholder="Enter your firstname"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className={styles.input_space}>
              <label htmlFor="lastname">Lastname</label>
              <input
                id="lastname"
                placeholder="Enter your lastname"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.name_wrapper}>
            <div className={styles.input_space}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.input_space}>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                type="text"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.name_wrapper}>
            <div className={styles.input_space}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.input_space}>
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                id="confirm_password"
                placeholder="Renter your password"
                type="password"
                value={confirm_password}
                onChange={(e) => setConfirm_password(e.target.value)}
              />
            </div>
          </div>
          <button className={styles.button}>Sign Up</button>
          <div className={(styles.input_space, styles.center)}>
            <p className={styles.footer_p}>
              Already have an account? &nbsp;
              <Link to="/login" className={styles.underline}>
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
