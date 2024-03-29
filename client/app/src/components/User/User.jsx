import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./User.module.css";

function User() {
  const { user, logout, deleteAccount } = useAuth();
  const navigate = useNavigate();

  function handleLogOut() {
    logout();
  }
  function handleDelete(user) {
    deleteAccount(user);
  }

  useEffect(
    function () {
      if (user === null) navigate("/", { replace: true });
    },
    [user, navigate],
  );

  return (
    <>
      <main className={styles.main}>
        <div>
          <h1 className={styles.h1}>User Profile</h1>
          <p>
            {user?.firstName} {user?.lastName}
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
                value={user?.firstName}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="last-name">Last name</label>
              <input id="last-name" readOnly disabled value={user?.lastName} />
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
      </main>
    </>
  );
}

export default User;
