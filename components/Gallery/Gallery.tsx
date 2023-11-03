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
    <div className="container-padding container">
      <h2 className="section-title md:mb-[72px] mb-[24px]">
        our <span className="font-medium">gallery</span>
      </h2>
      <ul className="md:hidden flex flex-col gap-[24px]">
        {images_mobile.map(({ image, alt }) => (
          <li key={`${image.src}-mobile`}>
            <Image src={image} alt={alt} />
          </li>
        ))}
      </ul>
      <div className="smOnly:hidden">
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
              <div className="mx-auto w-fit">
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
