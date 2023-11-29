import { SectionTitle } from '@/components/ui/SectionTitle';
import { BtnLink } from '@/components/ui/BtnLink';
import { contact } from '@/data/links.data';
import data from '@/data/hero.data.json';

const { title, content } = data;
const { p1, p2, p3, button } = content;

export const HeroSection = () => (
  <section className="section hero background-image md:pt-[124px] xl:pt-[132px] smOnly:pt-[182px]">
    <div className="container relative flex flex-col gap-6 md:flex-row md:gap-12 xl:gap-[316px]">
      <div>
        <SectionTitle
          tag="h1"
          title={title}
          isInversed={true}
          className="mb-6 md:mb-[68px] xl:mb-[148px]"
        />

        <p className="w-[157px] text-[10px] leading-4 sm:w-fit md:w-[262px] md:text-sm md:leading-4 md:tracking-[1.26px] xl:w-fit xl:text-base xl:leading-[24px] xl:tracking-[1.44px] mdOnly:w-[264px]">
          {p1}
        </p>
      </div>

      <div className="md:w-[230px] xl:w-[294px]">
        <div className="right-[15px] top-[-64px] uppercase md:mb-14 md:mt-7 xl:mb-[190px] xl:mt-12 smOnly:absolute">
          <div className="mb-1 flex text-[37px] md:mb-5 md:text-[67px] xl:mb-8 xl:text-[98px]">
            <p className="font-medium">{p2._p1}</p>
            <p className="font-thin tracking-[1.6px] md:tracking-[8.71px] xl:tracking-normal">
              {p2._p2}
            </p>
          </div>

          <p className="text-xs font-light tracking-[9.48px] md:text-sm md:tracking-[25.9px] xl:text-base xl:tracking-[34.5px]">
            {p2._p3}
          </p>
        </div>

        <p className="section-text mb-6 text-justify md:mb-7">{p3}</p>

        <BtnLink href={contact}>{button}</BtnLink>
      </div>
    </div>
  </section>
);
