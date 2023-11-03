import info from '@/data/about.data.json';

const AboutTitle = () => {
  return (
    <div
      className="mdOnly:justify-between xl:gap-[24px] md:flex-row
                  flex flex-col
                  gap-[8px]"
    >
      <h2 className="section-title">
        {info.title.text}
        <span className="font-medium"> {info.title.accent}</span>
      </h2>
      <div
        className="section-description xl:mt-[20px] 
                    xl:w-[292px] md:mt-[10px]
                    md:w-[220px] w-[180px] "
      >
        <p className="xl:mb-[24px] md:mb-[16px] mb-[20px]">
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
