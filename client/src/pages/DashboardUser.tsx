import React from 'react'
import Options from '../components/Options'
import Window from '../components/Window'
import Fview from '../components/Fview'
import '../components/styles/AppBox.scss'
const DashboardUser = () => {
  return (
    <div className='Dashboard'>
        <nav className='MainNav'>
            <span>Wyloguj</span>
        </nav>
        <div className='Options'>
          <Options />
        </div>
        <div className='Content'>
          <Fview />
        </div>
    </div>
  )
}

export default DashboardUser
