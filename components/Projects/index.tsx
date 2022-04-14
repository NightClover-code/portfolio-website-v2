import { v4 } from 'uuid';
import { portfolioBoxes } from '../../utils/data';
import Content from '../Content';
import Tags from '../Tags';
import PortolioItem from './Item';

const Projects = () => {
  const projectsConfig = {
    description: `
      I spend most of time building awesome products, either for myself or
      my clients. Here are some of my greatest projects:
    `,
    category: 'Portfolio',
    withLine: true,
  };

  const tags = ['Frontend', 'Backend', 'FullStack', 'UI / UX'];

  return (
    <section className="projects__section mt-44 mb-10">
      <div className="text-center m-auto flex flex-col items-center">
        <Content {...projectsConfig}>
          My latest <span>work</span>
        </Content>

        <Tags tags={tags} />
      </div>

      <div className="grid grid-cols-3 mt-16 gap-7 justify-center">
        {portfolioBoxes.map(_item => {
          return <PortolioItem {..._item} key={v4()} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
