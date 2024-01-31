import React, { useContext } from 'react'
import ForumIcon from '@mui/icons-material/Forum';
import ChairIcon from '@mui/icons-material/Chair';
import BuildIcon from '@mui/icons-material/Build';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import SwiperContext from '../context/SwiperContext';
const Options = () => {
    const swiperContext = useContext(SwiperContext);
  return (
    <div className='OptionsBox'>


        <div onClick={() => {swiperContext?.swiper?.slideTo(0)}} className={swiperContext?.activeSlide === 0 ? "option active": "option"}>
            <AnnouncementIcon />
            <span>Aktualności</span>
        </div>
        <div onClick={() => {swiperContext?.swiper?.slideTo(1)}} className={swiperContext?.activeSlide === 1 ? "option active": "option"}>
            <PermContactCalendarIcon />
            <span>Kontakt</span>
        </div>
        <div onClick={() => {swiperContext?.swiper?.slideTo(2)}} className={swiperContext?.activeSlide === 2 ? "option active": "option"}>
            <BusinessCenterIcon />
            <span>Twoje Sprawy</span>
        </div>
        <div onClick={() => {swiperContext?.swiper?.slideTo(3)}} className={swiperContext?.activeSlide === 3 ? "option active": "option"}>
            <BuildIcon />
            <span>Zgłoś sprawę</span>
        </div>
        <div onClick={() => {swiperContext?.swiper?.slideTo(4)}} className={swiperContext?.activeSlide === 4 ? "option active": "option"}>
            <ChairIcon />
            <span>Stan mieszkania</span>
        </div>
        <div onClick={() => {swiperContext?.swiper?.slideTo(5)}} className={swiperContext?.activeSlide === 5 ? "option active": "option"}>
            <ForumIcon />
            <span>Wiadomości</span>
        </div>
    </div>
  )
}

export default Options
