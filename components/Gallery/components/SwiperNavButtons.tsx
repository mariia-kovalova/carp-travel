'use client';

import { useSwiper } from 'swiper/react';

import info from '@/data/gallery.data';

const { buttons } = info;

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div
      className="swiper-nav-btns relative z-50 
                flex items-center justify-center gap-[300px] mt-[-28px]
                desktop:gap-[500px] desktop:mt-[-38px]"
    >
      <button
        className="text-[25px] font-thin uppercase p-[4px] transition-colors
                 hover:bg-transparent-white-dark 
                 focus:bg-transparent-white-dark 
                  desktop:text-[33px]"
        aria-label={buttons.back.aria_label}
        onClick={() => swiper.slidePrev()}
      >
        {buttons.back.text}
      </button>
      <button
        className="text-[25px] font-thin uppercase p-[4px] transition-colors
                 hover:bg-transparent-white-dark 
                 focus:bg-transparent-white-dark 
                  desktop:text-[33px]"
        aria-label={buttons.next.aria_label}
        onClick={() => swiper.slideNext()}
      >
        {buttons.next.text}
      </button>
    </div>
  );
};
