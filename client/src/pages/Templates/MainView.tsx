import React, { ReactNode, createContext, useContext, useState } from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { AppsContext, CurrentAppEnum } from './MainViewContext';
import Default from '../Apps/YourStaff/Default';
import './MainView.scss'


const MainView = ({children} : {children : ReactNode}) => {
  const Apps = useContext(AppsContext);
  console.log(Apps?.currentApp)
  return (
      <div className='MainView'>
        <div className='Header'>{
        Apps?.showBackArrow 
        ? 
        <div className='GoBack' onClick={()=>{ Apps.setCurrentApp(Apps.showBackArrow as CurrentAppEnum); Apps.setShowBackArrow(undefined);}}><ArrowBackIosOutlinedIcon/></div> 
        : null}
        <h2 className='AppName'>{Apps?.currentApp !== "" ?  Apps?.currentApp : Apps.customTitle}</h2></div>
      {children}
      </div>
  )
}

export default MainView
