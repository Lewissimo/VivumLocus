import React, { useContext } from 'react'
import YourStaffContext, { YourStaffAppEnum } from './YourStaffContext';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
const Default = () => {

const yourStaffContext = useContext(YourStaffContext);

  return (
    <div>
        <div className='YourStaffDashboard row'>
            <div className='YourStaffOption col-12 col-sm-6 col-lg-3' onClick={()=>{yourStaffContext?.setAppName(YourStaffAppEnum.Documents)}}>
                <ArticleOutlinedIcon />
                <span>Dokumenty</span>
            </div>
            <div className='YourStaffOption col-12 col-sm-6 col-lg-3' onClick={()=>{yourStaffContext?.setAppName(YourStaffAppEnum.ActualCase)}}>
                <ScheduleOutlinedIcon />
                <span>Sprawy w toku</span>
            </div>
            <div className='YourStaffOption col-12 col-sm-6 col-lg-3' onClick={()=>{yourStaffContext?.setAppName(YourStaffAppEnum.Calendar)}}>
                <CalendarMonthOutlinedIcon />
                <span>Kalendarz</span>
            </div>
            <div className='YourStaffOption col-12 col-sm-6 col-lg-3' onClick={()=>{yourStaffContext?.setAppName(YourStaffAppEnum.Payments)}}>
                <PaymentsOutlinedIcon />
                <span>Płatności</span>
            </div>
        </div>
    </div>
  )
}

export default Default