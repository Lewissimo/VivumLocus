import React from 'react'
import Adres from './Adres'

const AdressesBoard = () => {
  return (
    <div className='AdressesBoard'>
        <div className='MainAdreses'>
            <Adres adres='Wybickiego 3/16' lastMessage='hahaha faktycznie'/>
            <Adres adres='Wybickiego 3/16' lastMessage='hahaha faktycznie'/>
        </div>
        <div className='casualAdreses'>
            <Adres adres='Wybickiego 3/16' lastMessage='hahaha faktycznie'/>
            <Adres adres='Wybickiego 3/16' lastMessage='hahaha faktycznie'/>
            <Adres adres='Wybickiego 3/16' lastMessage='hahaha faktycznie'/>
            <Adres adres='Wybickiego 3/16' lastMessage='hahaha faktycznie'/>
            <Adres adres='Wybickiego 3/16' lastMessage='hahaha faktycznie'/>
            <Adres adres='Wybickiego 3/16' lastMessage='hahaha faktycznie'/>
            <Adres adres='Wybickiego 3/16' lastMessage='hahaha faktycznie'/>
            <Adres adres='Wybickiego 3/16' lastMessage='hahaha faktycznie'/>
            
        </div>
    </div>
  )
}

export default AdressesBoard