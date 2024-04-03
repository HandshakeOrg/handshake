// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./User.module.css";
import Spinner from "../Spinners/Spinner";

function User() {
  const { user, logout, deleteAccount, isAuthenticated, loading } = useAuth();


  const navigate = useNavigate();

  async function handleLogOut() {
    const res = await logout();
    console.log(res);
    if (res.success) navigate("/login", { replace: true });
  }
  async function handleDelete(user) {
    if (!isAuthenticated) {
      toast.error("You are not authenticated");
      return;
    }
    const deletionResult = await deleteAccount(user);
    if (deletionResult.success) {
      toast.success("Account deleted successfully");
      navigate("/", { replace: true });
    }
  }

  // useEffect(
  //   function () {
  //     if (user === null) navigate("/", { replace: true });
  //   },
  //   [user, navigate],
  // );

  return (
    <>
      <main className={styles.main}>
        <div>
          <h1 className={styles.h1}>User Profile</h1>
          <p>
            {user?.firstname} {user?.lastname}
          </p>
        </div>
        <div>
          <div>
            <div className={styles.item}>
              <label htmlFor="first-name">First name</label>
              <input
                id="first-name"
                readOnly
                disabled
                value={user?.firstname}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="last-name">Last name</label>
              <input id="last-name" readOnly disabled value={user?.lastname} />
            </div>
            <div className={styles.item}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                readOnly
                type="email"
                value={user?.email}
                disabled
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="phone">Phone number</label>
              <input id="phone" readOnly disabled value={user?.phone} />
            </div>
            <div className={styles.item}>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" disabled />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={handleLogOut}>Logout</button>
          <button onClick={handleDelete}>Delete Account</button>
        </div>
        {/* {loading && <Spinner />} */}
      </main>
    </>
  );
}

export default User;
