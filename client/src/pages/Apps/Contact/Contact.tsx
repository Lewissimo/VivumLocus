import React, { ReactNode, useState } from 'react'
import ContactPerson from './ContactPerson'
import './contact.scss'
import { ContactContextProvider } from './ContactContext'
import MainView from '../../Templates/MainView'
import ContactList from './ContactList'
const Contact = () => {
const [person, setPerson] = useState<string | null>();
  return (
    <MainView>
      <div className='ContactComponentBox'>
        <ContactList />
      </div>
    </MainView>
  )
}

export default Contact
