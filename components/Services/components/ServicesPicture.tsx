import { FC } from 'react';
import Image from 'next/image';

import SCREENS from '@/constants/screens';

const { desktop, min, tablet } = SCREENS;

interface IProps {
  number: number;
  alt: string;
}

const ServicesPicture: FC<IProps> = ({ alt, number }) => {
  return (
    <picture>
      <source
        srcSet={`/images/services/services-photo-${number}@x1.jpg 1x, /images/services/services-photo-${number}@x2.jpg 2x`}
        media={`(min-width: ${desktop})`}
        type="image/jpeg"
      />
      <source
        srcSet={`/images/services/services-photo-${number}-tablet@x1.jpg 1x, /images/services/services-photo-${number}-tablet@x2.jpg 2x`}
        media={`(min-width: ${tablet})`}
        type="image/jpeg"
      />
      <source
        srcSet={`/images/services/services-photo-${number}-mobile@x1.jpg 1x, /images/services/services-photo-${number}-mobile@x2.jpg 2x`}
        media={`(min-width: ${min})`}
        type="image/jpeg"
      />
      <Image
        src={`/images/services/services-photo-${number}@x1.jpg`}
        alt={alt}
        width="607"
        height="429"
      />
    </picture>
  );
};

export default ServicesPicture;
