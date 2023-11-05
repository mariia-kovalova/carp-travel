import info from '@/data/career.data.json';

import CareerForm from './CareerForm';
import CareerCall from './CareerCall';

const { description_2, sub_title } = info;

const CareerDescription = () => (
  <div className="xl:gap-[24px] md:flex md:gap-[20px] relative">
    <div className="xl:pl-[64px]">
      <p
        className="smOnly:text-right smOnly:mr-[47px] xl:mb-[45px] xl:ml-[98px] 
                    xl:text-[36px] xl:leading-[39px]
                    md:mb-[54px] md:ml-[88px] 
                    mb-[36px] text-[30px]  uppercase"
      >
        {sub_title}
      </p>
      <ul
        className="xl:w-fit md:w-[221px] md:gap-[24px] flex
                    w-[181px] flex-col
                    gap-[16px]"
      >
        {description_2.map(({ title, description }) => (
          <li
            key={title}
            className="xl:flex-row xl:gap-[24px] flex
                        flex-col gap-[8px]"
          >
            <p
              className="xl:text-lg xl:w-[253px] xl:leading-[24px]
                        md:text-base text-right 
                         leading-[20px]"
            >
              {title}
            </p>
            <p
              className="xl:w-[285px] xl:leading-[24px] xl:text-left text-right
                        text-xs  leading-[20px]"
            >
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
    <div
      className="smOnly:absolute smOnly:w-full smOnly:pt-[111px]
                  max-xl:pt-[98px] xl:w-[calc(100%-562px)]"
    >
      <CareerCall />
      <CareerForm />
    </div>
  </div>
);

export default CareerDescription;
