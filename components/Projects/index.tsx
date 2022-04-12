import Content from '../Content';

const Projects = () => {
  const config = {
    description: `
      I spend most of time building awesome products, either for myself or
      my clients. Here are some of my greatest projects:
    `,
    category: 'Portfolio',
    withLine: true,
  };

  return (
    <section className="projects__section mt-44">
      <div className="text-center m-auto flex flex-col items-center">
        <Content {...config}>
          My latest <span>work</span>
        </Content>
      </div>
    </section>
  );
};

export default Projects;
