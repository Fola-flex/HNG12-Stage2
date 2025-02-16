import React, { useContext, useEffect } from 'react';
import "./readyform.css";
import "../shared/form.css";
import { FormButton, FormTitle } from '../shared';
import { reg, vip, vvip } from '../../../assets';
import { StepContext } from '../../../Context';
import { useFormContext } from 'react-hook-form';
import Ticket from '../../Ticket/Ticket';

const ReadyForm = () => {
     const { getValues,handleSubmit } = useFormContext();
     console.log(getValues("radio"))
     const avatar = getValues("filePreview");
     const ticketType = getValues("radio")
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
                {ticketType === 'regular' ? <Ticket avatar={avatar} type={reg} /> : ticketType === 'vip' ? <Ticket avatar={avatar} type={vip} /> : <Ticket avatar={avatar} type={vvip} />}
                            
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
                    handleClick={handleSubmit((data) => {
                        console.log("Form Data:", data);
                        handleNextStep();} )} 
                />
            </div>
        </fieldset>        
    </>
  )
}

export default ReadyForm