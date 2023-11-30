import { FieldValues } from 'react-hook-form';
import data from '@/data/telegram.data.json';

const {
  title_contact,
  title_job_application,
  user_name,
  user_email,
  user_position,
  user_phone,
  user_message,
} = data;

export const getJobApplicationMessage = (formData: FieldValues) => {
  const { name, email, position, phone, message } = formData;

  return `<b>${title_job_application}</b>\n
  ${user_name}${name}
  ${user_email}${email}
  ${user_position}${position}
  ${user_phone}${phone}
  ${user_message}${message}`;
};

export const getContactMessage = (formData: FieldValues) => {
  const { name, email, message } = formData;

  return `<b>${title_contact}</b>\n
  ${user_name}${name}
  ${user_email}${email}
  ${user_message}${message}`;
};
