import React from 'react'
import { newsLayout } from '../Context/NewsLoader/NewsActions'

const NewsMessage = ({news} : {news: newsLayout}) => {
  
  console.log(typeof news.date); 
  const dateObject = new Date(news.date)

  const day = String(dateObject.getDate()).padStart(2, '0');
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const year = dateObject.getFullYear();
  return (
    <>
        <li className='row'>
            <h3 className='col-6'>{news.title}</h3>
            <div className='col-6'>Data: <span className='date'>{`${day}.${month}.${year}`}</span></div>
            <p className='col-12'>
              {news.content}
            </p>
        <hr/>
        </li>

    </>
  )
}

export default NewsMessage
