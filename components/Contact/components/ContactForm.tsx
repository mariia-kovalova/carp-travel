'use client';

import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';

import info from '@/data/contact.data.json';
import STORAGE_KEYS from '@/constants/localStorageKeys';
import schemas from '@/validation/schemas';
import notify from '@/utils/notify';

import Field from '@/components/forms/Field';
import Textarea from '@/components/forms/Textarea';
import SubmitBtn from '@/components/forms/SubmitBtn';

import '@/styles/forms.css';

const { fields, textarea, button } = info;
const { contact_form } = STORAGE_KEYS;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas.contact_schema),
  });

  useFormPersist(contact_form, {
    watch,
    setValue,
  });

  const onSubmit = () => {
    reset();
    notify.onSuccess('Success');
  };

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div
        className="xl:gap-[24px] xl:flex-col md:flex 
                      md:gap-[20px] mb-[6px]"
      >
        <ul className="xl:w-[607px] xl:flex xl:gap-[28px] md:w-[221px]">
          {fields.map(field => (
            <li
              className="xl:mb-[24px] xl:basis-[calc(((100%-28px)/2))] mb-[16px]"
              key={field.id}
            >
              <Field {...field} register={register} errors={errors} />
            </li>
          ))}
        </ul>
        <div className="xl:h-[174px] md:h-[221px] md:flex-grow h-[196px]">
          <Textarea {...textarea} register={register} />
        </div>
      </div>

      <div className="xl:mt-[16px]">
        <SubmitBtn text={button.text} />
      </div>
    </form>
  );
};

export default ContactForm;
