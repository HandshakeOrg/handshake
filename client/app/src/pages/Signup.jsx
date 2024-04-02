import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./Signup.module.css";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
} from "../utils/validation/AuthValidation";
import { toast } from "react-toastify";
import Spinner from "../components/Spinners/Spinner";
import logo from "../assets/logo_white_bg.jpg";

function Signup() {
  const { createAccount, user, loading } = useAuth();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const navigate = useNavigate();

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

    if (isEmpty(firstname)) {
      toast.error("Please enter your first name.");
      return;
    }
    if (isEmpty(lastname)) {
      toast.error("Please enter your last name.");
      return;
    }
    if (!isEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!isLength(password)) {
      toast.error("Please enter a password with at least 8 characters.");
      return;
    }
    if (!isMatch(password, confirm_password)) {
      toast.error("The passwords you entered do not match.");
      return;
    }
    if (isEmpty(phone_number)) {
      toast.error("Please enter your phone number.");
      return;
    }

    createAccount(data);
  };
  useEffect(
    function () {
      if (user) navigate("/login", { replace: true });
    },
    [user, navigate],
  );

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.center}>
          <img src={logo} alt="Handshake" className={styles.logo_img} />
        </div>
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
      {loading && <Spinner />}
    </main>
  );
}
export default Signup;
