'use client';

import { SectionTitle } from '@/components/ui/SectionTitle';
import { Slider } from '@/components/ui/Slider';
import { GallerySlide } from '@/components/ui/GallerySlide';

import { gallery } from '@/data/links.data';
import data from '@/data/gallery.data.json';
import { images, images_mobile } from '@/data/gallery.data';

const { title } = data;

export const GallerySection = () => (
  <section id={gallery} className="section gallery background-image">
    <div className="container">
      <SectionTitle title={title} className="mb-6 md:mb-20" />
      <div className="flex flex-col gap-6 md:hidden">
        {images_mobile.map((image, index) => (
          <GallerySlide key={index} {...image} />
        ))}
      </div>

      <div className="smOnly:hidden">
        <Slider
          id="gallery"
          data={images}
          element={GallerySlide}
          effect="coverflow"
          slidesPerView={3}
          isAutoplay={true}
          isLoop={true}
          isInteractive={true}
          isNavigation={true}
        />
      </div>
    </div>
  </section>
);
