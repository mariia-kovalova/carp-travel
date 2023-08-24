'use client';

import * as ReactDOMServer from 'react-dom/server';
import { useState } from 'react';
import { services } from '@/constants/links';
import { slides } from '@/data/slider.data';
import { EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ServicesTitle from './components/ServicesTitle';
import ServicesDescription from './components/ServicesDescription';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '@/styles/swiper.css';
import '@/styles/services.css';

const Services = () => {
  const [bgVariant, setBgVariant] = useState<number>(0);

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return ReactDOMServer.renderToStaticMarkup(
        <div
          className={`${className}
         text-[20px] font-extralight leading-[17px]
         tablet:text-[22px] tablet:leading-[18px]
         desktop:flex gap-[53px] desktop:text-[28px] desktop:leading-[24px]`}
        >
          <p className="uppercase transition-all w-[170px] tablet:w-[220px] desktop:w-[238px]">
            {slides[index].alt}
          </p>
          <p
            className="call transition-opacity max-desktop:hidden font-thin
                        text-[12px] leading-[24px] tracking-[2.4px]"
          >
            {slides[index].call}
          </p>
        </div>
      );
    },
  };

  return (
    <section
      id={services}
      className={`services service-${bgVariant} background-image min-h-screen`}
    >
      <div className="container container-padding">
        <Swiper
          modules={[Pagination, EffectFade]}
          pagination={pagination}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={50}
          slidesPerView={1}
          onPaginationUpdate={swiper => setBgVariant(swiper.activeIndex + 1)}
        >
          {slides.map(({ number, alt, call, description }) => (
            <SwiperSlide key={number}>
              <ServicesTitle number={number} />
              <ServicesDescription
                number={number}
                alt={alt}
                call={call}
                description={description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Services;
