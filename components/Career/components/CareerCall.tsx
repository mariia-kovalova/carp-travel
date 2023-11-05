import info from '@/data/career.data.json';

const CareerCall = () => (
  <div
    className="section-text mb-[24px] w-[179px]
                 md:mb-[32px] md:w-[221px] xl:mb-[14px] 
                 xl:w-[234px] smOnly:ml-auto smOnly:text-right
                 mdOnly:text-[13px]"
  >
    <p>{info.description_3.text}</p>
  </div>
);

export default CareerCall;
