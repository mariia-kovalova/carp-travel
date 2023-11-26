import classNames from 'classnames';
import { LabelProps } from './types';

export const Label: React.FC<LabelProps> = ({ id, label, className }) => {
  const labelClasses = classNames(
    'text-xs leading-[24px] tracking-[2.4px]',
    className,
  );

  return (
    <label className={labelClasses} htmlFor={id}>
      {label}
    </label>
  );
};
