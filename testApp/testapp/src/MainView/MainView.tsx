import React, { ReactNode } from 'react'
import './MainView.scss'
const MainView = ({children} : {children : ReactNode}) => {
  return (
    <div className='MainView'>
    {children}
    </div>
  )
}

export default MainView
