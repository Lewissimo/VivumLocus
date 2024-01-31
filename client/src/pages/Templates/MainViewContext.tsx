import React, { ReactNode, createContext, useState } from 'react'
export enum CurrentAppEnum{
    News = "Aktualności",
    Contact = "Kontakt",
    YourStaff = "Twoje Sprawy",
    ReportCase = "Zgłoś Sprawę",
    Inventory = "Wyposażenie",
    Messages = "Wiadomości",
    documents = "Dokumenty",
    yourCases = "Sprawy w toku",
    calendar = "Kalendarz",
    payments = "Płatności"
  }
  
  interface MainViewInterface{
      setCurrentApp: (CurrentApp: CurrentAppEnum) => void;
      currentApp : CurrentAppEnum | undefined;
      setShowBackArrow: (Element : ReactNode | undefined) => void;
      showBackArrow: ReactNode | undefined; 
  }
  
  export const AppsContext = createContext<MainViewInterface | undefined>(undefined);
  
const MainViewContextProvider = ({children} : {children : ReactNode}) => {
    const [currentApp, setCurrentApp] = useState<CurrentAppEnum | undefined>(undefined);
    const [showBackArrow, setShowBackArrow] = useState<ReactNode | undefined>(undefined);
    const value = {
      setCurrentApp,
      currentApp,
      setShowBackArrow,
      showBackArrow
    }
  return (
    <AppsContext.Provider value={value}>{children}</AppsContext.Provider>
  )
}

export default MainViewContextProvider