import { FC } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Cross from './Cross';

interface IProps {
  inputName: string;
  errors: FieldErrors<FieldValues>;
}

const Helper: FC<IProps> = ({ inputName, errors }) => (
  <p
    className="absolute bottom-[-23px] right-0 flex gap-[5px] items-center
            text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-error"
  >
    <Cross />
    <ErrorMessage errors={errors} name={inputName} />
  </p>
);

export default Helper;
