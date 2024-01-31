import React from 'react'
import MainView from '../../Templates/MainView'
import Object from './Object'

const Inventory = () => {
  
  return (
    <MainView>
      <div className='Inventory row'>
        <span className='ObjectBox'>
          <Object />
        </span>
        <span className='ObjectBox'>
          <Object />
        </span>
        <span className='ObjectBox'>
          <Object />
        </span>
        <span className='ObjectBox'>
          <Object />
        </span>
        <span className='ObjectBox'>
          <Object />
        </span>
      </div>
    </MainView>
  )
}

export default Inventory
  