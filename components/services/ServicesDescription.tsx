import info from '@/data/services.data.json';

import SectionTitle from '@/components/shared/SectionTitle';
import ServicesPicture from './ServicesPicture';

interface IProps {
  number: number;
  alt: string;
  call: string;
  description: string;
}

const ServicesDescription: React.FC<IProps> = ({
  number,
  alt,
  call,
  description,
}) => (
  <>
    <div
      className="flex flex-col gap-[18px] mb-[11px]
                tablet:flex-row tablet:gap-[170px] tablet:items-center tablet:mb-[36px]
                desktop:mb-[20px]"
    >
      <SectionTitle title={info.title} />
      <p
        className="self-end text-[43px] font-thin 
                    tablet:self-auto tablet:text-[67px] tablet:leading-[78px]
                    desktop:text-[98px] desktop:leading-5"
      >
        0{number}/
        <span className="text-transparent-white-light-accent">05</span>
      </p>
    </div>
    <div
      className="flex flex-col gap-[12px]
              tablet:flex-row tablet:gap-[20px] desktop:justify-between"
    >
      <div className="w-[280px] tablet:w-[463px] desktop:w-[607px]">
        <ServicesPicture number={number} alt={alt} />
      </div>
      <div
        className="flex flex-col justify-between max-tablet:h-[362px]  
                tablet:w-[221px] max-desktop:h-[166px] tablet:self-end
                desktop:w-[293px]"
      >
        <p
          className="text-right text-[12px] font-extralight leading-[24px] tracking-[2.4px]
                    tablet:text-left desktop:hidden"
        >
          {call}
        </p>
        <p className="section-description tablet:text-justify tablet:max-desktop:text-[13px]">
          {description}
        </p>
      </div>
    </div>
  </>
);

export default ServicesDescription;
