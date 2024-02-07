import React, { useContext } from 'react'
import YourStaffContext, { YourStaffAppEnum } from './YourStaffContext';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { AppsContext, CurrentAppEnum } from '../../Templates/MainViewContext';
const Default = () => {

const Apps = useContext(AppsContext);

  return (
    <div className='boxys'>
        <div className='YourStaffDashboard row'>
            <div className='YourStaffOption col-12 col-sm-6 col-lg-3' onClick={()=>{Apps?.setCurrentApp(CurrentAppEnum.documents); Apps?.setShowBackArrow(CurrentAppEnum.YourStaff)}}>
                <ArticleOutlinedIcon />
                <span>Dokumenty</span>
            </div>
            <div className='YourStaffOption col-12 col-sm-6 col-lg-3' onClick={()=>{Apps?.setCurrentApp(CurrentAppEnum.yourCases); Apps?.setShowBackArrow(CurrentAppEnum.YourStaff)}}>
                <ScheduleOutlinedIcon />
                <span>Sprawy w toku</span>
            </div>
            <div className='YourStaffOption col-12 col-sm-6 col-lg-3' onClick={()=>{Apps?.setCurrentApp(CurrentAppEnum.calendar); Apps?.setShowBackArrow(CurrentAppEnum.YourStaff)}}>
                <CalendarMonthOutlinedIcon />
                <span>Kalendarz</span>
            </div>
            <div className='YourStaffOption col-12 col-sm-6 col-lg-3' onClick={()=>{Apps?.setCurrentApp(CurrentAppEnum.payments); Apps?.setShowBackArrow(CurrentAppEnum.YourStaff)}}>
                <PaymentsOutlinedIcon />
                <span>Płatności</span>
            </div>
        </div>
    </div>
  )
}

export default Default