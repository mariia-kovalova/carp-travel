import { FC } from 'react';
import { Controller, FieldValues } from 'react-hook-form';

interface IProps {
  id: string;
  inputName: string;
  label: string;
  credentials: FieldValues;
  control: any;
  onInput: (value: FieldValues) => void;
}

const Textarea: FC<IProps> = ({
  id,
  inputName,
  label,
  credentials,
  control,
  onInput,
}) => (
  <div
    className="w-full h-full flex flex-col gap-[4px] 
                tablet:flex-grow
                desktop:gap-[6px]"
  >
    <label
      htmlFor={id}
      className="text-[12px] font-extralight leading-[24px] tracking-[2.4px]"
    >
      {label}
    </label>
    <Controller
      control={control}
      name={inputName}
      render={({ field: { onChange, value, ...field } }) => (
        <textarea
          className="block h-full w-full p-[8px] bg-transparent-white-dark resize-none"
          {...field}
          id={id}
          value={credentials[inputName] || value}
          onChange={e => {
            onInput({ [inputName]: e.target.value });
            onChange(e.target.value);
          }}
        />
      )}
    />
  </div>
);

export default Textarea;
