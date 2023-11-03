import info from '@/data/career.data.json';

const { title, description_1 } = info;

const CareerTitle = () => (
  <div
    className="xl:mb-[32px] md:mb-[5px] md:flex-row md:items-center
                md:justify-between mb-[36px] flex flex-col
                gap-[24px]"
  >
    <h2 className="section-title">
      {title.text} <span className="font-medium">{title.accent}</span>
    </h2>
    <div
      className="section-description mdOnly:text-[13px] xl:w-[293px]
                 smOnly:self-end md:w-[221px] md:text-justify
                 w-[180px]"
    >
      {description_1.text}
    </div>
  </div>
);

export default CareerTitle;
