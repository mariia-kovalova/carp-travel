import SectionTitle from '@/components/shared/SectionTitle';
import LINKS from '@/constants/links';
import info from '@/data/about.data.json';

import '@/styles/about.css';

const {
  title,
  description_p1,
  description_p2,
  description_p3,
  description_p4,
} = info;

const About = () => (
  <section id={LINKS.about} className="about background-image min-h-screen">
    <div className="container container-padding">
      <div
        className="flex flex-col gap-[8px]
                  tablet:flex-row tablet:max-desktop:justify-between
                  desktop:gap-[24px]"
      >
        <SectionTitle title={title} />
        <div
          className="section-description w-[180px] 
                    tablet:w-[220px] tablet:mt-[10px]
                    desktop:w-[292px] desktop:mt-[20px] "
        >
          <p className="mb-[20px] tablet:mb-[16px] desktop:mb-[24px]">
            <span className="font-medium">{description_p1.accent}</span>{' '}
            {description_p1.text}
          </p>
          <p>
            <span className="font-medium">{description_p2.accent}</span>{' '}
            {info.description_p2.text}
          </p>
        </div>
      </div>
      <div
        className="flex flex-col gap-[40px] mt-[40px] 
                  tablet:gap-[64px] tablet:mt-[-64px] 
                  desktop:flex-row-reverse desktop:justify-between desktop:mt-[72px]"
      >
        <div className="w-[180px] max-tablet:self-end tablet:w-[220px] desktop:w-[297px]">
          <p className="section-description uppercase font-medium">
            {description_p3.accent.part_1}
          </p>
          <p className="section-description uppercase font-medium text-right">
            {description_p3.accent.part_2}
          </p>
          <p
            className="section-description tracking-[-0.14px]
                    tablet:tracking-[0.32px]
                    desktop:tracking-[2.16px]"
          >
            {description_p3.text}
          </p>
        </div>
        <p
          className="section-description tablet:w-[463px] 
                  tablet:max-desktop:self-end desktop:w-[605px]"
        >
          <span className="font-medium">{description_p4.accent}</span>{' '}
          {description_p4.text}
        </p>
      </div>
    </div>
  </section>
);

export default About;
