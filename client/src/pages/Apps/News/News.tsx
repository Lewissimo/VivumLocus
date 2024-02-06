import React, { useContext } from 'react'
import Window from '../../../components/Window';
import NewsMessage from './NewsMessage';
import './News.scss';
import MainView from '../../Templates/MainView';
import { NewsStateContext } from '../Context/NewsLoader/NewsContext';

const News = () => {
  const NewsState = useContext(NewsStateContext);
  return (
    <MainView>
      <div className='News'>
        <div className='MessBox'>
          <div>
            {
              NewsState?.map((element, index) => (
                <NewsMessage key={index} news={element} />
              ))
            }
          </div>
        </div>
      </div>
    </MainView>
  )
}

export default News
