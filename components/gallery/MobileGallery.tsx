import Image from 'next/image';

import info from '@/data/gallery.data';

const MobileGallery = () => (
  <ul className="flex flex-col gap-[24px] tablet:hidden">
    {info.images_mobile.map(({ image, alt }) => (
      <li key={`${image.src}-mobile`}>
        <Image src={image} alt={alt} />
      </li>
    ))}
  </ul>
);

export default MobileGallery;
