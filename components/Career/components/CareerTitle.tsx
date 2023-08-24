const CareerTitle = () => {
  return (
    <div
      className="flex flex-col gap-[24px] mb-[36px]
                tablet:flex-row tablet:justify-between tablet:items-center tablet:mb-[5px]
                desktop:mb-[32px]"
    >
      <h2 className="section-title">
        choose <span className="font-medium">us</span>
      </h2>
      <div
        className="section-description w-[180px] max-tablet:self-end
                 tablet:w-[221px] tablet:text-justify tablet:max-desktop:text-[13px]
                 desktop:w-[293px]"
      >
        Your chance to join our passionate team in Carpathian tourism. Seeking
        talented professionals to share our common mission.
      </div>
    </div>
  );
};

export default CareerTitle;
