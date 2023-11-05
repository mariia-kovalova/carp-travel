import info from '@/data/hero.data.json';

import BtnLink from './BtnLink';
import { contact } from '@/data/links.data';

const { description_p2, description_p3, button } = info;

const HeroDescription = () => (
  <div
    className="flex flex-col gap-[24px] 
                md:basis-[230px] md:gap-[56px]
                xl:basis-[297px] xl:gap-[181px]"
  >
    <div className="right-0 top-[105px] uppercase smOnly:absolute">
      <p
        className="mb-[-14px] text-[37px] font-thin 
                    md:mb-[-20px] md:text-[67px]
                    xl:mb-[-34px] xl:text-[98px]"
      >
        <span className="font-medium">{description_p2.accent}</span>
        <span className="mdOnly:tracking-[8.71px]">
          {description_p2.text.p1}
        </span>
      </p>
      <p
        className="md: text-xs tracking-[9.48px]
                    md:tracking-[25.9px] xl:text-base
                     xl:tracking-[34.5px]"
      >
        {description_p2.text.p2}
      </p>
    </div>
    <div
      className="flex flex-col items-center gap-[24px] 
                  md:gap-[28px]"
    >
      <p className="section-description text-justify">{description_p3.text}</p>

      <BtnLink text={button.text} href={contact} />
    </div>
  </div>
);

export default HeroDescription;
