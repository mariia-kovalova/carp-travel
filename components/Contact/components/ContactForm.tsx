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
        className="mb-[6px] tablet:flex tablet:gap-[20px] 
                      desktop:gap-[24px] desktop:flex-col"
      >
        <ul className="tablet:w-[221px] desktop:w-[607px] desktop:flex desktop:gap-[28px]">
          {fields.map(field => (
            <li
              className="mb-[16px] desktop:mb-[24px] desktop:basis-[calc(((100%-28px)/2))]"
              key={field.id}
            >
              <Field {...field} register={register} errors={errors} />
            </li>
          ))}
        </ul>
        <div className="h-[196px] tablet:h-[221px] tablet:flex-grow desktop:h-[174px]">
          <Textarea {...textarea} register={register} />
        </div>
      </div>

      <div className="desktop:mt-[16px]">
        <SubmitBtn text={button.text} />
      </div>
    </form>
  );
};

export default ContactForm;
