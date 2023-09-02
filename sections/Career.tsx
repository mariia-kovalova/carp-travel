import LINKS from '@/constants/links';
import info from '@/data/career.data.json';

import SectionTitle from '@/components/shared/SectionTitle';
import CareerList from '@/components/career/CareerList';
import CareerForm from '@/components/career/CareerForm';

import '@/styles/career.css';

const { title, sub_title, description_1, description_3 } = info;

const Career = () => (
  <section id={LINKS.career}>
    <div className="career background-image min-h-screen">
      <div className="container container-padding">
        <div
          className="flex flex-col gap-[24px] mb-[36px]
                tablet:flex-row tablet:justify-between tablet:items-center tablet:mb-[5px]
                desktop:mb-[32px]"
        >
          <SectionTitle title={title} />
          <div
            className="section-description w-[180px] max-tablet:self-end
                 tablet:w-[221px] tablet:text-justify tablet:max-desktop:text-[13px]
                 desktop:w-[293px]"
          >
            {description_1.text}
          </div>
        </div>
        <div className="relative tablet:flex tablet:gap-[20px] desktop:gap-[24px]">
          <div className="desktop:pl-[64px]">
            <p
              className="mb-[36px] font-extralight text-[30px] uppercase 
                    max-tablet:text-right max-tablet:mr-[47px]
                    tablet:ml-[88px] tablet:mb-[54px] 
                    desktop:mb-[45px] desktop:ml-[98px] desktop:text-[36px] desktop:leading-[39px]"
            >
              {sub_title}
            </p>
            <CareerList />
          </div>
          <div
            className="max-tablet:absolute max-tablet:w-full max-tablet:pt-[111px]
                  max-desktop:pt-[98px] desktop:w-[calc(100%-562px)]"
          >
            <p
              className="section-description w-[179px] mb-[24px]
                 max-tablet:ml-auto tablet:mb-[32px] max-tablet:text-right 
                 tablet:w-[221px] desktop:mb-[14px] tablet:max-desktop:text-[13px]
                 desktop:w-[234px]"
            >
              {description_3.text}
            </p>

            <CareerForm />
          </div>
        </div>
      </div>
    </div>
    <div className="career dublicate background-image min-h-screen h-[826px] tablet:hidden"></div>
  </section>
);

export default Career;
