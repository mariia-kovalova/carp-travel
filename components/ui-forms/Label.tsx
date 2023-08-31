import { FC } from 'react';

interface IProps {
  id: string;
  label: string;
  className?: string;
}

const Label: FC<IProps> = ({ id, label, className }) => (
  <label
    className={`text-[12px] font-extralight leading-[24px] tracking-[2.4px] ${className}`}
    htmlFor={id}
  >
    {label}
  </label>
);

export default Label;
