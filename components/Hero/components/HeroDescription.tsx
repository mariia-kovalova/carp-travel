import LINKS from '@/constants/links';
import info from '@/data/hero.data.json';

import BtnLink from './BtnLink';

const { description_p2, description_p3, button } = info;

const HeroDescription = () => (
  <div
    className="flex flex-col gap-[24px] 
                tablet:gap-[56px] tablet:basis-[230px]
                desktop:gap-[181px] desktop:basis-[297px]"
  >
    <div className="max-tablet:absolute top-[105px] right-0 uppercase">
      <p
        className="mb-[-14px] text-[37px] font-thin 
                    tablet:mb-[-20px] tablet:text-[67px]
                    desktop:mb-[-34px] desktop:text-[98px]"
      >
        <span className="font-medium">{description_p2.accent}</span>
        <span className="tablet:max-desktop:tracking-[8.71px]">
          {description_p2.text.p1}
        </span>
      </p>
      <p
        className="text-[12px] font-extralight tracking-[9.48px]
                    tablet:text-[14px] tablet:tracking-[25.9px]
                    desktop:text-[16px] desktop:tracking-[34.5px]"
      >
        {description_p2.text.p2}
      </p>
    </div>
    <div
      className="flex flex-col gap-[24px] items-center 
                  tablet:gap-[28px]"
    >
      <p className="section-description text-justify">{description_p3.text}</p>

      <BtnLink text={button.text} href={`#${LINKS.contact}`} />
    </div>
  </div>
);

export default HeroDescription;
