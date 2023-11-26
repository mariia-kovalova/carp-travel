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
      <div className="container">
        <SectionTitle title={title} />
        <p className="section-text ml-[36%] md:ml-[80px] md:w-[221px] md:text-justify xl:w-[293px] smOnly:mt-6 mdOnly:text-[13px]">
          {p1}
        </p>
        <p className="ml-[36%] mt-11 text-[30px] font-extralight uppercase md:ml-[80px] md:mt-3 xl:ml-[147px] xl:mt-6 xl:text-[36px] xl:leading-[39px]">
          {sub_title}
        </p>
        <CareerList
          className="mr-[35%] mt-11 sm:mr-[153pxpx] md:mr-0 md:mt-[56px] xl:mt-[45px]"
          items={p2}
        />

        <div className="smOnly:container smOnly:absolute smOnly:left-1/2 smOnly:top-[calc(100%+56px)] smOnly:-translate-x-1/2">
          <div className="section-text mb-6 ml-[36%] md:ml-[80px] md:w-[221px] xl:w-[234px] mdOnly:text-[13px]">
            <p>{p3._p1}</p>
            <p>{p3._p2}</p>
          </div>
          <CareerForm />
        </div>
      </div>
    </section>
  );
};
