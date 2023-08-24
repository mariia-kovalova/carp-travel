'use client';

import { gallery } from '@/constants/links';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { SwiperNavButtons } from './components/SwiperNavButtons';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '@/styles/swiper.css';
import '@/styles/gallery.css';

import img1 from '@/public/images/gallery-photo-1@x1.jpg';
import img2 from '@/public/images/gallery-photo-2@x1.jpg';
import img3 from '@/public/images/gallery-photo-3@x1.jpg';
import Image from 'next/image';

const images = [
  { image: img1, alt: 'gallery 1' },
  { image: img2, alt: 'gallery 2' },
  { image: img3, alt: 'gallery 3' },
  { image: img1, alt: 'gallery 1' },
  { image: img2, alt: 'gallery 2' },
  { image: img3, alt: 'gallery 3' },
];

const images_mobile = [
  { image: img1, alt: 'gallery 1' },
  { image: img2, alt: 'gallery 2' },
  { image: img3, alt: 'gallery 3' },
];

const Gallery = () => {
  return (
    <section className="gallery background-image min-h-screen" id={gallery}>
      <div className="container container-padding">
        <h2 className="section-title mb-[24px] tablet:max-desktop:mb-[72px]">
          our <span className="font-medium">gallery</span>
        </h2>
        <ul className="flex flex-col gap-[24px] tablet:hidden">
          {images_mobile.map(({ image, alt }) => (
            <li key={image.src}>
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
            {images.map(({ image, alt }) => (
              <SwiperSlide key={image.src}>
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
