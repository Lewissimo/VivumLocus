import React from 'react'
import ContactPerson from './ContactPerson'
import './contact.scss'
const Contact = () => {
  return (
    <div className='ContactComponentBox'>
      <h2>Kontakt</h2>
      <ContactPerson />
      <ContactPerson />
      <ContactPerson />
      <ContactPerson />
    </div>
  )
}

export default Contact
