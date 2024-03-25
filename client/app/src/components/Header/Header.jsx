import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="header-logo left">
            <a href="#">
              <img src="" alt="Handshake" width="160" height="40" />
            </a>
          </div>
          <input type="checkbox" className="menu-btn" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <nav className="navbar-menu right">
            <ul className="nav">
              <li className="nav-item sign-in">
                <a href="#" className="nav-link">
                  Sign In
                </a>
              </li>
              <li className="nav-item options">
                <a href="#" className="nav-link">
                  Employers / Post Jobs
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
