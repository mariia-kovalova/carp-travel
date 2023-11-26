import { career } from '@/data/links.data';
import data from '@/data/career.data.json';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CareerList } from '@/components/CareerList/CareerList';
import { CareerForm } from '@/components/CareerForm';

const { title, sub_title, content } = data;
const { p1, p2, p3 } = content;

export const CareerSection = () => {
  return (
    <section id={career} className="section career background-image">
      <div className="container md:relative">
        <SectionTitle title={title} />
        <p className="section-text ml-[36%] sm:ml-[160px] md:absolute md:right-8 md:top-2 md:ml-0 md:w-[221px] md:text-justify xl:right-6 xl:top-4 xl:w-[293px] smOnly:mt-6 mdOnly:text-[13px]">
          {p1}
        </p>
        <p className="ml-[36%] mt-11 text-[30px] font-extralight uppercase sm:ml-[160px] md:ml-[80px] md:mt-5 xl:ml-[123px] xl:mt-6 xl:text-[36px] xl:leading-[39px]">
          {sub_title}
        </p>

        <div className="md:mt-16 md:flex md:gap-5 xl:mt-[45px] xl:gap-6 mdOnly:ml-[-4px] mdOnly:h-[404px]">
          <CareerList
            className="mr-[35%] mt-11 sm:mr-[153pxpx] md:mr-0 md:mt-0 xl:ml-[40px] mdOnly:w-[225px]"
            items={p2}
          />

          <div className="smOnly:container md:flex-grow xl:w-[606px] smOnly:absolute smOnly:left-1/2 smOnly:top-[calc(100%+56px)] smOnly:-translate-x-1/2">
            <div className="section-text mb-6 ml-[36%] sm:ml-[160px] md:mb-8 md:ml-0 md:w-[221px] xl:mb-[14px] xl:mt-[-84px] xl:w-[234px] mdOnly:text-[13px]">
              <p>{p3._p1}</p>
              <p>{p3._p2}</p>
            </div>
            <CareerForm />
          </div>
        </div>
      </div>
    </section>
  );
};
