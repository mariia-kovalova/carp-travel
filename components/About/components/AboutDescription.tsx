import info from '@/data/about.data.json';

const AboutDescription = () => {
  return (
    <div
      className="flex flex-col gap-[40px] mt-[40px] 
                  tablet:gap-[64px] tablet:mt-[-64px] 
                  desktop:flex-row-reverse desktop:justify-between desktop:mt-[72px]"
    >
      <div className="w-[180px] max-tablet:self-end tablet:w-[220px] desktop:w-[297px]">
        <p className="section-description uppercase font-medium">
          {info.description_p3.accent.part_1}
        </p>
        <p className="section-description uppercase font-medium text-right">
          {info.description_p3.accent.part_2}
        </p>
        <p
          className="section-description tracking-[-0.14px]
                    tablet:tracking-[0.32px]
                    desktop:tracking-[2.16px]"
        >
          {info.description_p3.text}
        </p>
      </div>
      <p
        className="section-description tablet:w-[463px] 
                  tablet:max-desktop:self-end desktop:w-[605px]"
      >
        <span className="font-medium">{info.description_p4.accent}</span>{' '}
        {info.description_p4.text}
      </p>
    </div>
  );
};

export default AboutDescription;
