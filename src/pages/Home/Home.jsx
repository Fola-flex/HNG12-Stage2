import React, { useContext } from 'react';
import { Form} from '../../components/Form';
import { Header } from '../../components';

const Home = () => {    
  return (
    <>
        <Header />
        <div>
            <Form />
        </div>   
    </>
  )
}

export default Home