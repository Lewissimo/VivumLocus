import React from 'react'
import CopyButton from './CopyButton'
export enum typeContactInfoEnum{
    phone,
    email
}

const ContactInfo = ({data, typeContactInfo}: {data: string, typeContactInfo: typeContactInfoEnum}) => {
  return (
    <div className='ContactInfoComponent'>
        <div>{data}</div>
        <a href={typeContactInfo === typeContactInfoEnum.email ? `mailto:${data}` : `tel:${data}`}>{typeContactInfo === typeContactInfoEnum.email ? 'Napisz' : 'Zadzwoń'}</a>
        <CopyButton textToCopy={data}/>
    </div>
  )
}

export default ContactInfo