'use client';

import { FC } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';

import Label from './Label';
import Helper from './Helper';
import PhoneHelper from './PhoneHelper';

interface IProps {
  id: string;
  inputName: string;
  label: string;
  type: string;
  placeholder: string;
  register: any;
  errors: FieldErrors<FieldValues>;
}

const Field: FC<IProps> = ({
  id,
  inputName,
  label,
  type,
  placeholder,
  register,
  errors,
}) => {
  const isError = errors[inputName];

  return (
    <div className="relative flex flex-col gap-[4px] desktop:gap-[6px]">
      <Label
        id={id}
        label={label}
        className={`${isError ? 'text-error' : ''}`}
      />

      <div>
        {type === 'tel' ? <PhoneHelper /> : null}
        <input
          className={`w-full px-[8px] bg-transparent-white-dark 
              ${type === 'tel' ? 'tel' : ''} 
              ${isError ? 'text-error' : ''}
              text-[13px] font-extralight leading-[24px]
              desktop:py-[2px] desktop:text-[20px]`}
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

export default Field;
