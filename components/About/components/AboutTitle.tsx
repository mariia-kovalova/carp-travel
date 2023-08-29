import info from '@/data/about.data.json';

const AboutTitle = () => {
  return (
    <div
      className="flex flex-col gap-[8px]
                  tablet:flex-row tablet:max-desktop:justify-between
                  desktop:gap-[24px]"
    >
      <h2 className="section-title">
        {info.title.text}
        <span className="font-medium"> {info.title.accent}</span>
      </h2>
      <div
        className="section-description w-[180px] 
                    tablet:w-[220px] tablet:mt-[10px]
                    desktop:w-[292px] desktop:mt-[20px] "
      >
        <p className="mb-[20px] tablet:mb-[16px] desktop:mb-[24px]">
          <span className="font-medium">{info.description_p1.accent}</span>{' '}
          {info.description_p1.text}
        </p>
        <p>
          <span className="font-medium">{info.description_p2.accent}</span>{' '}
          {info.description_p2.text}
        </p>
      </div>
    </div>
  );
};

export default AboutTitle;
