import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';

import Window from './Window';
import News from './News';
import Contact from './Apps/Contact/Contact';
import YourStaff from './Apps/YourStaff/YourStaff';
import ReportCase from './Apps/ReportCase/ReportCase';
import Inventory from './Apps/Inventory/Inventory';
import Messages from './Apps/Messages/Messages';
import SwiperContext from './context/SwiperContext';

SwiperCore.use([Mousewheel]);


const Fview = () => {
  const slideContext = useContext(SwiperContext);
  

  const [blockedHandle, setBlocHandle] = useState(false);
  const handleMousewheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaX !== 0) { 
      e.preventDefault();
      const deltaX = e.deltaX;

        if (deltaX > 0) {
          slideContext?.swiper?.slideNext();
        } else {
          slideContext?.swiper?.slidePrev();
        }
      }
  };
  const handleOnWheelBlock = (e: React.WheelEvent<HTMLDivElement>) => {
    
    if (!blockedHandle) {
      setBlocHandle(true);
      handleMousewheel(e); 
    setTimeout(() => {
        setBlocHandle(false); 
      }, 200);
    }
  };    

  return (
    <div className='Fview row'>

      <div className='NewsBox' onWheel={handleOnWheelBlock}>
        <Swiper
            onSlideChange={(swiper: SwiperCore)=>{
              slideContext?.setActiveSlide(swiper.activeIndex);
            }}
            onSwiper={(swiper: SwiperCore) => slideContext?.setSwiper(swiper)}
            spaceBetween={50}
          slidesPerView={1}
          mousewheel={false} // Wyłącz domyślną obsługę przewijania Swipera
        >
          <SwiperSlide>
            <Window>
              <News />
            </Window>
          </SwiperSlide>
          <SwiperSlide>
            <Window>
              <Contact />
            </Window>
          </SwiperSlide>
          <SwiperSlide>
            <Window>
              <YourStaff />
            </Window>
          </SwiperSlide>
          <SwiperSlide>
            <Window>
              <ReportCase />
            </Window>
          </SwiperSlide>
          <SwiperSlide>
            <Window>
              <Inventory />
            </Window>
          </SwiperSlide>
          <SwiperSlide>
            <Window>
              <Messages />
            </Window>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Fview;