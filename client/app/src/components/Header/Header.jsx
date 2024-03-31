import './Header.css';
import { NavLink } from 'react-router-dom';

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
              <NavLink to='/app' className='active'>
                Listings
              </NavLink>
            </li>
            <li>
              <NavLink to='/app/postjob' className='active'>
                Post Listing
              </NavLink>
            </li>
            <li>
              <NavLink to='/app/profile' className='active'>
                Account
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </nav>
  );
}

export default LandNav;
