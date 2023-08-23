const AboutDescription = () => {
  return (
    <div
      className="flex flex-col gap-[40px] mt-[40px] 
                     tablet:gap-[64px] tablet:mt-[-64px] 
                     desktop:flex-row-reverse desktop:justify-between desktop:mt-[72px]"
    >
      <div className="w-[180px] max-tablet:self-end tablet:w-[220px] desktop:w-[297px]">
        <p className="section-description uppercase font-medium">
          from vacationers
        </p>
        <p className="section-description uppercase font-medium text-right">
          to active travelers
        </p>
        <p
          className="section-description tracking-[-0.14px]
                    tablet:tracking-[0.32px]
                    desktop:tracking-[2.16px]"
        >
          we have a tour for everyone.
        </p>
      </div>
      <p
        className="section-description tablet:w-[463px] 
                        tablet:max-desktop:self-end desktop:w-[605px]"
      >
        <span className="font-medium">We use methods</span> that are time-tested
        and proven. Our expert guides with in-depth knowledge of the Carpathian
        landscapes lead you safely through the mysteries of these mountains.
      </p>
    </div>
  );
};

export default AboutDescription;
