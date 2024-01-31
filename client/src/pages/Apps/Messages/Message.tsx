import React from 'react'

export enum messageType{
    incoming,
    outgoing
}

const Message = ({type, text} : {type: messageType, text: string}) => {
  return (
    <div className='Message' style={type === messageType.incoming ? {justifyContent: "start"} : {justifyContent: "right"}}>
        <div className='Text'style={type === messageType.incoming ? {backgroundColor: "#002828"} : {border: "2px solid rgb(40, 38, 38)"}}>{text}</div>
    </div>
  )
}

export default Message