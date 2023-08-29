import { career } from '@/data/career.data';
import CareerForm from './CareerForm';

const CareerDescription = () => {
  return (
    <div className=" relative tablet:flex tablet:gap-[20px] desktop:gap-[24px]">
      <div className="desktop:pl-[64px]">
        <p
          className="mb-[36px] font-extralight text-[30px] uppercase 
                    max-tablet:text-right max-tablet:mr-[47px]
                    tablet:ml-[88px] tablet:mb-[54px] 
                    desktop:mb-[45px] desktop:ml-[98px] desktop:text-[36px] desktop:leading-[39px]"
        >
          why us?
        </p>
        <ul
          className="w-[181px] flex flex-col gap-[16px]
                    tablet:gap-[24px] tablet:w-[221px]
                    desktop:w-fit"
        >
          {career.map(({ title, description }) => (
            <li
              key={title}
              className="flex flex-col gap-[8px]
                        desktop:flex-row desktop:gap-[24px]"
            >
              <p
                className="text-right text-[14px] leading-[20px]
                        tablet:text-[16px] desktop:text-[18px] 
                        desktop:w-[253px] desktop:leading-[24px]"
              >
                {title}
              </p>
              <p
                className="text-right text-[12px] leading-[20px] font-extralight
                        desktop:w-[285px] desktop:leading-[24px] desktop:text-left"
              >
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="max-tablet:absolute max-tablet:w-full max-tablet:pt-[111px]
                  max-desktop:pt-[98px] desktop:w-[calc(100%-562px)]"
      >
        <CareerForm />
      </div>
    </div>
  );
};

export default CareerDescription;
