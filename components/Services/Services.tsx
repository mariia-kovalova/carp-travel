'use client';

import * as ReactDOMServer from 'react-dom/server';
import { useState } from 'react';
import LINKS from '@/constants/links';
import { slides } from '@/data/slider.data';
import { EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ServicesBullet from './components/ServicesBullet';
import ServicesTitle from './components/ServicesTitle';
import ServicesDescription from './components/ServicesDescription';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '@/styles/swiper.css';
import '@/styles/services.css';

const pagination = {
  clickable: true,
  renderBullet: (index: number, className: string) =>
    ReactDOMServer.renderToStaticMarkup(
      <ServicesBullet
        className={className}
        alt={slides[index].alt}
        call={slides[index].call}
      />
    ),
};

const Services = () => {
  const [bgVariant, setBgVariant] = useState<number>(0);

  return (
    <section
      id={LINKS.services}
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
