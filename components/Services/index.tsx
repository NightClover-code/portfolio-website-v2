import Content from '../Content';
import ServicesGrid from './ServicesGrid';

const Services = () => {
  const config = {
    description: `
      My aim is to make it quick and easy for you to get your business to scale, 
      and I acheive that by providing the following services:
    `,
    category: 'Services',
    withLine: true,
  };

  return (
    <section className="services__section global-mt">
      <div className="center__content" data-aos="fade-up">
        <Content {...config}>
          What I <span>do</span>
        </Content>
      </div>

      <ServicesGrid />
    </section>
  );
};

export default Services;
