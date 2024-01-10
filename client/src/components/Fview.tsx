import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Window from './Window'
import News from './News';

import 'bootstrap/dist/css/bootstrap.min.css';

const Fview = () => {
  return (
    <div className='Fview row'>
        
        <div className='contactFview'>
            
            <Window>
                <MessageIcon />
            </Window>
            <Window>
                <LocalPhoneIcon />
            </Window>
        </div>
        <div className='NewsBox'>
            
            <Window>
                <News />
            </Window>
        </div>
    </div>
  )
}

export default Fview
