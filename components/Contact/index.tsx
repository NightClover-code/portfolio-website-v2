import Content from './Content';
import Form from './Form';

const Contact = () => {
  return (
    <section className="contact__section mt-24">
      <div className="grid grid-cols-2 items-start justify-between mid2:grid-cols-1 mid2:gap-y-8">
        <Content />

        <Form />
      </div>
    </section>
  );
};

export default Contact;
