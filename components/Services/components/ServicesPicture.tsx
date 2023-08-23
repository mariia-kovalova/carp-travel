import { FC } from 'react';
import { desktop, min, tablet } from '@/constants/screens';
import Image from 'next/image';

interface IProps {
  number: number;
  alt: string;
}

const ServicesPicture: FC<IProps> = ({ alt, number }) => {
  return (
    <picture>
      <source
        srcSet={`/images/services-photo-${number}@x1.jpg 1x, /images/services-photo-${number}@x2.jpg 2x`}
        media={`(min-width: ${desktop})`}
        sizes="607px"
        type="image/jpeg"
      />
      <source
        srcSet={`/images/services-photo-${number}-tablet@x1.jpg 1x, /images/services-photo-${number}-tablet@x2.jpg 2x`}
        media={`(min-width: ${tablet})`}
        sizes="463px"
        type="image/jpeg"
      />
      <source
        srcSet={`/images/services-photo-${number}-mobile@x1.jpg 1x, /images/services-photo-${number}-mobile@x2.jpg 2x`}
        media={`(min-width: ${min})`}
        sizes="280px"
        type="image/jpeg"
      />
      <Image
        src={`/images/services-photo-${number}@x1.jpg`}
        alt={alt}
        width="607"
        height="429"
      />
    </picture>
  );
};

export default ServicesPicture;
