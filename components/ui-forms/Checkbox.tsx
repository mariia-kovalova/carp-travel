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

const Checkbox: FC<IProps> = ({
  id,
  inputName,
  label,
  credentials,
  control,
  onInput,
}) => (
  <label
    htmlFor={id}
    className="self-start flex gap-[8px] items-start
                tablet:w-[192px] desktop:w-[258px]"
  >
    <Controller
      control={control}
      name={inputName}
      render={({ field: { onChange, value, ...field } }) => (
        <input
          className="visually-hidden career-checkbox"
          {...field}
          id={id}
          type="checkbox"
          value={credentials[inputName] || value}
          onChange={e => {
            onInput({ [inputName]: e.target.checked });
            onChange(e.target.checked);
          }}
        />
      )}
    />
    <span
      className="checkbox-indicator block w-[22px] h-[22px] shrink-0 border-[1px] 
                  desktop:w-[24px] desktop:h-[24px]"
    />
    <span className="text-[12px] font-extralight leading-[24px]">{label}</span>
  </label>
);

export default Checkbox;
