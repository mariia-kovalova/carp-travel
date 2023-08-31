import * as Yup from 'yup';

import VALIDATION_MESSAGES from './messages';
import REG_EXPS from './regexp';

const { requiredMes, nameMes, emailMes, phoneMes } = VALIDATION_MESSAGES;
const { nameRegExp, phoneRegExp } = REG_EXPS;

const career_schema = Yup.object().shape({
  name: Yup.string()
    .required(requiredMes)
    .matches(nameRegExp, nameMes.format)
    .max(16, nameMes.size),
  email: Yup.string().required(requiredMes).email(emailMes),
  position: Yup.string().required(requiredMes),
  phone: Yup.string().required(requiredMes).matches(phoneRegExp, phoneMes),
});

const contact_schema = Yup.object().shape({
  name: Yup.string()
    .required(requiredMes)
    .matches(nameRegExp, nameMes.format)
    .max(16, nameMes.size),
  email: Yup.string().required(requiredMes).email(emailMes),
});

const schemas = {
  career_schema,
  contact_schema,
};

export default schemas;
