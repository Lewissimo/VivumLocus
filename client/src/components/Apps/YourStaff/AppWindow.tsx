import React, { ReactNode, useContext } from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import YourStaffContext, { YourStaffAppEnum } from './YourStaffContext';
const AppWindow = ({children}: {children: ReactNode}) => {
    const yourStaffContext = useContext(YourStaffContext);

  return (
    <div className='AppWindow'>
        <div className='GoBack' onClick={()=>{yourStaffContext?.setAppName(null)}}><ArrowBackIosOutlinedIcon /></div>
        {children}
    </div>
  )
}

export default AppWindow