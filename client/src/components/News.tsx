import React from 'react'
import Window from './Window';
import NewsMessage from './NewsMessage';

const News = () => {
  return (
      <Window>
        <div className='News'>

          <h2>Aktualności</h2>
          <div className='MessBox'>
            <NewsMessage />
            <NewsMessage />
            <NewsMessage />
            <NewsMessage />
            <NewsMessage />
            <NewsMessage />
            <NewsMessage />
            <NewsMessage />
          </div>
        </div>
      
      </Window>

  )
}

export default News
