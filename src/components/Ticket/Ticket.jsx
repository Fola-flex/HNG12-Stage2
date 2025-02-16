import React from 'react';
import { ticket_reg, sec, ticket, b_line} from '../../assets';

const Ticket = ({avatar, type}) => {
  return (
    <div style={{background: `url(${b_line}) ,url(${type}), url(${type}), url(${sec}), url(${avatar}), url(${ticket_reg}), url(${ticket})`, backgroundSize: '2% 89%, 13% 38%, 13% 38%, 14% 100%, 26.1% 75%, 84% 100%, 100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: "98% 48%, 99% 108.5%, 82.1% 0%, 100% 100%, 2.5% 25%, 0%, 0%"}}>        
    </div>
  )
}

export default Ticket