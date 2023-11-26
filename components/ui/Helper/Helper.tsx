import { ErrorMessage } from '@hookform/error-message';
import { HelperProps } from './types';
import Cross from '@/public/icons/icon_cross.svg';

export const Helper: React.FC<HelperProps> = ({ inputName, errors }) => (
  <p className="absolute bottom-[-23px] right-0 flex items-center gap-[5px] text-xs leading-6 tracking-[2.4px] text-error">
    <Cross width={18} height={18} />
    <ErrorMessage errors={errors} name={inputName} />
  </p>
);
