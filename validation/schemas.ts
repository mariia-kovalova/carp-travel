import * as Yup from 'yup';
import { emailMes, nameMes, phoneMes, requiredMes } from './messages';
import { nameRegExp, phoneRegExp } from './regexp';

export const career_schema = Yup.object().shape({
  name: Yup.string()
    .required(requiredMes)
    .matches(nameRegExp, nameMes.format)
    .max(16, nameMes.size),
  email: Yup.string().required(requiredMes).email(emailMes),
  position: Yup.string().required(requiredMes),
  phone: Yup.string().required(requiredMes).matches(phoneRegExp, phoneMes),
});

export const contact_schema = Yup.object().shape({
  name: Yup.string()
    .required(requiredMes)
    .matches(nameRegExp, nameMes.format)
    .max(16, nameMes.size),
  email: Yup.string().required(requiredMes).email(emailMes),
});
