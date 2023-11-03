'use client';

import { useSwiper } from 'swiper/react';

import info from '@/data/gallery.data';

const { buttons } = info;

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div
      className="swiper-nav-btns xl:gap-[500px] xl:mt-[-38px] 
                relative z-50 mt-[-28px] flex items-center
                justify-center gap-[300px]"
    >
      <button
        className="base-btn xl:text-[33px] text-[25px] font-thin"
        aria-label={buttons.back.aria_label}
        onClick={() => swiper.slidePrev()}
      >
        {buttons.back.text}
      </button>
      <button
        className="base-btn xl:text-[33px] text-[25px] font-thin"
        aria-label={buttons.next.aria_label}
        onClick={() => swiper.slideNext()}
      >
        {buttons.next.text}
      </button>
    </div>
  );
};
