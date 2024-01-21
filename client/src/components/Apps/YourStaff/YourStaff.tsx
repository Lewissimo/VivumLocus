import React, { useContext, useEffect, useState } from 'react'

import './YourStaff.scss';
import YourStaffContext, { YourStaffAppEnum } from './YourStaffContext';
import Default from './Default';
import Documents from './DocumentsApp/Documents';
import CurrentCases from './CurrentCasesApp/CurrentCases';
import Calendar from './CalendarApp/Calendar';
import Payments from './PaymentsApp/Payments';
const YourStaff = () => {
  const [header, setHeader] = useState<string>('Twoje sprawy')
  const [actualComponent, setActualComponent] = useState(<Default />)
  const yourStaffContext = useContext(YourStaffContext);

  useEffect(()=>{
    switch(yourStaffContext?.appName){
      case YourStaffAppEnum.Documents:
        setActualComponent(<Documents />);
        setHeader('Dokumenty');
        break;
      case YourStaffAppEnum.ActualCase:
        setActualComponent(<CurrentCases />);
        setHeader('Sprawy w toku');
        break;
      case YourStaffAppEnum.Calendar:
        setActualComponent(<Calendar />);
        setHeader('Kalendarz');
        break;
      case YourStaffAppEnum.Payments:
        setActualComponent(<Payments />);
        setHeader('Płatności');
        break;
      default:
        setActualComponent(<Default />);
        setHeader('Twoje Sprawy');
        break;
    };
  },[yourStaffContext?.appName])
  
  
  return (
    <div>
        <h2>{header}</h2>
        <div className='YourStaffDashboardBox'>
          {actualComponent}
        </div>
    </div>
  )
}

export default YourStaff
