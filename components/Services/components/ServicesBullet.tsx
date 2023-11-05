interface IProps {
  className: string;
  alt: string;
  call: string;
}

const ServicesBullet: React.FC<IProps> = ({ className, alt, call }) => {
  return (
    <div className={className}>
      <button
        className="xl:w-[238px] xl:text-[28px] xl:leading-[24px] md:w-[220px] md:text-[22px] md:leading-[18px] w-[170px]
                      text-left text-[20px]  uppercase leading-[17px]
                      opacity-50 transition-all hover:translate-x-[14px]
                      hover:opacity-100 focus:translate-x-[14px] focus:opacity-100"
      >
        {alt}
      </button>
      <p
        className="call max-xl:hidden text-xs font-thin
                        leading-[24px] tracking-[2.4px] transition-opacity"
      >
        {call}
      </p>
    </div>
  );
};

export default ServicesBullet;
