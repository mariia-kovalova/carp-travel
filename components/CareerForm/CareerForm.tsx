'use client';

import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';

import { Field } from '@/components/ui/Field';
import { Textarea } from '@/components/ui/Textarea';
import { Checkbox } from '@/components/ui/Checkbox';
import { SubmitBtn } from '@/components/ui/SubmitBtn';

import { career_form } from '@/data/storage.data';
import { career_schema } from '@/data/schemas.data';
import notify from '@/utils/notify';
import data from '@/data/career.data.json';
import messages from '@/data/messages.data.json';

const { fields, checkbox, textarea, button } = data.form;
const { consentMes } = messages;

export const CareerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(career_schema),
  });

  useFormPersist(career_form, {
    watch,
    setValue,
  });

  const onSubmit = (values: FieldValues) => {
    if (!values.consent) return notify.onWarn(consentMes);
    reset();
    notify.onSuccess('Success');
  };

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="md:flex md:gap-7 xl:gap-6">
        <ul className="xl:w-[290px]">
          {fields.map(field => (
            <li className="mb-4 xl:mb-[22px]" key={field.id}>
              <Field {...field} register={register} errors={errors} />
            </li>
          ))}
        </ul>

        <Textarea
          className="h-[224px] md:h-[260px] xl:h-[305px] xl:w-[292px]"
          register={register}
          {...textarea}
        />
      </div>

      <div className="md:flex md:justify-between xl:mt-3 smOnly:mt-3">
        <Checkbox register={register} {...checkbox} />

        <SubmitBtn
          className="mt-4 md:mt-[-22px] xl:mt-[-26px] smOnly:ml-auto"
          text={button.text}
        />
      </div>
    </form>
  );
};
