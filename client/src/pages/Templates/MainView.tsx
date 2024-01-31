import React, { ReactNode, createContext, useContext, useState } from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { AppsContext, CurrentAppEnum } from './MainViewContext';
import Default from '../Apps/YourStaff/Default';
import './MainView.scss'


const MainView = ({children} : {children : ReactNode}) => {
  const Apps = useContext(AppsContext);
  return (
      <div className='MainView'>
        <div className='Header'>{
        Apps?.showBackArrow 
        ? 
        <div className='GoBack' onClick={()=>{Apps.setShowBackArrow(undefined); Apps.setCurrentApp(CurrentAppEnum.YourStaff) }}><ArrowBackIosOutlinedIcon/></div> 
        : null}
        <h2 className='AppName'>{Apps?.currentApp}</h2></div>
      {children}
      </div>
  )
}

export default MainView
