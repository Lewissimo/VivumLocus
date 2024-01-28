import React, { ReactNode } from 'react'

const MainView = ({children} : {children : ReactNode}) => {
  return (
    <div className='MainView'>
    {children}
    </div>
  )
}

export default MainView
