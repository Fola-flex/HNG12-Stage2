import React, { useContext } from 'react';
import "./selectionForm.css";
import { FormButton, FormTitle } from '../shared';
import { StepContext } from '../../../Context';
import { useFormContext } from 'react-hook-form';

const SelectionForm = () => {
    const { register, handleSubmit, formState: { errors } } = useFormContext();
    const { handlePreviousStep, handleNextStep } = useContext(StepContext);
    
  return (
    <>        
        <div className='show_header'>
            <FormTitle title="Ticket Selection" />
        </div>            
        <fieldset className='form_fieldset'>
            <div className='show_second_header'>
                <FormTitle title="Ticket Selection" />
            </div>                
            <div className='form_heading_info'>
                <div className='form_heading_info_wrapper'>
                    <h1>Techember Fest "25</h1>
                    <p>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
                </div>                    
                <div className='form_heading_info_date'>
                    <p>📍 [Event Location] </p>
                    <p className='hide'> | | </p>
                    <p>March 15, 2025 | 7:00 PM</p>
                </div>
            </div>
            <div className='rule'></div>
            <div className='form_fields'>
                <label htmlFor="selection1">Select Ticket Type:</label>
                <div className='form_fields_wrapper'>
                    <div className='form_fields_input'>
                        <div className='custom_input_wrapper'>
                            <input {...register("radio", { required: "Please select an option" })} type="radio" name="radio" value="regular" id='selection1' />
                            <div className="custom_input_field">
                                <div className='ticket_type'>
                                    <h2 className='text'>REGULAR ACCESS</h2>
                                    <p className='text'>20 left!</p>
                                </div>
                                <div className='price'>
                                    <p>Free</p>
                                </div>                            
                            </div>                            
                        </div>
                        <div className='custom_input_wrapper'>
                            <input {...register("radio")} type="radio" name='radio' value="vip" id='selection2' />
                            <div className="custom_input_field">
                                <div className='ticket_type'>
                                    <h2 className='text'>VIP ACCESS</h2>
                                    <p className='text'>20 left!</p>
                                </div>
                                <div className='price'>
                                    <p>$50</p>
                                </div>                            
                            </div>
                        </div>
                        <div className='custom_input_wrapper'>
                            <input {...register("radio")} type="radio" name='radio' value="vvip" id='selection3' />
                            <div className="custom_input_field">
                                <div className='ticket_type'>
                                    <h2 className='text'>VVIP ACCESS</h2>
                                    <p className='text'>20 left!</p>
                                </div>
                                <div className='price'>
                                    <p>$150</p>
                                </div>                            
                            </div>
                        </div>
                    </div>                        
                </div>  
                {errors.radio && <p>{errors.radio.message}</p>}                  
            </div>
            <div className='form_fields'>
                <label htmlFor='select_ticket'>Number of Tickets</label>
                <select {...register("option", { required: "Please select an option" })} name='option' id='select_ticket'>
                    <option value="">Select...</option> 
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                {errors.option && <p>{errors.option.message}</p>}
            </div>
            <div className='form_fields_buttons'>
                <FormButton 
                    background="transparent"
                    color="#24A0B5" 
                    text="Cancel" 
                    handleClick={handlePreviousStep} 
                />
                <FormButton 
                    background="#24A0B5" 
                    color="#FFFFFF" 
                    text="Next" 
                    handleClick={handleSubmit((data) => {
                        console.log("Form Data:", data);
                        handleNextStep();} )}
                />
            </div>
        </fieldset>        
    </>    
  )
}

export default SelectionForm