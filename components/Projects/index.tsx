import Content from '../Content';
import Tags from '../Tags';

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
    <section className="projects__section mt-44 mb-10">
      <div className="text-center m-auto flex flex-col items-center">
        <Content {...config}>
          My latest <span>work</span>
        </Content>

        <Tags />
      </div>
    </section>
  );
};

export default Projects;
