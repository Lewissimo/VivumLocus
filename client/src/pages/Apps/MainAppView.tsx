import React, { ReactNode } from 'react'

const MainAppView = ({children} : {children : ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default MainAppView
