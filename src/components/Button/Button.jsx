import React from 'react';
import "./button.css";
import { line } from '../../assets';

const Button = () => {
  return (
    <button className='button'>
        MY TICKETS
        <div className='button_img'>
            <img src={line} alt='line icon' />
        </div>        
    </button>
  )
}

export default Button