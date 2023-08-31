'use client';

import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import getDefaultValues from '@/utils/getDefaultValues';
import schemas from '@/validation/schemas';
import info from '@/data/contact.data.json';

import Field from '@/components/ui-forms/Field';
import Textarea from '@/components/ui-forms/Textarea';
import SubmitBtn from '@/components/ui-forms/SubmitBtn';

import '@/styles/forms.css';

const { fields, textarea, button } = info;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas.contact_schema),
    defaultValues: {
      ...getDefaultValues([...fields, textarea]),
    },
  });

  const onSubmit = (values: FieldValues) => {
    console.log(values);
    reset();
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
