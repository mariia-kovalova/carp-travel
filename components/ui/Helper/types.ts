import { FieldErrors, FieldValues } from 'react-hook-form';

export interface HelperProps {
  inputName: string;
  errors: FieldErrors<FieldValues>;
}
