'use client';

import classNames from 'classnames';

import { Label } from '../Label';
import { Helper } from '../Helper';
import { PhoneHelper } from '../PhoneHelper';

import { FieldProps } from './types';

export const Field: React.FC<FieldProps> = ({
  id,
  inputName,
  label,
  type,
  placeholder,
  register,
  errors,
  className,
}) => {
  const isError = errors[inputName];

  const fieldClasses = classNames(
    'relative flex flex-col gap-[4px] xl:gap-[6px]',
    className,
  );

  const labelClasses = classNames({ 'text-error': isError });

  const inputClasses = classNames(
    'field-input w-full bg-white/5 px-[8px] text-[13px] leading-[24px] xl:py-[2px] xl:text-[20px]',
    {
      'text-error': isError,
      'pl-10 xl:pl-[60px]': type === 'tel',
    },
  );

  return (
    <div className={fieldClasses}>
      <Label className={labelClasses} id={id} label={label} />

      <div>
        {type === 'tel' ? <PhoneHelper /> : null}
        <input
          className={inputClasses}
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(inputName)}
        />
      </div>

      {isError ? <Helper inputName={inputName} errors={errors} /> : null}
    </div>
  );
};
