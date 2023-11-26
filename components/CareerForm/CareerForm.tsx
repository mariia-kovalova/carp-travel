'use client';

import { useForm, FieldValues } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';

import data from '@/data/career.data.json';
import schemas from '@/validation/schemas';
import notify from '@/utils/notify';
import VALIDATION_MESSAGES from '@/validation/messages';

import { Field } from '@/components/ui/Field';
import { Textarea } from '@/components/ui/Textarea';
import { Checkbox } from '@/components/ui/Checkbox';
import { SubmitBtn } from '@/components/ui/SubmitBtn';

import { career_form } from '@/data/storage.data';

const { fields, checkbox, textarea, button } = data.form;

export const CareerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas.career_schema),
  });

  useFormPersist(career_form, {
    watch,
    setValue,
  });

  const onSubmit = (values: FieldValues) => {
    if (!values.consent) return notify.onWarn(VALIDATION_MESSAGES.consentMes);
    reset();
    notify.onSuccess('Success');
  };

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="md:flex md:gap-7 xl:gap-[24px]">
        <ul>
          {fields.map(field => (
            <li className="mb-[16px] xl:mb-[24px]" key={field.id}>
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

      <div className="md:flex md:justify-between smOnly:mt-3">
        <Checkbox register={register} {...checkbox} />

        <SubmitBtn
          className="mt-4 md:mt-[-22px] xl:mt-[-18px] smOnly:ml-auto"
          text={button.text}
        />
      </div>
    </form>
  );
};
