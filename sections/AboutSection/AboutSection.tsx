import { SectionTitle } from '@/components/ui/SectionTitle';
import { about } from '@/data/links.data';
import data from '@/data/about.data.json';
import { TextWithAccent } from '@/components/ui/TextWithAccent';

const { title, content } = data;
const { p1, p2, p3, p4 } = content;

export const AboutSection = () => (
  <section id={about} className="section about background-image">
    <div className="container">
      <div className="flex flex-col gap-[8px] md:flex-row md:gap-[76px] xl:gap-[24px]">
        <SectionTitle title={title} />

        <div className="w-[180px] md:mt-[10px] md:w-[220px] xl:mt-[20px] xl:w-[292px] ">
          <TextWithAccent
            className="mb-[20px] md:mb-[16px] xl:mb-[24px]"
            content={p1}
          />
          <TextWithAccent content={p2} />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-[40px] md:mt-[-60px] md:gap-[64px] xl:mt-[72px] xl:flex-row-reverse xl:justify-between">
        <div className="w-[180px] md:w-[220px] xl:w-[297px] smOnly:self-end">
          <p className="section-text font-medium uppercase">
            {p3.accent.part_1}
          </p>
          <p className="section-text text-right font-medium uppercase">
            {p3.accent.part_2}
          </p>
          <p className="section-text tracking-[-0.14px] md:tracking-[0.32px] xl:tracking-[2.16px]">
            {p3.text}
          </p>
        </div>

        <TextWithAccent
          content={p4}
          className="md:w-[463px] xl:w-[605px] mdOnly:self-end"
        />
      </div>
    </div>
  </section>
);
