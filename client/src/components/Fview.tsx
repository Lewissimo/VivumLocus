import React, { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';

import Window from './Window';
import News from '../pages/Apps/News/News';
import Contact from '../pages/Apps/Contact/Contact';
import YourStaff from '../pages/Apps/YourStaff/YourStaff';
import ReportCase from '../pages/Apps/ReportCase/ReportCase';
import Inventory from '../pages/Apps/Inventory/Inventory';
import Messages from '../pages/Apps/Messages/Messages';
import SwiperContext from './context/SwiperContext';
import { AppsContext, CurrentAppEnum } from '../pages/Templates/MainViewContext';

SwiperCore.use([Mousewheel]);


const Fview = () => {
  const Apps = useContext(AppsContext);
  const slideContext = useContext(SwiperContext);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        slideContext?.swiper?.slidePrev();
      }
      if (e.key === 'ArrowRight') {
        slideContext?.swiper?.slideNext();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [slideContext?.swiper]);

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
              switch (swiper.activeIndex){
                case 0:
                  Apps?.setCurrentApp(CurrentAppEnum.News);
                  break;
                case 1:
                  Apps?.setCurrentApp(CurrentAppEnum.Contact);
                  break;
                case 2:
                  Apps?.setCurrentApp(CurrentAppEnum.YourStaff);
                  break;
                case 3:
                  Apps?.setCurrentApp(CurrentAppEnum.ReportCase);
                  break;
                case 4:
                  Apps?.setCurrentApp(CurrentAppEnum.Inventory);
                  break;
                case 5:
                  Apps?.setCurrentApp(CurrentAppEnum.Messages);
                  break;

              }
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