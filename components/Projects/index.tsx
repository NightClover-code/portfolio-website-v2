import Content from '../Content';
import Tags from '../Tags';

const Projects = () => {
  const projectsConfig = {
    description: `
      I spend most of time building awesome products, either for myself or
      my clients. Here are some of my greatest projects:
    `,
    category: 'Portfolio',
    withLine: true,
  };

  const tags = ['All works', 'Frontend', 'Backend', 'UI / UX'];

  return (
    <section className="projects__section mt-44 mb-10">
      <div className="text-center m-auto flex flex-col items-center">
        <Content {...projectsConfig}>
          My latest <span>work</span>
        </Content>

        <Tags tags={tags} />
      </div>

      <div className="grid grid-cols-3 gap-7 mt-16">
        <div className="block border-2 border-black h-44"></div>
        <div className="block border-2 border-black h-44"></div>
        <div className="block border-2 border-black h-44"></div>
        <div className="block border-2 border-black h-44"></div>
        <div className="block border-2 border-black h-44"></div>
        <div className="block border-2 border-black h-44"></div>
      </div>
    </section>
  );
};

export default Projects;
