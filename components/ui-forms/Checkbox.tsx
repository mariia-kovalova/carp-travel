import { FC } from 'react';

interface IProps {
  id: string;
  inputName: string;
  label: string;
  register: any;
}

const Checkbox: FC<IProps> = ({ id, inputName, label, register }) => {
  return (
    <label
      htmlFor={id}
      className="self-start flex gap-[8px] items-start
                tablet:w-[192px] desktop:w-[258px]"
    >
      <input
        id={id}
        type="checkbox"
        {...register(inputName)}
        className="visually-hidden career-checkbox"
      />
      <span
        className="checkbox-indicator block w-[22px] h-[22px] shrink-0 border-[1px] 
                  desktop:w-[24px] desktop:h-[24px]"
      />
      <span className="text-[12px] font-extralight leading-[24px]">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
