import React, { useState } from 'react'
import img from '../../../assets/matematyka.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const ContactPerson = () => {
    const [hoverMail, setHoverMail] = useState(false);
    const [hoverPhone, setHoverPhone] = useState(false);
    return (
    <div className='ContactPerson row'>
        <div className='PhotoBox col-12'>
            <img alt='' src={img} width={100}/>
        </div>
        <div className='ContactDataBox row col-12'>
            <span className='col-12'>
                Kamil Lewiński
            </span>
            <span className='col-12'>
                Dozorca Budynku
            </span>
            <div className='contactDataElements'>
                <a href='mailto:kml.lewinski3@gmail.com' onMouseEnter={()=>{setHoverMail(true)}} onMouseLeave={()=>{setHoverMail(false)}} className='col-6'>
                    <div className='contactDataElement'>{hoverMail ? "kml.lewinski3@gmail.com" : <EmailIcon />}</div>
                </a>
                <a href='tel:515135106' className='col-6' onMouseEnter={()=>{setHoverPhone(true)}} onMouseLeave={()=>{setHoverPhone(false)}}>
                <div className='contactDataElement'>{hoverPhone ? <span>515135106</span> : <LocalPhoneIcon/>}</div>
                </a>
            </div>
        </div>

    </div>
)
}

export default ContactPerson
