interface IProps {
  id: string;
  label: string;
  extraClass?: string;
}

const Label: React.FC<IProps> = ({ id, label, extraClass }) => (
  <label
    className={`text-xs  leading-[24px] tracking-[2.4px] ${extraClass}`}
    htmlFor={id}
  >
    {label}
  </label>
);

export default Label;
