'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import LINKS from '@/constants/links';
import info from '@/data/gallery.data';

import { SwiperNavButtons } from './components/SwiperNavButtons';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '@/styles/swiper-navigation.css';
import '@/styles/gallery.css';

const { images, images_mobile } = info;

const Gallery = () => (
  <section id={LINKS.gallery} className="gallery background-image min-h-screen">
    <div className="container container-padding">
      <h2 className="section-title mb-[24px] tablet:mb-[72px]">
        our <span className="font-medium">gallery</span>
      </h2>
      <ul className="flex flex-col gap-[24px] tablet:hidden">
        {images_mobile.map(({ image, alt }) => (
          <li key={`${image.src}-mobile`}>
            <Image src={image} alt={alt} />
          </li>
        ))}
      </ul>
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
          {images.map(({ image, alt }, i) => (
            <SwiperSlide key={`${image.src}-${i}`}>
              <div className="w-fit mx-auto">
                <Image src={image} alt={alt} width="411" />
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </div>
  </section>
);

export default Gallery;
