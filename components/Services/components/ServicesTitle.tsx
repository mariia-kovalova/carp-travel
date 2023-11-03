import info from '@/data/services.data.json';

interface IProps {
  number: number;
}

const { title } = info;

const ServicesTitle: React.FC<IProps> = ({ number }) => {
  return (
    <div
      className="xl:mb-[20px] md:mb-[36px] md:flex-row md:items-center
                md:gap-[170px] mb-[11px] flex flex-col
                gap-[18px]"
    >
      <h2 className="section-title">
        {title.text} <span className="font-medium">{title.accent}</span>
      </h2>
      <p
        className="xl:text-[98px] xl:leading-5 md:self-auto 
                    md:text-[67px] md:leading-[78px] self-end
                    text-[43px] font-thin"
      >
        0{number}/<span className="text-white/20">05</span>
      </p>
    </div>
  );
};

export default ServicesTitle;
