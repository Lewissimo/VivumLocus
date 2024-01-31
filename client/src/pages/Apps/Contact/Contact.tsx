import React, { ReactNode, useState } from 'react'
import ContactPerson from './ContactPerson'
import './contact.scss'
import { ContactContextProvider } from './ContactContext'
import MainView from '../../Templates/MainView'
const Contact = () => {

  const [description, setDescription] = useState<ReactNode | null>(null);

  return (
    <MainView>
      <div className='ContactComponentBox'>
        <div className='ContactPeopleBox row justify-content-center'>
          <span className='col-12 col-sm-6 col-lg-4'><ContactPerson /></span>
          <span className='col-12 col-sm-6 col-lg-4'><ContactPerson /></span>

        </div>
      </div>
    </MainView>
  )
}

export default Contact
