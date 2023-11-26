import classNames from 'classnames';
import { CareerListProps } from './types';

export const CareerList: React.FC<CareerListProps> = ({ className, items }) => {
  const listClasses = classNames(
    'flex flex-col gap-[16px] md:gap-[24px] mdOnly:justify-between mdOnly:h-full',
    className,
  );

  return (
    <ul className={listClasses}>
      {items.map(({ title, text }) => (
        <li key={title} className="flex flex-col gap-2 xl:flex-row xl:gap-6">
          <p className="section-text text-right font-normal xl:w-[253px]">
            {title}
          </p>
          <p className="text-right text-xs font-extralight leading-5 xl:w-[285px] xl:text-left xl:leading-6">
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
};
