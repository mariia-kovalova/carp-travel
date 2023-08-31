'use client';

import { FC } from 'react';
import { Controller, FieldErrors, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Cross from './Cross';

interface IProps {
  id: string;
  inputName: string;
  label: string;
  type: string;
  placeholder: string;
  credentials: FieldValues;
  control: any;
  onInput: (value: FieldValues) => void;
  errors: FieldErrors<FieldValues>;
}

const Field: FC<IProps> = ({
  id,
  inputName,
  label,
  type,
  placeholder,
  credentials,
  control,
  onInput,
  errors,
}) => {
  const isError = errors[inputName];

  return (
    <div className="relative flex flex-col gap-[4px] desktop:gap-[6px]">
      <label
        className={`text-[12px] font-extralight leading-[24px] tracking-[2.4px]
        ${isError ? 'text-error' : ''}`}
        htmlFor={id}
      >
        {label}
      </label>

      <div>
        {type === 'tel' && (
          <p
            className="absolute left-[8px] top-[29px] text-[13px] font-extralight leading-[24px] 
                      desktop:top-[31px] desktop:text-[20px]"
          >
            + 38
          </p>
        )}
        <Controller
          control={control}
          name={inputName}
          render={({ field: { onChange, value, ...field } }) => (
            <input
              className={`w-full px-[8px] bg-transparent-white-dark 
              ${type === 'tel' ? 'tel' : ''} 
              ${isError ? 'text-error' : ''}
              text-[13px] font-extralight leading-[24px]
              desktop:py-[2px] desktop:text-[20px]`}
              {...field}
              id={id}
              type={type}
              placeholder={placeholder}
              value={credentials[inputName] || value}
              onChange={e => {
                onInput({ [inputName]: e.target.value });
                onChange(e.target.value);
              }}
            />
          )}
        />
      </div>

      {isError && (
        <p
          className="absolute bottom-[-23px] right-0
                  flex gap-[5px] items-center
                  text-[12px] font-extralight leading-[24px]
                  tracking-[2.4px] text-error"
        >
          <Cross />
          <ErrorMessage errors={errors} name={inputName} />
        </p>
      )}
    </div>
  );
};

export default Field;
