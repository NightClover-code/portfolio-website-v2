import FormInput from './FormInput';

const Form = () => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-x-3 items-end justify-between">
        <FormInput label="Full name" subLabel="First Name" />

        <FormInput subLabel="Last Name" />
      </div>

      <FormInput label="Email address" />

      <FormInput label="Your message" height={112} type="textarea" />
    </form>
  );
};

export default Form;