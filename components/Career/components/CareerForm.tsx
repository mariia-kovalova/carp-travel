'use client';

import { useEffect, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import info from '@/data/career.data.json';
import storageAPI from '@/utils/localStorageAPI';
import STORAGE_KEYS from '@/constants/localStorageKeys';
import schemas from '@/validation/schemas';

import Field from '@/components/ui-forms/Field';
import Textarea from '@/components/ui-forms/Textarea';
import Checkbox from '@/components/ui-forms/Checkbox';
import SubmitBtn from '@/components/ui-forms/SubmitBtn';
import CareerCall from './CareerCall';

import '@/styles/forms.css';

const { fields, checkbox, textarea, button } = info;
const { career_form } = STORAGE_KEYS;

const CareerForm = () => {
  const [credentials, setCredentials] = useState<FieldValues>(
    storageAPI.load(career_form) || {}
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas.career_schema),
  });

  useEffect(() => {
    storageAPI.save(career_form, credentials);
  }, [credentials]);

  const onInput = (newCredentials: FieldValues) => {
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      ...newCredentials,
    }));
  };

  const onSubmit = (values: FieldValues) => {
    if (!values.consent) return alert('please give your consent');
    storageAPI.remove(career_form);
  };

  return (
    <>
      <CareerCall />
      <form
        className="w-full"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className="tablet:flex tablet:gap-[20px] desktop:gap-[24px]">
          <ul>
            {fields.map(field => (
              <li className="mb-[16px] desktop:mb-[24px]" key={field.id}>
                <Field
                  {...field}
                  credentials={credentials}
                  control={control}
                  onInput={onInput}
                  errors={errors}
                />
              </li>
            ))}
          </ul>
          <div className="h-[196px] tablet:h-[260px] desktop:w-[292px] desktop:h-[305px]">
            <Textarea
              {...textarea}
              credentials={credentials}
              control={control}
              onInput={onInput}
            />
          </div>
        </div>

        <div className="max-tablet:mt-[18px] tablet:flex justify-between">
          <Checkbox
            {...checkbox}
            credentials={credentials}
            control={control}
            onInput={onInput}
          />

          <div className="tablet:max-desktop:mt-[-14px] desktop:mt-[-18px]">
            <SubmitBtn text={button.text} />
          </div>
        </div>
      </form>
    </>
  );
};

export default CareerForm;
