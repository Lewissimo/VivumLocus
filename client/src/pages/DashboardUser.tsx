import React from 'react'
import '../components/styles/AppBox.scss'
import Options from '../components/Options'
import Window from '../components/Window'
import Fview from '../components/Fview'
const DashboardUser = () => {
  return (
    <div className='Dashboard'>
        <nav className='MainNav'>
            <span>Wyloguj</span>
        </nav>
        <div className='Content'>
          <Fview />
        </div>
        <div className='Options'>
          <Options />
        </div>
    </div>
  )
}

export default DashboardUser
