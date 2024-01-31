import React from 'react'

const Adres = ({adres, lastMessage}: {adres: string, lastMessage: string}) => {
  return (
    <div className='Adres'>
        <span>{adres}</span>
        <span>{lastMessage}</span>
    </div>
  )
}

export default Adres