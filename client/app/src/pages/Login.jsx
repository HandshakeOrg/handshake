import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Login.module.css';
import { useAuth } from '../contexts/AuthContext';
import Spinner from '../components/Spinners/Spinner';

function Login() {
  const { login, isAuthenticated, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Email and password cannot be empty.');
      return;
    }
    login({ email, password });
  };

  useEffect(
    function () {
      if (isAuthenticated === true) {
        const from = location.state?.from || '/app'; // Retrieve the original path or default to '/app'
        navigate(from, { replace: true });
      }
    },
    [isAuthenticated, location.state, navigate]
  );

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.center}>
          <h1 className={styles.title}>HANDSHAKE</h1>
          <p className={styles.sub_title}>Welcome back</p>
        </div>
        <div className={styles.input_box}>
          <div className={styles.input_box}>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              placeholder='m@example.com'
              required
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input_box}>
            <div className={styles.forgot_container}>
              <label htmlFor='password'>Password</label>
              <Link className={styles.forgot} to='#'>
                Forgot your password?
              </Link>
            </div>
            <input
              id='password'
              required
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.button}>Login</button>
        </div>
        <div className={styles.pass}>
          Don&apos;t have an account? &nbsp;
          <Link className={styles.underline} to='/signup'>
            Sign up
          </Link>
        </div>
      </form>
      {loading && <Spinner />}
    </main>
  );
}

export default Login;
