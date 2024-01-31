import React from 'react'
import MainView from '../../Templates/MainView'
import AdressesBoard from './AdressesBoard'
import Chat from './Chat'
import './Messages.scss'
const Messages = () => {
  return (
    <MainView>
      <div className='ChatApp'>
        <AdressesBoard />
        <Chat />
      </div>
    </MainView>
  )
}

export default Messages
