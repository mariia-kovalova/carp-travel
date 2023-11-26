import Image from 'next/image';
import { GallerySlideProps } from './types';

export const GallerySlide: React.FC<GallerySlideProps> = ({ src, alt }) => (
  <div className="h-[58vw] w-full sm:h-[278px] md:h-[160px] md:w-[250px] xl:h-[292px] xl:w-[411px]">
    <Image
      className="h-full w-full object-cover object-center"
      src={src}
      alt={alt}
      width={606}
      height={429}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
    />
  </div>
);
