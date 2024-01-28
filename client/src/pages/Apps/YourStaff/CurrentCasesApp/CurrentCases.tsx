import React, { useState } from 'react'
import AppWindow from '../AppWindow'
import './CurrentCases.scss'
import SwiperCore from 'swiper';

import Case from './Case'
import { Swiper, SwiperSlide } from 'swiper/react'
const CurrentCases = () => {
  const [state, setState] = useState<SwiperCore | undefined>(undefined);
  const [page, setPage] = useState(0);
  const handleSwiper0 = () => {
    state?.slideTo(0);
    setPage(0);
  }
  const handleSwiper1 = () => {
    state?.slideTo(1);
    setPage(1);
  }
  return (
    <AppWindow>

      <h2>Sprawy w toku</h2>
      
      <nav>
      <div onClick={handleSwiper0} style={{ color: !page ? 'gold' : 'inherit' }}>
          Zadania otwarte
        </div>
        <div onClick={handleSwiper1} style={{ color: page ? 'gold' : 'inherit' }}>
          Zadania zamknięte
        </div>
      </nav>
      <div className='SwiperBox'>
        <Swiper
              onSwiper={(swiper: SwiperCore) => setState(swiper)}
              spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <Case case_id={1234} />
            </SwiperSlide>
            <SwiperSlide>
              <Case case_id={1244}/>
              <Case case_id={1334}/>
              <Case case_id={112234}/>
            </SwiperSlide>
          </Swiper>
      </div>
    </AppWindow>
  )
}

export default CurrentCases