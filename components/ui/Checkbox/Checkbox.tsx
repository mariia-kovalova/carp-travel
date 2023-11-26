import classNames from 'classnames';
import { CheckboxProps } from './types';

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  inputName,
  label,
  register,
  className,
}) => {
  const labelClasses = classNames(
    'flex items-start gap-[8px] self-start md:w-[192px] xl:w-[258px]',
    className,
  );

  return (
    <label htmlFor={id} className={labelClasses}>
      <input
        className="visually-hidden checkbox-input"
        id={id}
        type="checkbox"
        {...register(inputName)}
      />
      <span className="checkbox-indicator block h-[22px] w-[22px] shrink-0 border-[1px] xl:h-[24px] xl:w-[24px]" />
      <span className="text-xs leading-[24px]">{label}</span>
    </label>
  );
};
