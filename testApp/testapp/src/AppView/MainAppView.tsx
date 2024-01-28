import React, { ReactNode } from 'react'
import './MainAppView.scss'
const MainAppView = ({children} : {children : ReactNode}) => {
  return (
    <div className='MainAppView'>
      {children}
    </div>
  )
}

export default MainAppView
