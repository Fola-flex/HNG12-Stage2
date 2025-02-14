import React, { useContext } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import "./shared/form.css";
import { StepContext } from '../../Context';
import SelectionForm from './SelectionForm/SelectionForm';
import DetailsForm from './DetailsForm/DetailsForm';
import ReadyForm from './ReadyForm/ReadyForm';

const Form = () => {
    const methods = useForm();
    const { step } = useContext(StepContext);

    const onFormSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log("Yes")
    }

    const DisplayFormStep = () => {
        if (step === 0) {
            return <SelectionForm onSubmit={onFormSubmit} />
        } else if (step === 1) {
            return <DetailsForm />
        } else {
            return <ReadyForm />
        }
    }
  return (
    <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onFormSubmit)} className='form'>
            <DisplayFormStep />
        </form>
    </FormProvider>
    
  )
}

export default Form