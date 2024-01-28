import React, { ReactNode, useContext, useState } from 'react'
import img from '../../../assets/matematyka.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ContactInfo, { typeContactInfoEnum } from './ContactInfo';
import ContactContext from './ContactContext';

const ContactPerson = () => {
    const ContactContextValue = useContext(ContactContext);
    const [hoverMail, setHoverMail] = useState(false);
    const [hoverPhone, setHoverPhone] = useState(false);
    return (
        <div className='ContactPerson row'>
        <span className='row col-12 justify-content-center Person' onClick={()=>{
            ContactContextValue?.loadDescription('data');
        }}>
            <div className='PhotoBox col-12'>
                <img alt='' src={img} width={100}/>
            </div>
            <span className='col-12'>
                Kamil Lewiński
            </span>
            <span className='col-12'>
                Dozorca Budynku
            </span>
        </span>
        <div className='ContactDataBox row col-12'>
            <div className='contactDataElements'>
                <div onMouseEnter={()=>{setHoverMail(true)}} onMouseLeave={()=>{setHoverMail(false)}} className='col-6'>
                    <div className='contactDataElement'>{hoverMail ? <span className='ContactInfo'><ContactInfo data='kml.lewinski@gmail.com' typeContactInfo={typeContactInfoEnum.email}/></span> : <span><EmailIcon /></span>}</div>
                </div>
                <div className='col-6' onMouseEnter={()=>{setHoverPhone(true)}} onMouseLeave={()=>{setHoverPhone(false)}}>
                <div className='contactDataElement'>{hoverPhone ? <span className='ContactInfo'><ContactInfo data='515135106' typeContactInfo={typeContactInfoEnum.phone}/></span> : <span><LocalPhoneIcon/></span>}</div>
                </div>
            </div>
        </div>

    </div>

)
}

export default ContactPerson
