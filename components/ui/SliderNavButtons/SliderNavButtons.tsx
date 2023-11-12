'use client';

import { useSwiper } from 'swiper/react';
import { SliderNavButton } from '../SliderNavButton';
import data from '@/data/swiper.data.json';

const { back, next } = data.buttons;

export const SliderNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="relative z-50 mt-[-24px] flex items-center justify-center gap-[300px] xl:mt-[-26px] xl:gap-[500px]">
      <SliderNavButton onClick={() => swiper.slidePrev()}>
        {back}
      </SliderNavButton>
      <SliderNavButton onClick={() => swiper.slideNext()}>
        {next}
      </SliderNavButton>
    </div>
  );
};
