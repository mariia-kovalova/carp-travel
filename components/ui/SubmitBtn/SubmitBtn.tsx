import classNames from 'classnames';
import { SubmitBtnProps } from './types';

export const SubmitBtn: React.FC<SubmitBtnProps> = ({ text, className }) => {
  const btnClasses = classNames('base-btn', className);

  return (
    <button className={btnClasses} type="submit">
      {text}
    </button>
  );
};
