import React, { ReactNode, createContext, useState } from 'react'
import SwiperCore from 'swiper';

interface SwiperContextType {
    activeSlide: number;
    setActiveSlide: (slide: number) => void;
    swiper: SwiperCore | undefined;
    setSwiper: (swiper: SwiperCore) => void;
  }

export const SwiperContext = createContext<SwiperContextType | undefined>(undefined);

export const SwiperContextProvider = ({ children }: { children: ReactNode }) => {
    const [swiper, setSwiper] = useState<SwiperCore | undefined>(undefined);
    const [activeSlide, setActiveSlide] = useState(0);  
const value = {
    activeSlide,
    setActiveSlide,
    swiper,
    setSwiper
} 
return (
    <SwiperContext.Provider value={value}>
        {children}
    </SwiperContext.Provider>
  )
}

export default SwiperContext
