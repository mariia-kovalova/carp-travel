'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';

import { Field } from '@/components/ui/Field';
import { Textarea } from '@/components/ui/Textarea';
import { SubmitBtn } from '@/components/ui/SubmitBtn';

import { contact_form } from '@/data/storage.data';
import { contact_schema } from '@/data/schemas.data';
import data from '@/data/contact.data.json';
import notify from '@/utils/notify';

const { fields, textarea, button } = data.form;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contact_schema),
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
      <div className="mb-[6px] md:flex md:gap-5 xl:h-[300px] xl:flex-col xl:gap-11">
        <ul className="md:w-[221px] xl:flex xl:h-[58px] xl:w-[607px] xl:gap-7">
          {fields.map(field => (
            <li
              className="xl:basis-[calc((50%-14px))] notXl:mb-6"
              key={field.id}
            >
              <Field {...field} register={register} errors={errors} />
            </li>
          ))}
        </ul>

        <Textarea
          className="h-[220px] md:h-[254px] md:flex-grow xl:h-[174px]"
          register={register}
          {...textarea}
        />
      </div>

      <SubmitBtn className="ml-auto mt-4 md:mt-3 xl:mt-6" text={button.text} />
    </form>
  );
};
