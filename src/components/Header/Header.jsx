import React from 'react';
import "./header.css";
import { logo, ticz } from '../../assets';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header>
        <nav>
            <div className='nav_logo'>
                <div className='nav_logo_img'>
                    <img src={logo} alt="Company's logo" />
                </div>
                <div className='nav_logo_ticz'>
                    <img src={ticz} alt="Company's logo" />
                </div>
            </div>
            <div className='nav_list'>
                <ul>
                    <li>Events</li>
                    <li>My Tickets</li>
                    <li>About Project</li>
                </ul>
            </div>
            <div className='nav_button'>
                <Button />
            </div>
        </nav>
    </header>
  )
}

export default Header