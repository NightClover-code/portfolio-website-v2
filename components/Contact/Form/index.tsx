import FormInput from './FormInput';

const Form = () => {
  return (
    <form className="min-w-[595px]">
      <div className="flex items-end">
        <FormInput label="Full name" subLabel="First Name" />

        <FormInput subLabel="Last Name" />
      </div>

      <FormInput label="Email address" />

      <FormInput label="Your message" height={112} type="textarea" />
    </form>
  );
};

export default Form;
