import React, { ReactNode, useState } from 'react'
import ContactPerson from './ContactPerson'
import './contact.scss'
import { ContactContextProvider } from './ContactContext'
const Contact = () => {

  const [description, setDescription] = useState<ReactNode | null>(null);

  return (
      <div className='ContactComponentBox'>
        <h2>Kontakt</h2>
        <div className='ContactPeopleBox row justify-content-center'>
          <span className='col-12 col-sm-6 col-lg-4'><ContactPerson /></span>
          <span className='col-12 col-sm-6 col-lg-4'><ContactPerson /></span>

        </div>
    </div>
  )
}

export default Contact
