import { SectionTitle } from '@/components/ui/SectionTitle';
import { BtnLink } from '@/components/ui/BtnLink';
import { contact } from '@/data/links.data';
import data from '@/data/hero.data.json';

const { title, content } = data;
const { p1, p2, p3, button } = content;

export const HeroSection = () => (
  <section className="section hero background-image md:pt-[124px] xl:pt-[140px] smOnly:pt-[182px]">
    <div className="container relative flex flex-col gap-6 md:flex-row md:gap-12 xl:gap-[326px]">
      <div>
        <SectionTitle
          tag="h1"
          title={title}
          isInversed={true}
          className="mb-6 md:mb-[68px] xl:mb-[148px]"
        />

        <p className="text-[10px] leading-4 md:text-sm md:tracking-[1.26px] xl:text-base xl:leading-[24px] xl:tracking-[1.44px] mdOnly:w-[264px]">
          {p1}
        </p>
      </div>

      <div>
        <div className="right-[20px] top-[-70px] flex flex-col gap-1 uppercase md:mb-14 md:gap-4 xl:mb-[181px] xl:gap-7 smOnly:absolute">
          <p className="text-[37px] md:text-[67px] xl:text-[98px]">
            <span className="font-medium">{p2._p1}</span>
            <span className="font-thin smOnly:tracking-[1.6px] mdOnly:tracking-[8.71px]">
              {p2._p2}
            </span>
          </p>

          <p className="text-xs font-light tracking-[9.48px] md:mb-7 md:text-sm md:tracking-[25.9px] xl:text-base xl:tracking-[34.5px]">
            {p2._p3}
          </p>
        </div>

        <p className="section-text mb-6 text-justify md:mb-7">{p3}</p>

        <BtnLink href={contact}>{button}</BtnLink>
      </div>
    </div>
  </section>
);
