'use client';

import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div
      className="swiper-nav-btns flex items-center justify-center gap-[300px] mt-[-23px]
                  desktop:gap-[500px]"
    >
      <button
        className="text-[25px] font-thin uppercase desktop:text-[33px]"
        onClick={() => swiper.slidePrev()}
      >
        back
      </button>
      <button
        className="text-[25px] font-thin uppercase desktop:text-[33px]"
        onClick={() => swiper.slideNext()}
      >
        next
      </button>
    </div>
  );
};
