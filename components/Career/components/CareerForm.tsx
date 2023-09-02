'use client';

import { useForm, FieldValues } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';

import info from '@/data/career.data.json';
import schemas from '@/validation/schemas';
import notify from '@/utils/notify';
import STORAGE_KEYS from '@/constants/localStorageKeys';
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
      <div className="tablet:flex tablet:gap-[20px] desktop:gap-[24px]">
        <ul>
          {fields.map(field => (
            <li className="mb-[16px] desktop:mb-[24px]" key={field.id}>
              <Field {...field} register={register} errors={errors} />
            </li>
          ))}
        </ul>
        <div className="h-[196px] tablet:h-[260px] desktop:w-[292px] desktop:h-[305px]">
          <Textarea {...textarea} register={register} />
        </div>
      </div>

      <div className="max-tablet:mt-[18px] tablet:flex justify-between">
        <Checkbox {...checkbox} register={register} />

        <div className="tablet:max-desktop:mt-[-14px] desktop:mt-[-18px]">
          <SubmitBtn text={button.text} />
        </div>
      </div>
    </form>
  );
};

export default CareerForm;
