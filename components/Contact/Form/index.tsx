import { FormEvent, useRef, useState } from 'react';
import PrimaryButton from '../../Buttons/Primary';
import FormInput from './FormInput';
import emailjs from '@emailjs/browser';
import { emailKeys } from '../../../lib';
import { useRouter } from 'next/router';

const Form = () => {
  const ref = useRef<HTMLFormElement | null>(null);

  const { publicID, serviceID, templateID } = emailKeys;

  const router = useRouter();

  const [success, setSuccess] = useState<boolean>(false);

  const [failure, setFailure] = useState<boolean>(false);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID!, templateID!, ref.current!, publicID)
      .then(
        () => {
          setSuccess(true), setFailure(false);
        },
        () => {
          setFailure(true), setSuccess(false);
        }
      )
      .then(() => {
        setTimeout(() => router.push('/'), 1000);
      });
  };

  return (
    <form
      ref={ref}
      onSubmit={onSubmitHandler}
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <div className="grid grid-cols-2 gap-x-3 items-end justify-between">
        <FormInput name="firstName" label="Full name" subLabel="First Name" />

        <FormInput name="lastName" subLabel="Last Name" />
      </div>

      <FormInput fieldType="email" name="email" label="Email address" />

      <FormInput
        name="message"
        label="Your message"
        height={112}
        type="textarea"
      />

      <div className="flex justify-between items-center">
        <PrimaryButton className="mt-2">Submit</PrimaryButton>

        <div
          className={`italic transition-all duration-300 max-w-[150px] text-green-700 ${
            !success ? 'hidden opacity-0' : 'opacity-100'
          }`}
        >
          Form successfully submited
        </div>

        <div
          className={`italic text-red-700 ${
            !failure ? 'hidden opacity-0' : 'opacity-100'
          }`}
        >
          Something went wrong
        </div>
      </div>
    </form>
  );
};

export default Form;
