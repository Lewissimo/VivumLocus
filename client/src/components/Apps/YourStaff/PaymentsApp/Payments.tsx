import React, { useEffect, useState } from 'react'
import AppWindow from '../AppWindow'

export enum PayedStatus{
  notPayed,
  waiting,
  confirmed
}

const Payments = () => {
  const [state, setState] = useState<PayedStatus | null>(null);

  useEffect(()=>{
    setState(PayedStatus.notPayed);
  }, [])
  
  const handleOnClick = () => {
    
  }

  return (
    <AppWindow>
      <div>Płatności proszę uiścić na numer konta: <span className='accountNumber'>2390 4812 0960 1098 2304</span></div>
      <button onClick={handleOnClick}>Dokonałem płatności</button>
    </AppWindow>
  )
}

export default Payments