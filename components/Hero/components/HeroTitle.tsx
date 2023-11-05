import info from '@/data/hero.data.json';

const { title, description_p1 } = info;

const HeroTitle = () => (
  <div className="xl:basis-[646px] md:basis-[426px] md:gap-[68px] flex flex-col gap-[24px]">
    <h1 className="section-title">
      <span className="font-medium">{title.accent}</span> {title.text}
    </h1>
    <p
      className="mdOnly:w-[262px] xl:leading-[24px] xl:tracking-[1.44px]
                  md: md:tracking-[1.26px] text-[10px]
                  font-thin leading-[16px]"
    >
      {description_p1.text}
    </p>
  </div>
);

export default HeroTitle;
