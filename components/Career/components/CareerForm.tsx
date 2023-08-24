'use client';

import CareerCall from './CareerCall';
import Checkbox from '@/components/ui-forms/Checkbox';
import Field from '@/components/ui-forms/Field';
import SubmitBtn from '@/components/ui-forms/SubmitBtn';
import Textarea from '@/components/ui-forms/Textarea';

import { getDefaultValues } from '@/utils/getdefaultValues';
import { checkbox, fields, textarea } from '@/data/career.data';
import { career_schema } from '@/validation/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FieldValues } from 'react-hook-form';

import '@/styles/forms.css';

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(career_schema),
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
          <Textarea {...textarea} register={register} />
        </div>

        <div className="max-tablet:mt-[18px] tablet:flex justify-between">
          <Checkbox {...checkbox} register={register} />
          <SubmitBtn />
        </div>
      </form>
    </>
  );
};

export default CareerForm;
