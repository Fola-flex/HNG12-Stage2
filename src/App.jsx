import React from "react";
import Header from "./components/Header/Header";
import { StepProvider } from "./Context";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
        <StepProvider>
            <Home />
        </StepProvider>        
    </>    
  )
}

export default App
