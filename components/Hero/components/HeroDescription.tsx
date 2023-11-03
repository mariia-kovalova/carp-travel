import LINKS from '@/constants/links';
import info from '@/data/hero.data.json';

import BtnLink from './BtnLink';

const { description_p2, description_p3, button } = info;

const HeroDescription = () => (
  <div
    className="xl:basis-[297px] xl:gap-[181px] md:basis-[230px] 
                md:gap-[56px] flex
                flex-col gap-[24px]"
  >
    <div className="smOnly:absolute right-0 top-[105px] uppercase">
      <p
        className="xl:mb-[-34px] xl:text-[98px] md:mb-[-20px] 
                    md:text-[67px] mb-[-14px]
                    text-[37px] font-thin"
      >
        <span className="font-medium">{description_p2.accent}</span>
        <span className="mdOnly:tracking-[8.71px]">
          {description_p2.text.p1}
        </span>
      </p>
      <p
        className="xl:text-[16px] xl:tracking-[34.5px] md:text-[14px]
                    md:tracking-[25.9px] text-[12px]
                    font-extralight tracking-[9.48px]"
      >
        {description_p2.text.p2}
      </p>
    </div>
    <div
      className="md:gap-[28px] flex flex-col items-center 
                  gap-[24px]"
    >
      <p className="section-description text-justify">{description_p3.text}</p>

      <BtnLink text={button.text} href={`#${LINKS.contact}`} />
    </div>
  </div>
);

export default HeroDescription;
