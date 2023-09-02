import LINKS from '@/constants/links';
import info from '@/data/hero.data.json';

import BtnLink from '@/components/shared/BtnLink';

import '@/styles/hero.css';

const { title, description_p1, description_p2, description_p3, button } = info;

const Hero = () => (
  <section id={LINKS.hero} className="hero background-image min-h-[100vh]">
    <div
      className="container relative pt-[182px] flex max-tablet:flex-col gap-[24px] 
                tablet:pt-[125px] tablet:justify-between 
                desktop:pt-[141px] desktop:gap-[298px]"
    >
      <div className="flex flex-col gap-[24px] tablet:gap-[68px] tablet:basis-[426px] desktop:basis-[646px]">
        <h1 className="section-title">
          <span className="font-medium">{title.accent}</span> {title.text}
        </h1>
        <p
          className="text-[10px] font-thin leading-[16px]
                  tablet:max-desktop:w-[262px] tablet:text-[14px] tablet:tracking-[1.26px]
                  desktop:tracking-[1.44px] desktop:leading-[24px]"
        >
          {description_p1.text}
        </p>
      </div>
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
          <p className="section-description text-justify">
            {description_p3.text}
          </p>

          <BtnLink text={button.text} href={`#${LINKS.contact}`} />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
