import React, { ReactNode, createContext, useState } from 'react'
import EmployeeDescription from './EmployeeDescription';


interface ContextInterface {
  loadDescription: (person: string) => ReactNode,
  unLoadDescription: () => void,
  isDescriptionOn: boolean
}


export const ContactContext = createContext<ContextInterface | undefined>(undefined);



export const ContactContextProvider = ({children} : {children: ReactNode}) => {
  const [isDescriptionOn, setIsDescriptionOn] = useState(false);
  
  const loadDescription = (person: string): ReactNode  => {
    setIsDescriptionOn(true);
    return (<EmployeeDescription  />)
  }
  
  const unLoadDescription = () => {
    setIsDescriptionOn(false);
  }
  
  
  const value = {
    loadDescription,
    unLoadDescription,
    isDescriptionOn
  }
  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  )
}

export default ContactContext