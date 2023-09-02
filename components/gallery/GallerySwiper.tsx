'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import info from '@/data/gallery.data';

import { SwiperNavButtons } from './SwiperNavButtons';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '@/styles/swiper-navigation.css';

const GallerySwiper = () => (
  <div className="max-tablet:hidden">
    <Swiper
      modules={[EffectCoverflow]}
      coverflowEffect={{
        depth: 100,
        modifier: 1,
        rotate: 0,
        stretch: 0,
        slideShadows: true,
        scale: 0.5,
      }}
      loop
      effect="coverflow"
      slidesPerView={3}
    >
      {info.images.map(({ image, alt }, i) => (
        <SwiperSlide key={`${image.src}-${i}`}>
          <div className="w-fit mx-auto">
            <Image src={image} alt={alt} width="411" />
          </div>
        </SwiperSlide>
      ))}
      <SwiperNavButtons />
    </Swiper>
  </div>
);

export default GallerySwiper;
