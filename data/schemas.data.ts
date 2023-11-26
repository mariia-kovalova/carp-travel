import * as Yup from 'yup';
import data from '@/data/messages.data.json';
import { REG_EXPS } from '@/data/regexp.data';

const { requiredMes, nameMes, emailMes, phoneMes } = data;
const { nameRegExp, phoneRegExp } = REG_EXPS;

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
