'use client';

import { useEffect, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';

import { Field } from '@/components/ui/Field';
import { Textarea } from '@/components/ui/Textarea';
import { Checkbox } from '@/components/ui/Checkbox';
import { SubmitBtn } from '@/components/ui/SubmitBtn';

import { StatusVariants } from '@/types/TelegramStatus';
import { getJobApplicationMessage, notify, sendDataToTelegram } from '@/utils';

import { career_form } from '@/data/storage.data';
import { career_schema } from '@/data/schemas.data';
import messages from '@/data/telegram.data.json';
import data from '@/data/career.data.json';

const { fields, checkbox, textarea, button } = data.form;
const { onSuccess, onError, onNoConsent } = messages.notify;

export const CareerForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [popUpType, setPopUpType] = useState<StatusVariants | 'default'>(
    'default',
  );

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

  useEffect(() => {
    switch (popUpType) {
      case 'default':
        return;
      case 'success':
        notify.onSuccess(onSuccess);
        setPopUpType('default');
        return;
      case 'error':
        notify.onError(onError);
        setPopUpType('default');
        return;
    }
  }, [popUpType]);

  const onSubmit = async (formData: FieldValues) => {
    if (!formData.consent) return notify.onWarn(onNoConsent);

    try {
      setIsLoading(true);
      const message = getJobApplicationMessage(formData);
      const status: StatusVariants = await sendDataToTelegram(message);
      setPopUpType(status);
      reset();
    } catch (error) {
      setPopUpType('error');
    } finally {
      setIsLoading(false);
    }
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
          className="smOnly:ml-auto"
          text={button.text}
          isLoading={isLoading}
        />
      </div>
    </form>
  );
};
