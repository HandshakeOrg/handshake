import { NavLink } from 'react-router-dom';

import './LandNav.css';

function LandNav() {
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
              <NavLink to='/' className='active'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/app' className='active'>
                Listings
              </NavLink>
            </li>
            <li>
              <NavLink to='/signup' className='active'>
                Get Started
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' className='active'>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </nav>
  );
}

export default LandNav;
