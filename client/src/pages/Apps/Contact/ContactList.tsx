import React, { useContext } from 'react'
import ContactPerson from './ContactPerson'
import { AppsContext, CurrentAppEnum } from '../../Templates/MainViewContext';

const ContactList = () => {

    const apps = useContext(AppsContext);
    const handleOnClick = () => {
        apps?.setCustomTitle('Kamil Lewiński');
        apps?.setShowBackArrow(CurrentAppEnum.Contact);
        apps?.setCurrentApp(CurrentAppEnum.conDescription);
    }
  return (
        <div className='ContactPeopleBox row justify-content-center'>
            <span onClick={handleOnClick} className='col-12 col-sm-6 col-lg-4'><ContactPerson /></span>
            <span onClick={handleOnClick}  className='col-12 col-sm-6 col-lg-4'><ContactPerson /></span>
        </div>
  )
}

export default ContactList