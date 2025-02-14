import React, { useContext } from 'react';
import "./formtitle.css";
import { StepContext } from '../../../../Context';
import ProgressBar from '../../../ProgressBar/ProgressBar';

const FormTitle = ({title}) => {
    const { step } = useContext(StepContext);
  return (
    <div className='formTitle'>
        <div className='form_heading_label'>
            <h1>{title}</h1>
            <p>Step {step+1} /3</p>
        </div>
        <ProgressBar />
    </div>
  )
}

export default FormTitle