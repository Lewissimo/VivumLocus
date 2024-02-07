import React, { ReactNode, useContext, useState } from 'react'
import ContactPerson from './ContactPerson'
import './contact.scss'
import MainView from '../../Templates/MainView'
import ContactList from './ContactList'
import EmployeeDescription from './EmployeeDescription'
import { AppsContext, CurrentAppEnum } from '../../Templates/MainViewContext'
const Contact = () => {
  const apps = useContext(AppsContext);
  return (
    <MainView>
      <div className='ContactComponentBox'>
        {apps?.currentApp === CurrentAppEnum.conDescription ? <EmployeeDescription /> : <ContactList />  }
      </div>
    </MainView>
  )
}

export default Contact
