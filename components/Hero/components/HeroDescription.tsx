import LINKS from '@/constants/links';
import BtnLink from './BtnLink';

const HeroDescription = () => (
  <div
    className="flex flex-col gap-[24px] 
                tablet:gap-[56px] tablet:w-[230px]
                desktop:gap-[181px] desktop:w-[295px]"
  >
    <div className="max-tablet:absolute top-[105px] right-0 uppercase">
      <p
        className="mb-[-14px] text-[37px] font-thin 
                    tablet:mb-[-20px] tablet:text-[67px]
                    desktop:mb-[-34px] desktop:text-[98px]"
      >
        <span className="font-medium">7</span>
        <span className="tablet:tracking-[8.71px] desktop:tracking-normal">
          days
        </span>
      </p>
      <p
        className="text-[12px] font-extralight tracking-[9.48px]
                    tablet:text-[14px] tablet:tracking-[25.9px]
                    desktop:text-[16px] desktop:tracking-[36.48px]"
      >
        journey
      </p>
    </div>
    <div
      className="flex flex-col gap-[24px] items-center 
                  tablet:gap-[28px]"
    >
      <p className="section-description text-justify">
        We offer you unforgettable trips to the most beautiful parts of the
        Carpathians. Enjoy stunning views, exciting expeditions, and the best
        service!
      </p>

      <BtnLink text="join now" href={`#${LINKS.contact}`} />
    </div>
  </div>
);

export default HeroDescription;
