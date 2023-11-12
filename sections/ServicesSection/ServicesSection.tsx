'use client';

import { useState } from 'react';
import classNames from 'classnames';

import { Slider } from '@/components/ui/Slider';
import { ServicesSlide } from '@/components/ui/ServicesSlide';
import { ServicesTitle } from '@/components/ui/ServicesTitle/ServicesTitle';

import { services } from '@/data/links.data';
import data from '@/data/services.data.json';

const { title, slides } = data;

export const ServicesSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const sectionClasses = classNames('section background-image', [
    `services-${activeSlideIndex + 1}`,
  ]);

  return (
    <section id={services} className={sectionClasses}>
      <div className="container">
        <ServicesTitle
          className="mb-6"
          title={title}
          number={activeSlideIndex + 1}
        />
        <Slider
          id="servises-slider"
          data={slides}
          element={ServicesSlide}
          effect="fade"
          isLoop={true}
          isInteractive={true}
          isPagination={true}
          onPaginationUpdate={setActiveSlideIndex}
        />
      </div>
    </section>
  );
};
