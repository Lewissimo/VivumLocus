import React from 'react'
import ContactPerson from './ContactPerson'

const ContactList = () => {
  return (
        <div className='ContactPeopleBox row justify-content-center'>
            <span className='col-12 col-sm-6 col-lg-4'><ContactPerson /></span>
            <span className='col-12 col-sm-6 col-lg-4'><ContactPerson /></span>
        </div>
  )
}

export default ContactList