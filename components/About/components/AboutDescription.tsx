import info from '@/data/about.data.json';

const AboutDescription = () => {
  return (
    <div
      className="xl:flex-row-reverse xl:justify-between xl:mt-[72px] md:mt-[-64px] 
                  md:gap-[64px] mt-[40px] 
                  flex flex-col gap-[40px]"
    >
      <div className="xl:w-[297px] smOnly:self-end md:w-[220px] w-[180px]">
        <p className="section-description font-medium uppercase">
          {info.description_p3.accent.part_1}
        </p>
        <p className="section-description text-right font-medium uppercase">
          {info.description_p3.accent.part_2}
        </p>
        <p
          className="section-description xl:tracking-[2.16px]
                    md:tracking-[0.32px]
                    tracking-[-0.14px]"
        >
          {info.description_p3.text}
        </p>
      </div>
      <p
        className="section-description mdOnly:self-end 
                  xl:w-[605px] md:w-[463px]"
      >
        <span className="font-medium">{info.description_p4.accent}</span>{' '}
        {info.description_p4.text}
      </p>
    </div>
  );
};

export default AboutDescription;
