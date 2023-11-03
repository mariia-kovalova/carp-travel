'use client';

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

const Field: React.FC<IProps> = ({
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
    <div className="xl:gap-[6px] relative flex flex-col gap-[4px]">
      <Label
        id={id}
        label={label}
        extraClass={`${isError ? 'text-error' : ''}`}
      />

      <div>
        {type === 'tel' ? <PhoneHelper /> : null}
        <input
          className={`w-full bg-white/5 px-[8px] 
              ${type === 'tel' ? 'tel' : ''} 
              ${isError ? 'text-error' : ''}
              xl:py-[2px] xl:text-[20px] text-[13px]
              font-extralight leading-[24px]`}
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
