import React from 'react';
import './Header.css';
export default function Header() {
  return (
    // <header>
    //   <nav>
    //     <div className='left'>
    //       <div className='logo'>
    //         <img src='' alt='' />
    //         Logo
    //       </div>{' '}
    //     </div>
    //     <div className='right'>
    //       <div className='sign-in'>
    //         <div className='desktop'>
    //           <a href=''>Sign in</a>
    //         </div>
    //         <div className='mobile'>
    //           <a href=''>Sign in</a>
    //         </div>
    //       </div>
    //       <div className='options'>
    //         <div className='desktop'>
    //           {' '}
    //           <a href=''>Employers / Post Job</a>
    //         </div>
    //         <div className='mobile'>
    //           <ul>
    //             <li>
    //               <a href=''>Home</a>
    //             </li>
    //             <li>
    //               <a href=''>Employers</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </header>

    <header class='header'>
      <div class='container'>
        <div class='header-container'>
          <div class='header-logo left'>
            <a href='#'>
              <img src='' alt='Handshake' width='160' height='40' />
            </a>
          </div>
          <input type='checkbox' class='menu-btn' id='menu-btn' />
          <label class='menu-icon' for='menu-btn'>
            <span class='navicon'></span>
          </label>
          <nav class='navbar-menu right'>
            <ul class='nav'>
              <li class='nav-item sign-in'>
                <a href='#' class='nav-link'>
                  Sign In
                </a>
              </li>
              <li class='nav-item options'>
                <a href='#' class='nav-link'>
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
