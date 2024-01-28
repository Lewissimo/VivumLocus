import React, { ReactNode, createContext, useState } from 'react'

export enum YourStaffAppEnum{
  Documents,
  Payments,
  ActualCase,
  Calendar
}

interface YourStaffContextInterface{
  appName: YourStaffAppEnum | null,
  setAppName: (name: YourStaffAppEnum | null) => void
}

export const YourStaffContext = createContext<YourStaffContextInterface | undefined>(undefined);

export const YourStaffContextProvider = ({children} : {children: ReactNode}) => {
  
  const [appName, setAppName] = useState<YourStaffAppEnum | null>(null);


  const value = {
    appName,
    setAppName
  }
  
  return (
    <YourStaffContext.Provider value={value}>{children}</YourStaffContext.Provider>
  )
}

export default YourStaffContext