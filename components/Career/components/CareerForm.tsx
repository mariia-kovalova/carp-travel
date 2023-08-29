'use client';

import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import CareerCall from './CareerCall';
import Field from '@/components/ui-forms/Field';
import Textarea from '@/components/ui-forms/Textarea';
import Checkbox from '@/components/ui-forms/Checkbox';
import SubmitBtn from '@/components/ui-forms/SubmitBtn';

import getDefaultValues from '@/utils/getDefaultValues';
import schemas from '@/validation/schemas';

import info from '@/data/career.data.json';

import '@/styles/forms.css';

const { fields, checkbox, textarea } = info;

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas.career_schema),
    defaultValues: {
      ...getDefaultValues([...fields, textarea, checkbox]),
    },
  });

  const onSubmit = (values: FieldValues) => {
    console.log(values);
    if (!values.consent) {
      return alert('please give your consent');
    }
    reset();
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
            <SubmitBtn />
          </div>
        </div>
      </form>
    </>
  );
};

export default CareerForm;
