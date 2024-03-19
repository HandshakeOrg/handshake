import styles from './Login.module.css';

function Login() {
  return (
    <main>
      <form>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}

export default Login;
