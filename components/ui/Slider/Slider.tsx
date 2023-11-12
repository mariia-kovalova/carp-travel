'use client';

import * as ReactDOMServer from 'react-dom/server';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Pagination,
  EffectFade,
  EffectCoverflow,
} from 'swiper/modules';

import { ServicesBullet } from '../ServicesBullet';
import { SliderNavButtons } from '../SliderNavButtons';
import { SliderProps } from './types';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';

export const Slider: React.FC<SliderProps> = ({
  id,
  data = [],
  element: Element,
  effect = '',
  slidesPerView = 1,
  isInteractive = false,
  isLoop = false,
  isAutoplay = false,
  isNavigation = false,
  isPagination = false,
  onPaginationUpdate,
}) => {
  const pagination = {
    enabled: isPagination,
    clickable: true,
    renderBullet: (index: number, className: string) =>
      ReactDOMServer.renderToStaticMarkup(
        <ServicesBullet className={className} data={data} index={index} />,
      ),
  };

  const handlePagination = (swiper: SwiperCore) => {
    if (onPaginationUpdate) onPaginationUpdate(swiper.activeIndex);
  };

  return (
    <Swiper
      id={id}
      modules={[Autoplay, Pagination, EffectFade, EffectCoverflow]}
      allowTouchMove={isInteractive}
      grabCursor={isInteractive}
      autoplay={isAutoplay ? { disableOnInteraction: false } : false}
      loop={isLoop}
      pagination={pagination}
      onPaginationUpdate={handlePagination}
      slidesPerView={slidesPerView}
      effect={effect}
      fadeEffect={{ crossFade: true }}
      coverflowEffect={{
        rotate: 0,
        scale: 0.5,
      }}
    >
      {data.map((props, index) => (
        <SwiperSlide key={index}>
          <Element {...props} />
        </SwiperSlide>
      ))}
      {isNavigation ? <SliderNavButtons /> : null}
    </Swiper>
  );
};
