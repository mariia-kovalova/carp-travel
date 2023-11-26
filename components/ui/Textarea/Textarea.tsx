import classNames from 'classnames';
import { Label } from '../Label/Label';
import { TextareaProps } from './types';

export const Textarea: React.FC<TextareaProps> = ({
  id,
  inputName,
  label,
  register,
  className,
}) => {
  const wrapperClasses = classNames(
    'flex flex-col gap-[4px] md:flex-grow xl:gap-[6px]',
    className,
  );

  return (
    <div className={wrapperClasses}>
      <Label id={id} label={label} />
      <textarea
        className="h-full resize-none bg-white/5 p-[8px]"
        id={id}
        {...register(inputName)}
      />
    </div>
  );
};
