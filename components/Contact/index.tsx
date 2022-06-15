import Content from './Content';
import Form from './Form';

const Contact = () => {
  return (
    <section className="contact__section mt-24">
      <div className="flex items-start justify-between">
        <Content />

        <Form />
      </div>
    </section>
  );
};

export default Contact;
