import classNames from 'classnames';
import { SubmitBtnProps } from './types';
import { Loader } from '../Loader/Loader';

export const SubmitBtn: React.FC<SubmitBtnProps> = ({
  text,
  className,
  isLoading,
}) => {
  const btnClasses = classNames(
    'base-btn',
    { 'h-[36px] w-[82px] xl:h-[39px] xl:w-[87px] bg-white/20': isLoading },
    className,
  );

  return (
    <button className={btnClasses} type="submit">
      {isLoading ? <Loader /> : text}
    </button>
  );
};
