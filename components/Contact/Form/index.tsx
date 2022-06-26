import { FormEvent, useRef } from 'react';
import PrimaryButton from '../../Buttons/Primary';
import FormInput from './FormInput';
import emailjs from '@emailjs/browser';
import { emailKeys } from '../../../lib';

const Form = () => {
  const ref = useRef<HTMLFormElement | null>(null);

  const { publicID, serviceID, templateID } = emailKeys;

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceID!, templateID!, ref.current!, publicID).then(
      () => alert('Thanks for your message!'),
      () => alert('Something went wrong :(')
    );
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

      <FormInput name="email" label="Email address" />

      <FormInput
        name="message"
        label="Your message"
        height={112}
        type="textarea"
      />

      <PrimaryButton className="mt-2">Submit</PrimaryButton>
    </form>
  );
};

export default Form;
