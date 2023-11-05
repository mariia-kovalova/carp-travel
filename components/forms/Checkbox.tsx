interface IProps {
  id: string;
  inputName: string;
  label: string;
  register: any;
}

const Checkbox: React.FC<IProps> = ({ id, inputName, label, register }) => (
  <label
    htmlFor={id}
    className="xl:w-[258px] md:w-[192px] flex items-start
                gap-[8px] self-start"
  >
    <input
      className="visually-hidden career-checkbox"
      id={id}
      type="checkbox"
      {...register(inputName)}
    />
    <span
      className="checkbox-indicator xl:w-[24px] xl:h-[24px] block h-[22px] w-[22px] 
                  shrink-0 border-[1px]"
    />
    <span className="text-xs  leading-[24px]">{label}</span>
  </label>
);

export default Checkbox;
