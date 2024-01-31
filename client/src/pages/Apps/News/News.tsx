import React from 'react'
import Window from '../../../components/Window';
import NewsMessage from './NewsMessage';
import './News.scss';
import MainView from '../../Templates/MainView';
const News = () => {
  return (
    <MainView>

        <div className='News'>
          <div className='MessBox'>
            <div>

            <NewsMessage />
            <NewsMessage />
            <NewsMessage />
            <NewsMessage />
            <NewsMessage />
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
        </div>
    </MainView>
      

  )
}

export default News
