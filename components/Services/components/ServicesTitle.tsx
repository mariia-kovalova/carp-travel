import { FC } from 'react';

interface IProps {
  number: number;
}

const ServicesTitle: FC<IProps> = ({ number }) => {
  return (
    <div
      className="flex flex-col gap-[18px] mb-[11px]
                tablet:flex-row tablet:gap-[170px] tablet:items-center tablet:mb-[36px]
                desktop:mb-[20px]"
    >
      <h2 className="section-title">
        we <span className="font-medium">offer</span>
      </h2>
      <p
        className="self-end text-[43px] font-thin 
                    tablet:self-auto tablet:text-[67px] tablet:leading-[78px]
                    desktop:text-[98px] desktop:leading-5"
      >
        0{number}/
        <span className="text-transparent-white-light-accent">05</span>
      </p>
    </div>
  );
};

export default ServicesTitle;
