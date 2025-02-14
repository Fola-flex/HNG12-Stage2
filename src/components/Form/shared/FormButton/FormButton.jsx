import React from 'react';
import "./formButton.css";

const FormButton = ({background, color, text, handleClick}) => {    

  return (
    <button
    type='button'
        className='form_button'
        style={{backgroundColor: `${background}`, color: `${color}`}}
        onClick={handleClick}
    >
        {text}
    </button>
  )
}

export default FormButton