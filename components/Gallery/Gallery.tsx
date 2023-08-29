'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { SwiperNavButtons } from './components/SwiperNavButtons';
import LINKS from '@/constants/links';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '@/styles/swiper.css';
import '@/styles/gallery.css';
import { images, images_mobile } from '@/data/gallery.data';

const Gallery = () => {
  return (
    <section
      id={LINKS.gallery}
      className="gallery background-image min-h-screen"
    >
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
                  <Image src={image} alt={alt} width="606" />
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
