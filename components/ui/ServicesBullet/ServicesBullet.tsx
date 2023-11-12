import classNames from 'classnames';
import { ServicesBulletProps } from './types';

export const ServicesBullet: React.FC<ServicesBulletProps> = ({
  className,
  data,
  index,
}) => {
  const { pagination_bullet } = data[index];

  const btnClasses = classNames(
    'common-transition max-w-[170px] text-left text-[20px] uppercase leading-[17px] opacity-50',
    'hover:translate-x-[14px] hover:opacity-100 focus:translate-x-[14px] focus:opacity-100 active:translate-x-[14px] active:opacity-100',
    'md:max-w-[220px] md:text-[22px] md:leading-[18px] xl:max-w-[238px] xl:text-[28px] xl:leading-[24px]',
    className,
  );

  return <button className={btnClasses}>{pagination_bullet}</button>;
};
