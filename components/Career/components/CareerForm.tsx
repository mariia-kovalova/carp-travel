'use client';

import { useForm, FieldValues } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';

import info from '@/data/career.data.json';
import schemas from '@/validation/schemas';
import notify from '@/utils/notify';
import STORAGE_KEYS from '@/data/storage.data';
import VALIDATION_MESSAGES from '@/validation/messages';

import Field from '@/components/forms/Field';
import Textarea from '@/components/forms/Textarea';
import Checkbox from '@/components/forms/Checkbox';
import SubmitBtn from '@/components/forms/SubmitBtn';

import '@/styles/forms.css';

const { fields, checkbox, textarea, button } = info;
const { career_form } = STORAGE_KEYS;

const CareerForm = () => {
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
      <div className="md:flex md:gap-[20px] xl:gap-[24px]">
        <ul>
          {fields.map(field => (
            <li className="mb-[16px] xl:mb-[24px]" key={field.id}>
              <Field {...field} register={register} errors={errors} />
            </li>
          ))}
        </ul>
        <div className="h-[196px] md:h-[260px] xl:h-[305px] xl:w-[292px]">
          <Textarea {...textarea} register={register} />
        </div>
      </div>

      <div className="justify-between md:flex smOnly:mt-[18px]">
        <Checkbox {...checkbox} register={register} />

        <div className="xl:mt-[-18px] mdOnly:mt-[-14px]">
          <SubmitBtn text={button.text} />
        </div>
      </div>
    </form>
  );
};

export default CareerForm;
