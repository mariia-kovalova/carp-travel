'use client';

import { FC } from 'react';
import { Controller, FieldErrors, FieldValues } from 'react-hook-form';

import Label from './Label';
import Helper from './Helper';
import PhoneHelper from './PhoneHelper';

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
      <Label
        id={id}
        label={label}
        className={`${isError ? 'text-error' : ''}`}
      />

      <div>
        {type === 'tel' ? <PhoneHelper /> : null}

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

      {isError ? <Helper inputName={inputName} errors={errors} /> : null}
    </div>
  );
};

export default Field;
