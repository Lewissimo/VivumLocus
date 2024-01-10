import React, { ReactNode }from 'react'
import './styles/AppBox.scss'
const Window = ({children}: {children: ReactNode}) => {
  return (
    <div className='Window_'>
        {children}
    </div>
  )
}

export default Window
