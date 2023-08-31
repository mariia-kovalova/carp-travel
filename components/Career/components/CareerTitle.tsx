import info from '@/data/career.data.json';

const { title, description_1 } = info;

const CareerTitle = () => (
  <div
    className="flex flex-col gap-[24px] mb-[36px]
                tablet:flex-row tablet:justify-between tablet:items-center tablet:mb-[5px]
                desktop:mb-[32px]"
  >
    <h2 className="section-title">
      {title.text} <span className="font-medium">{title.accent}</span>
    </h2>
    <div
      className="section-description w-[180px] max-tablet:self-end
                 tablet:w-[221px] tablet:text-justify tablet:max-desktop:text-[13px]
                 desktop:w-[293px]"
    >
      {description_1.text}
    </div>
  </div>
);

export default CareerTitle;
