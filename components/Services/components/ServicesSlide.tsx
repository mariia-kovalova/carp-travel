import { FC } from 'react';
import ServicesTitle from './ServicesTitle';
import ServicesDescription from './ServicesDescription';

interface IProps {
  number: number;
  alt: string;
  call: string;
  description: string;
}

const ServicesSlide: FC<IProps> = ({ number, alt, call, description }) => {
  return (
    <div className={`service-${number} background-image min-h-screen`}>
      <div className="container py-[55px] tablet:py-[64px] desktop:py-[104px]">
        <ServicesTitle number={number} />
        <ServicesDescription
          number={number}
          alt={alt}
          call={call}
          description={description}
        />
      </div>
    </div>
  );
};

export default ServicesSlide;
