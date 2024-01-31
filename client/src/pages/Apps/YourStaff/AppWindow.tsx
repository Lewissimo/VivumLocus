import React, { ReactNode, useContext } from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import YourStaffContext, { YourStaffAppEnum } from './YourStaffContext';
const AppWindow = ({children}: {children: ReactNode}) => {
    const yourStaffContext = useContext(YourStaffContext);

  return (
    <div className='AppWindow'>
        {children}
    </div>
  )
}

export default AppWindow