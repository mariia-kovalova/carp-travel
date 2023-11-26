'use client';

import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';

import data from '@/data/contact.data.json';
import schemas from '@/validation/schemas';
import notify from '@/utils/notify';

import { Field } from '@/components/ui/Field';
import { Textarea } from '@/components/ui/Textarea';
import { SubmitBtn } from '@/components/ui/SubmitBtn';

import { contact_form } from '@/data/storage.data';

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
      <div className="mb-[6px] md:flex md:gap-[20px] xl:flex-col xl:gap-[24px]">
        <ul className="md:w-[221px] xl:mb-[24px] xl:flex xl:w-[607px] xl:gap-[28px]">
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

      <SubmitBtn className="ml-auto mt-4 md:mt-3" text={button.text} />
    </form>
  );
};
