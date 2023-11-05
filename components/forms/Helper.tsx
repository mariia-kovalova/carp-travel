import { FieldErrors, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Cross from './Cross';

interface IProps {
  inputName: string;
  errors: FieldErrors<FieldValues>;
}

const Helper: React.FC<IProps> = ({ inputName, errors }) => (
  <p
    className="absolute bottom-[-23px] right-0 flex items-center gap-[5px]
            text-xs  leading-[24px] tracking-[2.4px] text-error"
  >
    <Cross />
    <ErrorMessage errors={errors} name={inputName} />
  </p>
);

export default Helper;
