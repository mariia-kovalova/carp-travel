import classNames from 'classnames';
import { SectionTitle } from '../SectionTitle';
import { ServicesTitleProps } from './types';

export const ServicesTitle: React.FC<ServicesTitleProps> = ({
  title,
  number,
  className = '',
}) => {
  const wrapperClassses = classNames(
    'flex flex-col gap-[18px] md:flex-row md:items-center md:gap-[170px]',
    className,
  );

  return (
    <div className={wrapperClassses}>
      <SectionTitle title={title} />
      <p className="self-end text-[43px] font-thin md:self-auto md:text-[67px] md:leading-[78px] xl:text-[98px] xl:leading-5">
        0{number}/<span className="text-white/20">05</span>
      </p>
    </div>
  );
};
