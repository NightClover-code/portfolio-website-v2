import Content from '../Content';

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
    <section className="services__section mt-44">
      <div className="center__content">
        <Content {...config}>
          What I <span>do</span>
        </Content>
      </div>
    </section>
  );
};

export default Services;
