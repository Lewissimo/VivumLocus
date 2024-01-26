import React, { useState } from 'react'
export enum tastStateEnum{
    complete,
    inProgress,
    waiting

}
const Case = ({case_id} : {case_id : number}) => {

    const [state, setState] = useState<string | null>(null)

  return (
    <div className="current-cases">
    <input type="checkbox" id={`case_${case_id}`}  className='expand-toggle'/>
    <label htmlFor={`case_${case_id}`} className="expand-label">
    <div className='Title'>
            Zniszczona pralka
        </div>

        <div className='Dates'>
            <div className='start-date'>Data rozpoczęcia: <span>23.04.2013</span></div>
            <div className='state'>Status: <span>W trakcie</span></div>
        </div>
    </label>
    <div className="expanded-content">
            
    </div>
    </div>
  )
}

export default Case