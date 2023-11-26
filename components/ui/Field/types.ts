import { FieldErrors, FieldValues } from 'react-hook-form';

export interface FieldProps {
  id: string;
  inputName: string;
  label: string;
  type: string;
  placeholder: string;
  register: any;
  errors: FieldErrors<FieldValues>;
  className?: string;
}
