import { createContext, useState } from 'react';

const StepContext = createContext({
    step: 0,
    setStep: () => {}
});

const StepProvider = ({ children }) => {
    const [step, setStep] = useState(0);    

    const handleNextStep = () => {
        step === 2 ? setStep(step) : setStep(step + 1);       
    }

    const handlePreviousStep = () => {
        step === 0 ? setStep(step) : setStep(step - 1);
    }

    return (
        <StepContext.Provider value={{ step, setStep, handleNextStep, handlePreviousStep}}>
            {children}
        </StepContext.Provider>
    )
}

export { StepContext, StepProvider };