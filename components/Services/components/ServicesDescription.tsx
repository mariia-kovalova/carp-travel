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
    className="xl:justify-between md:flex-row md:gap-[20px]
                      flex flex-col
                      gap-[12px]"
  >
    <div className="xl:w-[607px] md:w-[463px] w-[280px]">
      <ServicesPicture number={number} alt={alt} />
    </div>
    <div
      className="max-xl:h-[166px] xl:w-[293px] smOnly:h-[362px] md:w-[221px]  
                md:self-end flex flex-col
                justify-between"
    >
      <p
        className="xl:hidden md:text-left text-right text-[12px] font-extralight
                    leading-[24px]
                    tracking-[2.4px]"
      >
        {call}
      </p>
      <p className="section-description mdOnly:text-[13px] md:text-justify">
        {description}
      </p>
    </div>
  </div>
);

export default ServicesDescription;
