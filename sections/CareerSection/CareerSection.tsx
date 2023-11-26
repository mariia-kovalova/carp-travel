import { career } from '@/data/links.data';
import data from '@/data/career.data.json';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CareerList } from '@/components/CareerList/CareerList';
import { CareerForm } from '@/components/CareerForm';

const { title, sub_title, content } = data;
const { p1, p2, p3 } = content;

export const CareerSection = () => {
  return (
    <section
      id={career}
      className="section career background-image relative smOnly:py-0"
    >
      <div className="container absolute top-[56px]">
        <SectionTitle title={title} />
        <p className="section-text ml-[36%] md:ml-[80px] md:w-[221px] md:text-justify xl:w-[293px] smOnly:mt-6 mdOnly:text-[13px]">
          {p1}
        </p>
        <p className="ml-[36%] mt-11 text-[30px] font-extralight uppercase md:ml-[80px] md:mt-3 xl:ml-[147px] xl:mt-6 xl:text-[36px] xl:leading-[39px]">
          {sub_title}
        </p>
        <div className="mt-11 flex flex-col gap-28 md:mt-[56px] xl:mt-[45px] ">
          <CareerList className="smOnly:mr-[36%]" items={p2} />
          <div>
            <div className="section-text mb-6 ml-[36%] md:ml-[80px] md:w-[221px] xl:w-[234px] mdOnly:text-[13px]">
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
