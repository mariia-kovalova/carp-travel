'use client';

import * as ReactDOMServer from 'react-dom/server';
import { slides } from '@/data/slider.data';
import { EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '@/styles/swiper.css';
import '@/styles/services.css';
import ServicesSlide from './components/ServicesSlide';
import { services } from '@/constants/links';

const Services = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return ReactDOMServer.renderToStaticMarkup(
        <div
          className={`${className}
         text-[20px] font-extralight leading-[17px]

         desktop:flex desktop:gap-[53px]`}
        >
          <p className="w-[170px] tablet:w-[220px] uppercase">
            {slides[index].alt}
          </p>
          <p className="call max-desktop:hidden font-thin">
            {slides[index].call}
          </p>
        </div>
      );
    },
  };

  return (
    <section className="services" id={services}>
      <Swiper
        modules={[Pagination, EffectFade]}
        pagination={pagination}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {slides.map(({ number, alt, call, description }) => (
          <SwiperSlide key={number}>
            <ServicesSlide
              number={number}
              alt={alt}
              call={call}
              description={description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Services;
