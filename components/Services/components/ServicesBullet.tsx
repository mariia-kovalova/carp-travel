import { FC } from 'react';

interface IProps {
  className: string;
  alt: string;
  call: string;
}

const ServicesBullet: FC<IProps> = ({ className, alt, call }) => {
  return (
    <div className={className}>
      <button
        className="w-[170px] text-[20px] font-extralight leading-[17px] text-left uppercase opacity-50
                      transition-all hover:opacity-100 hover:translate-x-[14px] focus:opacity-100 focus:translate-x-[14px]
                      tablet:w-[220px] tablet:text-[22px] tablet:leading-[18px]
                      desktop:w-[238px] desktop:text-[28px] desktop:leading-[24px]"
      >
        {alt}
      </button>
      <p
        className="call transition-opacity max-desktop:hidden font-thin
                        text-[12px] leading-[24px] tracking-[2.4px]"
      >
        {call}
      </p>
    </div>
  );
};

export default ServicesBullet;
