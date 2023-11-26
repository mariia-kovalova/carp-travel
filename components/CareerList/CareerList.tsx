import classNames from 'classnames';
import { CareerListProps } from './types';

export const CareerList: React.FC<CareerListProps> = ({ className, items }) => {
  const listClasses = classNames(
    'flex flex-col gap-[16px] md:gap-[24px]',
    className,
  );

  return (
    <ul className={listClasses}>
      {items.map(({ title, text }) => (
        <li
          key={title}
          className="flex flex-col gap-[8px] xl:flex-row xl:gap-[24px]"
        >
          <p className="text-right text-sm font-normal leading-[20px] md:text-base xl:w-[253px] xl:text-lg xl:leading-[24px]">
            {title}
          </p>
          <p className="text-right text-xs font-extralight leading-[20px] xl:w-[285px] xl:text-left xl:leading-[24px]">
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
};
