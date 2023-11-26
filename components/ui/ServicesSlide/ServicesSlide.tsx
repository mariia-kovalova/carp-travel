import Image from 'next/image';
import { ServicesSlideProps } from './types';

export const ServicesSlide: React.FC<ServicesSlideProps> = ({
  text,
  comment,
  image: { src, alt },
}) => (
  <div className="relative flex h-[185vw] flex-col justify-between gap-5 md:h-[378px] md:flex-row md:items-end xl:h-[429px] smOnly:max-h-[680px]">
    <div className="h-[66vw] w-full sm:h-[316px] md:h-full md:w-[463px] xl:w-[607px]">
      <Image
        className="h-full w-full object-cover object-center"
        src={src}
        alt={alt}
        width={607}
        height={429}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
      />
    </div>
    <p
      className="comment absolute top-[69vw] text-xs font-extralight leading-6 tracking-[2.4px] 
      sm:top-[330px] md:left-[484px] md:top-[196px] md:text-left xl:left-[940px] smOnly:right-0"
    >
      {comment}
    </p>
    <p className="section-text md:w-[220px] md:text-justify xl:w-[293px] mdOnly:text-[13px] mdOnly:leading-5">
      {text}
    </p>
  </div>
);
