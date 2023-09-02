import info from '@/data/hero.data.json';

const { title, description_p1 } = info;

const HeroTitle = () => (
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
);

export default HeroTitle;
