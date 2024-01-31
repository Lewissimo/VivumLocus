import React, { useContext, useEffect, useState } from 'react'

import './YourStaff.scss';
import YourStaffContext, { YourStaffAppEnum } from './YourStaffContext';
import Default from './Default';
import Documents from './DocumentsApp/Documents';
import CurrentCases from './CurrentCasesApp/CurrentCases';
import Calendar from './CalendarApp/Calendar';
import Payments from './PaymentsApp/Payments';
import MainView from '../../Templates/MainView';
import { AppsContext, CurrentAppEnum } from '../../Templates/MainViewContext';
const YourStaff = () => {
  const [header, setHeader] = useState<string>('Twoje sprawy')
  const [actualComponent, setActualComponent] = useState(<Default />)
  const yourStaffContext = useContext(YourStaffContext);
  const Apps = useContext(AppsContext);

 
  useEffect(()=>{
    switch(Apps?.currentApp){
      case CurrentAppEnum.documents:
        setActualComponent(<Documents />);
        break;
      case CurrentAppEnum.yourCases:
        setActualComponent(<CurrentCases />);
        break;
      case CurrentAppEnum.calendar:
        setActualComponent(<Calendar />);
        break;
      case CurrentAppEnum.payments:
        setActualComponent(<Payments />);
        break;
      default:
        setActualComponent(<Default />);
        break;
    };
  },[Apps?.currentApp]);
  
  
  



  return (
    <MainView>
        <div className='YourStaffDashboardBox'>
          {actualComponent}
        </div>
    </MainView>
  )
}

export default YourStaff
