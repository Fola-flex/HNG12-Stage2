import React, { useContext } from 'react';
import "./readyform.css";
import "../shared/form.css";
import { FormButton, FormTitle } from '../shared';
import { ticket, ticket_reg } from '../../../assets';
import { StepContext } from '../../../Context';

const ReadyForm = () => {
    const { handlePreviousStep, handleNextStep } = useContext(StepContext)
  return (
    <>        
        <div className='show_header '>
            <FormTitle title="Ready" />
        </div>
        <fieldset className='ready_fieldset'>
            <div className='show_second_header '>
                <FormTitle title="Ready" />
            </div>
            <div className='form_heading_info'>
                <h1>Your Ticket is Booked!</h1>
                <p>You can download or check your email for a copy</p>                    
            </div>
            <div className='form_ticket'>
                <div style={{background: `url(${ticket}), url(${ticket_reg})`, backgroundSize: '100% 100%, 100% 100%'}}>

                </div>
            </div>                
            <div className='form_fields_buttons'>
                <FormButton 
                    background="transparent" 
                    color="#24A0B5" 
                    text="Book Another Ticket" 
                    handleClick={handlePreviousStep} 
                />
                <FormButton 
                    background="#24A0B5" 
                    color="#FFFFFF" 
                    text="Download Ticket" 
                    handleClick={handleNextStep} 
                />
            </div>
        </fieldset>        
    </>
  )
}

export default ReadyForm