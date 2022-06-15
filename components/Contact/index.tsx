import Content from './Content';
import Form from './Form';

const Contact = () => {
  return (
    <section className="contact__section">
      <div className="flex items-center justify-between">
        <Content />

        <Form />
      </div>
    </section>
  );
};

export default Contact;
