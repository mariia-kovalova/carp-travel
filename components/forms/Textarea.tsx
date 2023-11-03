import Label from './Label';

interface IProps {
  id: string;
  inputName: string;
  label: string;
  register: any;
}

const Textarea: React.FC<IProps> = ({ id, inputName, label, register }) => (
  <div
    className="x;l:gap-[6px] md:flex-grow flex h-full w-full 
                flex-col
                gap-[4px]"
  >
    <Label id={id} label={label} />
    <textarea
      className="block h-full w-full resize-none bg-white/5 p-[8px]"
      id={id}
      {...register(inputName)}
    />
  </div>
);

export default Textarea;
