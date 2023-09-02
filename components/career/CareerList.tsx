import info from '@/data/career.data.json';

const CareerList = () => (
  <ul
    className="w-[181px] flex flex-col gap-[16px]
                    tablet:gap-[24px] tablet:w-[221px]
                    desktop:w-fit"
  >
    {info.description_2.map(({ title, description }) => (
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
);

export default CareerList;
