const AboutTitle = () => {
  return (
    <div
      className="flex flex-col gap-[8px]
                    tablet:flex-row tablet:max-desktop:justify-between
                    desktop:gap-[24px]"
    >
      <h2 className="section-title">
        who <span className="font-medium">we are</span>
      </h2>
      <div
        className="section-description w-[180px] 
                    tablet:w-[220px]
                    desktop:w-[292px]"
      >
        <p
          className="mb-[20px] tablet:mb-[16px] tablet:mt-[10px] 
                        desktop:mt-[20px] desktop:mb-[24px]"
        >
          <span className="font-medium">a team of enthusiasts</span> who are
          fully committed to the mission of creating unforgettable and
          extraordinary trips to the most beautiful parts of the Carpathians.
          Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>
        <p>
          <span className="font-medium">We believe</span> that nature has the
          power to inspire, strengthen character and provide new perspectives.
          Therefore, each of our tours is aimed at unlocking your potential,
          enriching your spiritual world and creating unforgettable memories.
        </p>
      </div>
    </div>
  );
};

export default AboutTitle;
