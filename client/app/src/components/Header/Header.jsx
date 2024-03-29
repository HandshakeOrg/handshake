import './Header.css';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <nav>
      <header className='header'>
        <div className='container'>
          <NavLink to='/' className='logo'>
            HANDSHAKE
          </NavLink>

          <input className='menu-btn' type='checkbox' id='menu-btn' />
          <label className='menu-icon' htmlFor='menu-btn'>
            <span className='navicon'></span>
          </label>
          <ul className='menu'>
            <li>
              <NavLink to='/post' className='active'>
                Post List
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </nav>
  );
}
