import { FC } from 'react';
import Label from './Label';

interface IProps {
  id: string;
  inputName: string;
  label: string;
  register: any;
}

const Textarea: FC<IProps> = ({ id, inputName, label, register }) => (
  <div
    className="w-full h-full flex flex-col gap-[4px] 
                tablet:flex-grow
                desktop:gap-[6px]"
  >
    <Label id={id} label={label} />
    <textarea
      className="block h-full w-full p-[8px] bg-transparent-white-dark resize-none"
      id={id}
      {...register(inputName)}
    />
  </div>
);

export default Textarea;
