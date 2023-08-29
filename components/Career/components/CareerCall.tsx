import info from '@/data/career.data.json';

const CareerCall = () => (
  <div
    className="section-description w-[179px] mb-[24px]
                 max-tablet:ml-auto tablet:mb-[32px] max-tablet:text-right 
                 tablet:w-[221px] desktop:mb-[14px] tablet:max-desktop:text-[13px]
                 desktop:w-[234px]"
  >
    <p>{info.call.part1}</p>
    <p>{info.call.part1}</p>
  </div>
);

export default CareerCall;
