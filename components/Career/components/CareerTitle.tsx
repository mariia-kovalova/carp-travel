import info from '@/data/career.data.json';

const { title, description_1 } = info;

const CareerTitle = () => (
  <div
    className="mb-[36px] flex flex-col gap-[24px]
                md:mb-[5px] md:flex-row md:items-center md:justify-between
                xl:mb-[32px]"
  >
    <h2 className="section-title">
      {title.text} <span className="font-medium">{title.accent}</span>
    </h2>
    <div
      className="section-text w-[180px] md:w-[221px]
                 md:text-justify xl:w-[293px] smOnly:self-end
                 mdOnly:text-[13px]"
    >
      {description_1.text}
    </div>
  </div>
);

export default CareerTitle;
