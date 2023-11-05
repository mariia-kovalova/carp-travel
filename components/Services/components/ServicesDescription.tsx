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
  <div
    className="flex flex-col gap-[12px]
                      md:flex-row md:gap-[20px]
                      xl:justify-between"
  >
    <div className="w-[280px] md:w-[463px] xl:w-[607px]">
      <ServicesPicture number={number} alt={alt} />
    </div>
    <div
      className="max-xl:h-[166px] flex flex-col justify-between  
                md:w-[221px] md:self-end xl:w-[293px]
                smOnly:h-[362px]"
    >
      <p
        className="text-right text-xs leading-[24px] tracking-[2.4px] 
                    md:text-left
                    xl:hidden"
      >
        {call}
      </p>
      <p className="section-text md:text-justify mdOnly:text-[13px]">
        {description}
      </p>
    </div>
  </div>
);

export default ServicesDescription;
