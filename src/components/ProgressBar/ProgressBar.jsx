import React, { useContext } from 'react';
import "./progressBar.css";
import { StepContext } from '../../Context';

const ProgressBar = () => {
    const { step } = useContext(StepContext);
    
  return (
    <div className='progress_range'>
        <div className='progress_bar' style={{width: `${((step+1) / 3) * 100}%`}}></div>
    </div>
  )
}

export default ProgressBar