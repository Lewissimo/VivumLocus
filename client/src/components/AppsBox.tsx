import React, { useState } from 'react'

export enum appsNames{
  inventory,
  contact,
  messages,
  reportCase,
  yourStaff
}

const AppsBox = () => {
  const [onApps, setOnApps] = useState<appsNames[]>([])


  return (
    <div className='AppsBox row'>
            
        <div className='AppBx col-12 col-lg-6'>
            
        </div>
        <div className='AppBx col-12 col-lg-6'>

        </div>
    </div>
  )
}

export default AppsBox
