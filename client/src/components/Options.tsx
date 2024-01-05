import React from 'react'
import ForumIcon from '@mui/icons-material/Forum';
import ChairIcon from '@mui/icons-material/Chair';
import BuildIcon from '@mui/icons-material/Build';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

const Options = () => {
  return (
    <div className='OptionsBox'>


        <div className='option'>

            <PermContactCalendarIcon />
            <span>Kontakt</span>
        </div>
        <div className='option'>
            <BusinessCenterIcon />
            <span>Twoje Sprawy</span>
        </div>
        <div className='option'>
            <BuildIcon />
            <span>Zgłoś sprawę</span>
        </div>
        <div className='option'>
            <ChairIcon />
            <span>Stan mieszkania</span>
        </div>
        <div className='option'>
            <ForumIcon />
            <span>Wiadomości</span>
        </div>
    </div>
  )
}

export default Options
