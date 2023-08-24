import { FC } from 'react';

interface IProps {
  id: string;
  inputName: string;
  label: string;
  register: any;
}

const Textarea: FC<IProps> = ({ id, inputName, label, register }) => {
  return (
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
      <textarea
        id={id}
        {...register(inputName)}
        className="block h-full w-full p-[8px] bg-transparent-white-dark resize-none"
      />
    </div>
  );
};

export default Textarea;
